"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "./cart-drawer"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/merch", label: "Merch" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-[0_8px_32px_rgba(0,212,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 drop-shadow-[0_0_20px_rgba(0,212,255,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,0.9)] transition-all duration-300">
                <img
                  src="/images/WhatsApp_Image_2025-11-22_at_03.26.33_4eb55672-removebg-preview.png"
                  alt="Tuff Turf Entertainment Logo"
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
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

            {/* Right Section - CTA & Cart */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <Link
                href="/services"
                className="px-6 py-2 bg-accent text-accent-foreground rounded-md font-bold text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all duration-300 hover:scale-105"
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
              <button
                onClick={() => {
                  setIsOpen(false)
                  setIsCartOpen(true)
                }}
                className="w-full text-left px-4 py-3 text-foreground hover:text-accent hover:bg-muted/50 transition-all flex items-center gap-2"
              >
                <ShoppingCart size={18} />
                Cart {itemCount > 0 && `(${itemCount})`}
              </button>
              <div className="px-4 py-3">
                <Link
                  href="/services"
                  className="block w-full text-center px-4 py-2 bg-accent text-accent-foreground rounded-md font-bold text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  BOOK NOW
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Header
