"use client"

import React, { useState } from "react"
import { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, Star } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  product: Product
  showFeatures?: boolean
}

export const ProductCard = ({ product, showFeatures = false }: ProductCardProps) => {
  const router = useRouter()
  const { addItem } = useCart()
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState("")

  const canAddToCart = !product.variants || Object.keys(product.variants).every((key) => selectedVariants[key])

  const handleAddToCart = () => {
    if (!canAddToCart) {
      setMessage("Please select all options")
      setTimeout(() => setMessage(""), 2000)
      return
    }

    addItem(product, quantity, selectedVariants)
    setMessage("Added to cart!")
    setQuantity(1)
    setSelectedVariants({})
    setTimeout(() => setMessage(""), 2000)
  }

  const handleBuyNow = () => {
    if (!canAddToCart) {
      setMessage("Please select all options")
      setTimeout(() => setMessage(""), 2000)
      return
    }

    addItem(product, quantity, selectedVariants)
    router.push("/checkout")
  }

  return (
    <div className="group rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-float-in flex flex-col h-full">
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-black px-4 py-2 rounded-full font-bold text-xs">
          {product.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-4">
            {[...Array(product.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
        )}

        {/* Features for services */}
        {showFeatures && product.features && (
          <ul className="space-y-2 mb-4 flex-1">
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-accent mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Variants */}
        {product.variants && (
          <div className="mb-4 space-y-3">
            {Object.entries(product.variants).map(([variantKey, variantOptions]) => (
              <div key={variantKey}>
                <label className="text-xs font-semibold text-gray-300 uppercase block mb-2">{variantKey}</label>
                <div className="flex flex-wrap gap-2">
                  {variantOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        setSelectedVariants((prev) => ({
                          ...prev,
                          [variantKey]: option.value,
                        }))
                      }
                      className={`px-3 py-1 text-xs font-bold rounded transition-all ${
                        selectedVariants[variantKey] === option.value
                          ? "bg-accent text-black"
                          : "bg-muted text-gray-300 border border-border hover:border-accent"
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quantity */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-300 uppercase block mb-2">Quantity</label>
          <div className="flex items-center gap-2 bg-muted rounded border border-border">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 text-gray-400 hover:text-accent transition-colors"
            >
              −
            </button>
            <span className="flex-1 text-center font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-gray-400 hover:text-accent transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-accent mb-4">${product.price.toFixed(2)}</p>

        {/* Message */}
        {message && <p className="text-xs text-accent mb-2">{message}</p>}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={product.category === "service" && !canAddToCart}
          className="w-full px-6 py-3 bg-accent text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 mb-2"
        >
          <ShoppingCart size={18} />
          ADD TO CART
        </button>

        {/* Quick Buy */}
        <button
          onClick={handleBuyNow}
          disabled={product.category === "service" && !canAddToCart}
          className="w-full px-6 py-2 bg-accent text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all disabled:opacity-50"
        >
          BUY NOW
        </button>
      </div>
    </div>
  )
}
