"use client"

import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 animate-slide-in-left">
            TUFF TURF
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-accent font-semibold mb-8 animate-slide-in-right">
            The Hardest Movement in the South
          </p>

          {/* Description */}
          <p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 animate-float-in"
            style={{ animationDelay: "0.2s" }}
          >
            Live performances, studio production, and exclusive merch from Lawrence Eaton's legendary entertainment
            empire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-float-in" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              BOOK US NOW
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/merch"
              className="px-8 py-4 border-2 border-accent bg-accent text-accent-foreground font-bold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              SHOP MERCH
              <Play size={20} />
            </Link>
          </div>

          {/* Contact Info */}
          <div
            className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12 text-sm text-gray-400 animate-float-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="tel:706-392-4092" className="hover:text-accent transition-colors">
              📞 706-392-4092
            </a>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-6 px-4 bg-accent/20 border-b border-accent">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-bold">
            🎉 Use code <span className="text-accent">TUFF10</span> for 10% off your first order!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              PURE <span className="text-accent">STREET LUXURY</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Since day one, Tuff Turf Entertainment has been the hardest movement in the South. From massive live
              performances to world-class studio production, we deliver pure entertainment excellence.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Owner: Lawrence Eaton
              <br />
              Location: 6078 Creekside Drive, Georgia
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all duration-300"
            >
              EXPLORE SERVICES
            </Link>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
              alt="Studio Equipment"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
          FEATURED <span className="text-accent">PRODUCTS</span>
        </h2>
        <p className="text-center text-xl text-gray-300 mb-16">Limited edition drops available now</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              id: "hoodie-black",
              name: "Tuff Turf Hoodie",
              price: 65,
              image: "https://images.pexels.com/photos/34830019/pexels-photo-34830019.jpeg",
              badge: "Premium",
            },
            {
              id: "tee-hardest",
              name: "Performance Tee",
              price: 35,
              image: "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg",
              badge: "Tuff Turf Certified",
            },
            {
              id: "cap-snapback",
              name: "Studio Cap",
              price: 25,
              image: "https://images.pexels.com/photos/34830019/pexels-photo-34830019.jpeg",
              badge: "Limited Stock",
            },
          ].map((product, idx) => (
            <Link
              key={product.id}
              href="/merch"
              className="group rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-float-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full font-bold text-xs">
                  {product.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/merch"
            className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all hover:scale-105"
          >
            Shop Full Collection
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-tight">
            SERVICES THAT <span className="text-accent">DELIVER</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Live Performances", price: "From $2,500", desc: "Full-scale shows that electrify any venue" },
              { title: "Studio Production", price: "$75/hr", desc: "World-class recording and mixing" },
              { title: "Event Hosting", price: "Custom Quote", desc: "Complete takeover experiences" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-8 bg-background border border-border rounded-lg hover:border-accent hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-accent font-bold mb-4">{service.price}</p>
                <p className="text-gray-300 mb-6">{service.desc}</p>
                <Link
                  href="/services"
                  className="text-accent font-bold hover:gap-2 inline-flex items-center gap-1 transition-all"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-accent/20 to-accent/10 border border-accent rounded-2xl p-12 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            STAY IN THE <span className="text-accent">LOOP</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive drops, behind-the-scenes content, and special offers delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-3 mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-400">
            We respect your privacy. Unsubscribe at any time. Plus, get 10% off your first order!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
