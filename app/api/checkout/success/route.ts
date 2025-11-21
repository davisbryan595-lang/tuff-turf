import { NextRequest, NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json({ error: "No session ID provided" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "payment_intent"],
    })

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 })
    }

    const metadata = session.metadata || {}
    const shippingAddress = metadata.shippingAddress ? JSON.parse(metadata.shippingAddress) : null

    const lineItems = session.line_items?.data || []
    const items = lineItems.map((item: any) => ({
      description: item.description,
      quantity: item.quantity,
      amount_total: item.amount_total,
      price_data: item.price,
    }))

    const amountTotal = session.amount_total || 0
    const amountSubtotal = session.amount_subtotal || 0
    const discount = amountSubtotal - amountTotal > 0 ? amountSubtotal - amountTotal : 0

    return NextResponse.json({
      sessionId: session.id,
      email: session.customer_email,
      items,
      subtotal: amountSubtotal / 100,
      discount: discount / 100,
      shipping: 0,
      tax: 0,
      total: amountTotal / 100,
      amount_total: amountTotal,
      shippingAddress,
      paymentStatus: session.payment_status,
      status: session.status,
    })
  } catch (error) {
    console.error("Success page error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    )
  }
}
