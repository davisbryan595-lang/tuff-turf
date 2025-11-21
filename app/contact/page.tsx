"use client"

import type React from "react"

import Header from "@/components/header"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    alert("Message sent successfully! We will get back to you soon.")
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            GET IN <span className="text-accent">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300">Ready to book, collaborate, or inquire? We're here for it.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Contact Info Cards */}
          <div className="text-center animate-float-in">
            <div className="inline-flex p-4 bg-muted rounded-lg mb-6 text-accent">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">CALL US</h3>
            <a href="tel:706-392-4092" className="text-lg text-accent hover:underline">
              706-392-4092
            </a>
            <p className="text-gray-400 text-sm mt-2">Available for bookings & inquiries</p>
          </div>

          <div className="text-center animate-float-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex p-4 bg-muted rounded-lg mb-6 text-accent">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">EMAIL</h3>
            <a href="mailto:Tuffturfent@hotmail.com" className="text-lg text-accent hover:underline break-all">
              Tuffturfent@hotmail.com
            </a>
            <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
          </div>

          <div className="text-center animate-float-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex p-4 bg-muted rounded-lg mb-6 text-accent">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">LOCATION</h3>
            <p className="text-lg">6078 Creekside Drive</p>
            <p className="text-lg">Georgia</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-left">
            <div>
              <label className="block text-sm font-bold mb-2">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none transition-all text-foreground placeholder-gray-500"
                placeholder="Your Name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none transition-all text-foreground placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none transition-all text-foreground placeholder-gray-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">SERVICE INQUIRY</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none transition-all text-foreground"
              >
                <option value="">Select a service...</option>
                <option value="booking">Live Performance Booking</option>
                <option value="studio">Studio Time & Production</option>
                <option value="event">Event Hosting / Takeover</option>
                <option value="merch">Merch Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none transition-all text-foreground placeholder-gray-500 resize-none"
                placeholder="Tell us about your project, event, or inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="animate-float-in">
            <p className="text-5xl font-black text-accent mb-2">500+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="animate-float-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-5xl font-black text-accent mb-2">1000+</p>
            <p className="text-gray-300">Events Produced</p>
          </div>
          <div className="animate-float-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-5xl font-black text-accent mb-2">10+</p>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="animate-float-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-5xl font-black text-accent mb-2">24/7</p>
            <p className="text-gray-300">Support</p>
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
