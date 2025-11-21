"use client"

import Header from "@/components/header"
import { AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CheckoutCancel() {
  return (
    <main>
      <Header />

      <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block mb-6">
            <AlertCircle size={64} className="text-destructive" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">ORDER CANCELLED</h1>
          <p className="text-xl text-gray-300 mb-8">Your payment was not processed.</p>

          <div className="space-y-4 max-w-2xl mx-auto mb-8">
            <p className="text-gray-300">
              No charges have been made to your account. You can review your cart and try again whenever you're ready.
            </p>
            <p className="text-gray-400 text-sm">
              If you have any questions, please contact us at{" "}
              <a href="mailto:Tuffturfent@hotmail.com" className="text-accent hover:underline">
                Tuffturfent@hotmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:706-392-4092" className="text-accent hover:underline">
                706-392-4092
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
            >
              <ArrowLeft size={18} />
              Return to Checkout
            </Link>
            <Link
              href="/merch"
              className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
