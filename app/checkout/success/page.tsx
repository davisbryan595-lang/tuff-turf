// app/checkout/success/page.tsx

import { Suspense } from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import SuccessContent from "./SuccessContent"  // This is the file you already created

export default function CheckoutSuccess() {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto text-center">
            <p className="text-xl text-gray-300">Loading your order details...</p>
          </section>
        }
      >
        <SuccessContent />
      </Suspense>

      <Footer />
    </>
  )
}