import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18",
})

export default stripe

export const getStripePublishableKey = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!key) {
    console.warn("Stripe publishable key not configured. Using test key.")
    return "pk_test_51234567890abcdefghijklmnop"
  }
  return key
}

export const createCheckoutSession = async (
  items: Array<{
    productId: string
    quantity: number
    price: number
    name: string
    description?: string
    variants?: Record<string, string>
  }>,
  customerEmail?: string,
  promoCode?: string,
) => {
  const lineItems = items.map((item) => ({
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
  }))

  const sessionConfig: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ["card"],
    line_items: lineItems as Stripe.Checkout.SessionCreateParams.LineItem[],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
    customer_email: customerEmail,
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
  }

  if (promoCode && promoCode.toUpperCase() === "TUFF10") {
    const discount = await createOrGetDiscount()
    if (discount) {
      sessionConfig.discounts = [{ coupon: discount }]
    }
  }

  const session = await stripe.checkout.sessions.create(sessionConfig)
  return session
}

export const createOrGetDiscount = async (): Promise<string | null> => {
  try {
    const coupons = await stripe.coupons.list({ limit: 100 })
    const existingCoupon = coupons.data.find((c) => c.id === "TUFF10")

    if (existingCoupon) {
      return existingCoupon.id
    }

    const newCoupon = await stripe.coupons.create({
      id: "TUFF10",
      percent_off: 10,
      duration: "repeating",
      duration_in_months: 12,
    })

    return newCoupon.id
  } catch {
    console.error("Failed to create/get discount")
    return null
  }
}

export const getCheckoutSession = async (sessionId: string) => {
  return stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "payment_intent"],
  })
}

export const createCustomer = async (email: string, name: string) => {
  return stripe.customers.create({
    email,
    name,
  })
}

export const sendOrderConfirmationEmail = async (
  email: string,
  orderData: {
    orderId: string
    items: Array<{ name: string; quantity: number; price: number }>
    total: number
    shippingAddress: any
  },
) => {
  // This would be replaced with actual email service (SendGrid, Mailgun, etc)
  console.log("Order confirmation email would be sent to:", email, orderData)
}
