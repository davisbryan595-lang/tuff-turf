"use client"

import React, { useState, useEffect } from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function Checkout() {
  const { items, getSubtotal, getDiscount, activePromoCode, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [shippingForm, setShippingForm] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  })

  const subtotal = getSubtotal()
  const discount = getDiscount(activePromoCode || "")
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = (subtotal - discount + shipping) * 0.08
  const total = subtotal - discount + shipping + tax

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setShippingForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !shippingForm.fullName || !shippingForm.address) {
      alert("Please fill in all required fields")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.product.id,
            name: item.product.name,
            description: item.product.description,
            price: item.price,
            quantity: item.quantity,
            variants: item.variants,
          })),
          email,
          shippingAddress: shippingForm,
          promoCode: activePromoCode,
        }),
      })

      const data = await response.json()

      if (data.error) {
        alert(`Error: ${data.error}`)
        setLoading(false)
        return
      }

      if (data.url) {
        clearCart()
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("An error occurred during checkout. Please try again.")
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6 tracking-tight">CHECKOUT</h1>
          <p className="text-xl text-gray-300 mb-8">Your cart is empty</p>
          <Link
            href="/merch"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tight">CHECKOUT</h1>
          <p className="text-xl text-gray-300">Secure payment powered by Stripe</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleCheckout} className="space-y-8">
              {/* Customer Info */}
              <div className="bg-muted/30 border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-muted/30 border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={shippingForm.fullName}
                      onChange={handleShippingChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Address *</label>
                    <input
                      type="text"
                      required
                      name="address"
                      value={shippingForm.address}
                      onChange={handleShippingChange}
                      placeholder="123 Main St"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">City *</label>
                      <input
                        type="text"
                        required
                        name="city"
                        value={shippingForm.city}
                        onChange={handleShippingChange}
                        placeholder="New York"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">State *</label>
                      <input
                        type="text"
                        required
                        name="state"
                        value={shippingForm.state}
                        onChange={handleShippingChange}
                        placeholder="NY"
                        maxLength={2}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors uppercase"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      name="zipCode"
                      value={shippingForm.zipCode}
                      onChange={handleShippingChange}
                      placeholder="10001"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Address Same as Shipping Note */}
              <div className="bg-accent/10 border border-accent rounded-lg p-6">
                <p className="text-sm text-gray-300">
                  ✓ Billing address will be collected securely during payment processing with Stripe.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Proceed to Payment</>
                )}
              </button>

              <div className="text-center text-sm text-gray-400">
                <p>This site is protected by reCAPTCHA and the Google</p>
                <p>
                  <a href="#" className="text-accent hover:underline">
                    Privacy Policy
                  </a>
                  {" and "}
                  <a href="#" className="text-accent hover:underline">
                    Terms of Service
                  </a>
                  {" apply."}
                </p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-muted/30 border border-border rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            {/* Items */}
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-border">
                  <img
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-sm">{item.product.name}</p>
                    {Object.keys(item.variants).length > 0 && (
                      <p className="text-xs text-gray-400">
                        {Object.entries(item.variants)
                          .map(([k, v]) => `${k}: ${v}`)
                          .join(", ")}
                      </p>
                    )}
                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-accent">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm border-t border-border pt-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-accent">
                  <span>Discount (10%):</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-300">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Tax (est.):</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-lg border-t border-border pt-3">
                <span>Total:</span>
                <span className="text-accent">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-border space-y-2 text-xs text-gray-400 text-center">
              <p>🔒 Secure checkout powered by Stripe</p>
              <p>✓ Apple Pay supported</p>
              <p>✓ 30-day returns</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
