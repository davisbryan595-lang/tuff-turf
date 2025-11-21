"use client"

import React, { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, X, Minus, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { items, removeItem, updateQuantity, getSubtotal, getDiscount, activePromoCode, applyPromoCode } = useCart()
  const [promoInput, setPromoInput] = useState("")
  const [promoMessage, setPromoMessage] = useState("")

  const subtotal = getSubtotal()
  const discount = getDiscount(activePromoCode || "")
  const total = subtotal - discount

  const handleApplyPromo = () => {
    if (promoInput.toUpperCase() === "TUFF10") {
      applyPromoCode("TUFF10")
      setPromoMessage("Code applied! 10% off your order")
      setPromoInput("")
      setTimeout(() => setPromoMessage(""), 3000)
    } else {
      setPromoMessage("Invalid code")
      setTimeout(() => setPromoMessage(""), 3000)
    }
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-background border-l border-border z-50 transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} className="text-accent" />
            <h2 className="text-2xl font-bold">Cart</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart size={48} className="text-gray-400 mb-4" />
              <p className="text-gray-400">Your cart is empty</p>
              <Link
                href="/merch"
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border border-border rounded-lg p-4 bg-muted/30">
                  <div className="flex gap-4">
                    <img
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1">{item.product.name}</h4>
                      <p className="text-accent font-bold text-sm mb-2">${item.price.toFixed(2)}</p>
                      {Object.keys(item.variants).length > 0 && (
                        <p className="text-xs text-gray-400 mb-2">
                          {Object.entries(item.variants)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(", ")}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-accent transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm font-bold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-accent transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-gray-400 hover:text-destructive transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <>
            {/* Promo Code */}
            <div className="border-t border-border p-6">
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-300 block mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="e.g., TUFF10"
                    className="flex-1 px-3 py-2 bg-muted border border-border rounded text-foreground placeholder-gray-500 text-sm"
                    disabled={!!activePromoCode}
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={!!activePromoCode}
                    className="px-4 py-2 bg-accent text-primary font-bold text-sm rounded hover:shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-all disabled:opacity-50"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && <p className="text-xs text-accent mt-2">{promoMessage}</p>}
                {activePromoCode && <p className="text-xs text-accent mt-2">✓ {activePromoCode} applied</p>}
              </div>

              {/* Totals */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Discount (10%):</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                  <span>Total:</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full text-center px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
