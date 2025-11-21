"use client"

import Header from "@/components/header"
import { ShoppingCart, Star } from "lucide-react"
import { useState } from "react"

export default function Shop() {
  const [cart, setCart] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: "Tuff Turf Classic Hoodie",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1556821552-5f394feea11a?w=500&h=600&fit=crop",
      badge: "Tuff Turf Certified",
      rating: 5,
    },
    {
      id: 2,
      name: "Logo T-Shirt",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      badge: "Tuff Turf Certified",
      rating: 5,
    },
    {
      id: 3,
      name: "Snapback Cap",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1588856391814-5ecb80d3b131?w=500&h=600&fit=crop",
      badge: "Tuff Turf Certified",
      rating: 5,
    },
    {
      id: 4,
      name: "Limited Edition Mixtape",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=500&h=600&fit=crop",
      badge: "Limited Stock",
      rating: 5,
    },
    {
      id: 5,
      name: "Tuff Turf Crew Neck",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1556821552-5f394feea11a?w=500&h=600&fit=crop",
      badge: "Tuff Turf Certified",
      rating: 5,
    },
    {
      id: 6,
      name: "Premium Track Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop",
      badge: "Premium",
      rating: 5,
    },
  ]

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            TUFF TURF <span className="text-accent">MERCH</span>
          </h1>
          <p className="text-xl text-gray-300">Own a piece of the hardest movement in the South</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="group rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-float-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full font-bold text-xs">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Price */}
                <p className="text-3xl font-bold text-accent mb-6">${product.price.toFixed(2)}</p>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Info */}
      {cart.length > 0 && (
        <section className="py-8 px-4 bg-muted">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-lg font-semibold">
              {cart.length} item{cart.length !== 1 ? "s" : ""} in cart
            </p>
            <button className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all">
              VIEW CART & CHECKOUT
            </button>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tight">
              MERCH THAT <span className="text-accent">MATTERS</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Every piece of Tuff Turf merch represents the culture, grind, and excellence we bring to everything we do.
              From premium hoodies to limited edition collectibles, wear your affiliation with pride.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-gray-300">Premium quality materials</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-gray-300">Limited edition drops</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-gray-300">Fast & free shipping on orders over $100</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-gray-300">Exclusive member access</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
              alt="Merch Collection"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
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
