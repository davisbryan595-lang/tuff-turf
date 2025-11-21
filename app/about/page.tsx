"use client"

import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import Link from "next/link"

export default function About() {
  const ownerPicks = products.slice(0, 3)

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            THE <span className="text-accent">STORY</span> OF TUFF TURF
          </h1>
          <p className="text-xl text-gray-300">Where street culture meets luxury entertainment</p>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop"
              alt="Lawrence Eaton"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              LAWRENCE <span className="text-accent">EATON</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Founder and driving force behind Tuff Turf Entertainment. Lawrence Eaton has spent decades perfecting his
              craft and building the hardest movement in the South. From intimate studio sessions to massive stage
              performances, every project carries his signature excellence and street luxury aesthetic.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Based in Georgia, Lawrence has established Tuff Turf as the go-to destination for premium entertainment
              services, exclusive merchandise, and unforgettable live experiences. His commitment to quality and
              authenticity has earned the respect of industry professionals and loyal fans alike.
            </p>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-bold text-accent">Location:</span> 6078 Creekside Drive, Georgia
              </p>
              <p className="text-gray-300">
                <span className="font-bold text-accent">Specialties:</span> Live performances, studio production, event
                hosting
              </p>
              <p className="text-gray-300">
                <span className="font-bold text-accent">Philosophy:</span> The hardest movement in the South
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 md:py-32 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 tracking-tight text-center">
            PAST <span className="text-accent">EVENTS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Summer Stage 2024",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop",
              },
              {
                title: "Studio Sessions",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
              },
              {
                title: "Live Performance",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop",
              },
              {
                title: "Venue Takeover",
                image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop",
              },
              {
                title: "Sound Check",
                image: "https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=600&h=600&fit=crop",
              },
              {
                title: "After Party",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg h-64 cursor-pointer animate-float-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner's Picks */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            LAWRENCE'S <span className="text-accent">SHOP PICKS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Hand-selected items that represent the Tuff Turf brand. These are the pieces Lawrence wears and
            recommends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ownerPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/merch"
            className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all hover:scale-105"
          >
            Explore Full Collection
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 tracking-tight text-center">
            WHAT WE <span className="text-accent">STAND FOR</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-black text-accent mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                Every performance, every product, every interaction reflects our commitment to the highest standards.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-black text-accent mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
              <p className="text-gray-300">
                We stay true to the culture, the grind, and the street luxury aesthetic that defines us.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-black text-accent mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-300">
                Our fans, customers, and collaborators are the foundation of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-8 tracking-tight">
          READY TO <span className="text-accent">EXPERIENCE</span> TUFF TURF?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all hover:scale-105"
          >
            Book a Service
          </Link>
          <Link
            href="/merch"
            className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all hover:scale-105"
          >
            Shop Merch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
