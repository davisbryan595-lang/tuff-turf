import { NextRequest, NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, email, shippingAddress, promoCode } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 })
    }

    if (!email || !shippingAddress) {
      return NextResponse.json({ error: "Missing required information" }, { status: 400 })
    }

    const lineItems = items.map(
      (item: {
        productId: string
        name: string
        description?: string
        price: number
        quantity: number
        variants?: Record<string, string>
      }) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description || "",
            metadata: {
              productId: item.productId,
              variants: JSON.stringify(item.variants || {}),
            },
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }),
    )

    const sessionConfig: any = {
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout`,
      customer_email: email,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 999,
              currency: "usd",
            },
            display_name: "Standard shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 3,
              },
              maximum: {
                unit: "business_day",
                value: 5,
              },
            },
          },
        },
      ],
      metadata: {
        shippingAddress: JSON.stringify(shippingAddress),
        promoCode: promoCode || "none",
      },
    }

    // Apply promo code if provided
    if (promoCode && promoCode.toUpperCase() === "TUFF10") {
      try {
        const coupons = await stripe.coupons.list({ limit: 100 })
        const existingCoupon = coupons.data.find((c) => c.id === "TUFF10")

        let couponId = existingCoupon?.id

        if (!existingCoupon) {
          const newCoupon = await stripe.coupons.create({
            id: "TUFF10",
            percent_off: 10,
            duration: "repeating",
            duration_in_months: 12,
          })
          couponId = newCoupon.id
        }

        if (couponId) {
          sessionConfig.discounts = [{ coupon: couponId }]
        }
      } catch (error) {
        console.error("Error applying coupon:", error)
      }
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    )
  }
}
