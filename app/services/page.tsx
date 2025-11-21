"use client"

import Header from "@/components/header"
import { CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Live Performance Booking",
      price: "Starting $2,500",
      description: "Full-scale entertainment experiences that leave crowds speechless.",
      features: [
        "Professional sound and lighting",
        "Complete technical setup",
        "Sound check included",
        "Multiple set options",
        "Crowd engagement expertise",
      ],
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Studio Time & Production",
      price: "$75/hr",
      description: "Professional recording, mixing, and mastering in top-tier facilities.",
      features: [
        "State-of-the-art equipment",
        "Experienced sound engineers",
        "Full production suite",
        "Mix and master services",
        "Artist coaching included",
      ],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Event Hosting & Takeovers",
      price: "Custom Quote",
      description: "Complete event management and venue takeovers with premium entertainment.",
      features: [
        "Venue coordination",
        "Artist booking",
        "Full production setup",
        "Security management",
        "Marketing & promotion",
      ],
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    },
  ]

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
            highest level.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300 animate-float-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-accent font-bold text-lg mb-4">{service.price}</p>
                <p className="text-gray-300 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all hover:scale-105"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
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
            Contact us today for booking inquiries, pricing quotes, and to discuss your event needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:706-392-4092"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all hover:scale-105"
            >
              <Phone size={20} />
              CALL NOW: 706-392-4092
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all"
            >
              MESSAGE US
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-accent font-bold mb-4">CONTACT</h4>
              <p className="text-gray-300 mb-2">
                <a href="tel:706-392-4092" className="hover:text-accent transition-colors">
                  📞 706-392-4092
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:Tuffturfent@hotmail.com" className="hover:text-accent transition-colors">
                  ✉ Tuffturfent@hotmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-4">LOCATION</h4>
              <p className="text-gray-300">6078 Creekside Drive</p>
              <p className="text-gray-300">Georgia</p>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-4">FOLLOW</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  TikTok
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Tuff Turf Entertainment LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
