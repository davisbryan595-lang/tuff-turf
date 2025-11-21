"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/shop", label: "Shop" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <img
                src="/images/tuff-removebg-preview.png"
                alt="Tuff Turf Entertainment Logo"
                className="w-full h-full object-contain hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300"
              />
            </div>
            <span className="text-xl font-bold hidden sm:inline text-foreground">TUFF TURF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-accent text-primary rounded-md font-bold text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all duration-300 hover:scale-105"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-float-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-muted/50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-accent text-primary rounded-md font-bold text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
                onClick={() => setIsOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
