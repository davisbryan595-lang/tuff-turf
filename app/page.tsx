"use client"

import Header from "@/components/header"
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
            backgroundImage: "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
          {/* Logo with Glow */}
          <div className="mb-8 animate-float-in">
            <div className="glow-pulse w-32 h-32 md:w-48 md:h-48 mx-auto">
              <img
                src="/images/tuff-removebg-preview.png"
                alt="Tuff Turf Entertainment Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.8)]"
              />
            </div>
          </div>

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
              className="px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              BOOK US NOW
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
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
              className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all duration-300"
            >
              EXPLORE SERVICES
            </Link>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop"
              alt="Studio Equipment"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
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
