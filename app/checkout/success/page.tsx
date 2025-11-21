"use client"

import { Suspense } from "react"
import React, { useEffect, useState } from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import stripe from "@/lib/stripe"
export const dynamic = 'force-dynamic';

export default function CheckoutSuccess() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [loading, setLoading] = useState(true)
  const [orderData, setOrderData] = useState<any>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchOrderData = async () => {
      if (!sessionId) {
        setError("No session found")
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/checkout/success?session_id=${sessionId}`)
        const data = await response.json()

        if (data.error) {
          setError(data.error)
        } else {
          setOrderData(data)
        }
      } catch (err) {
        console.error("Error fetching order:", err)
        setError("Failed to load order details")
      } finally {
        setLoading(false)
      }
    }

    fetchOrderData()
  }, [sessionId])

  if (loading) {
    return (
      <main>
        <Header />
        <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-300">Loading your order details...</p>
        </section>
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <Header />
        <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6 tracking-tight">Order Error</h1>
          <p className="text-xl text-gray-300 mb-8">{error}</p>
          <Link
            href="/merch"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
          >
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Header />

      {/* Success Message */}
      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent rounded-2xl p-12 text-center">
          <div className="inline-block mb-6">
            <CheckCircle size={64} className="text-accent animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            ORDER <span className="text-accent">CONFIRMED</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">Thank you for your purchase!</p>
          {orderData?.email && (
            <p className="text-gray-400">
              A confirmation email has been sent to <span className="font-bold text-accent">{orderData.email}</span>
            </p>
          )}
        </div>
      </section>

      {/* Order Details */}
      {orderData && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Order Info */}
              <div className="bg-muted/30 border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Order Information</h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-gray-300">Order ID:</span>
                    <span className="font-bold text-accent">{orderData.sessionId?.substring(0, 12)}...</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-gray-300">Status:</span>
                    <span className="font-bold text-accent">Payment Successful</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Order Date:</span>
                    <span className="font-bold">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Items Ordered */}
              {orderData.items && orderData.items.length > 0 && (
                <div className="bg-muted/30 border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Items Ordered</h2>
                  <div className="space-y-4">
                    {orderData.items.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between pb-4 border-b border-border last:border-b-0">
                        <div>
                          <p className="font-bold">{item.description}</p>
                          <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-accent">
                          ${((item.amount_total || item.price_data?.unit_amount || 0) / 100).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shipping Address */}
              {orderData.shippingAddress && (
                <div className="bg-muted/30 border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {orderData.shippingAddress.fullName}
                    <br />
                    {orderData.shippingAddress.address}
                    <br />
                    {orderData.shippingAddress.city}, {orderData.shippingAddress.state}{" "}
                    {orderData.shippingAddress.zipCode}
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="bg-muted/30 border border-border rounded-lg p-8 h-fit">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span>${(orderData.subtotal || 0).toFixed(2)}</span>
                </div>

                {orderData.discount > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Discount:</span>
                    <span>-${orderData.discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-300">
                  <span>Shipping:</span>
                  <span>${(orderData.shipping || 0).toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Tax:</span>
                  <span>${(orderData.tax || 0).toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-bold text-lg border-t border-border pt-3">
                  <span>Total:</span>
                  <span className="text-accent">${(orderData.total || orderData.amount_total / 100 || 0).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Invoice
                </button>

                <Link
                  href="/merch"
                  className="block text-center px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-xs text-gray-400 space-y-2">
                <p>📧 Check your email for tracking info</p>
                <p>📦 Estimated delivery: 5-7 business days</p>
                <p>✓ 30-day returns accepted</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Steps */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 tracking-tight text-center">
            WHAT <span className="text-accent">NEXT</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-black text-accent mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Confirm Email</h3>
              <p className="text-gray-300">Check your inbox for order confirmation and tracking details</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-black text-accent mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Track Shipment</h3>
              <p className="text-gray-300">Get real-time updates on your package delivery status</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-black text-accent mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Enjoy Your Merch</h3>
              <p className="text-gray-300">Wear your Tuff Turf gear with pride!</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
