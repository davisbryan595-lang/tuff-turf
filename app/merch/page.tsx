"use client"

import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getAllMerch } from "@/lib/products"

export default function Merch() {
  const products = getAllMerch()

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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

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
