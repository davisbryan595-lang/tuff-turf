"use client"

import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getAllServices } from "@/lib/products"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = getAllServices()

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            SERVICES THAT <span className="text-accent">DOMINATE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional entertainment solutions designed for maximum impact. Booking, production, and events at the
            highest level. Book now and pay securely with card or Apple Pay.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ProductCard key={service.id} product={service} showFeatures={true} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6 tracking-tight">
            READY TO <span className="text-accent">BOOK</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your service now using our secure payment system. Choose your package above and proceed to checkout, or
            contact us for custom quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:706-392-4092"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all hover:scale-105"
            >
              <Phone size={20} />
              CALL NOW: 706-392-4092
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all hover:scale-105"
            >
              MESSAGE US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
