"use client"

import React, { createContext, useContext, useState, useCallback, useEffect } from "react"
import { Product } from "./products"

export interface CartItem {
  id: string
  product: Product
  quantity: number
  variants: Record<string, string>
  price: number
}

export interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, quantity: number, variants?: Record<string, string>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
  getSubtotal: () => number
  getDiscount: (promoCode: string) => number
  applyPromoCode: (code: string) => void
  activePromoCode: string | null
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [activePromoCode, setActivePromoCode] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedCart = localStorage.getItem("tuff-turf-cart")
    const savedPromo = localStorage.getItem("tuff-turf-promo")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to load cart", e)
      }
    }
    if (savedPromo) {
      setActivePromoCode(savedPromo)
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("tuff-turf-cart", JSON.stringify(items))
    }
  }, [items, isMounted])

  const addItem = useCallback(
    (product: Product, quantity: number, variants: Record<string, string> = {}) => {
      setItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) =>
            item.product.id === product.id && JSON.stringify(item.variants) === JSON.stringify(variants),
        )

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + quantity } : item,
          )
        }

        const newItem: CartItem = {
          id: `${product.id}-${Date.now()}-${Math.random()}`,
          product,
          quantity,
          variants,
          price: product.price,
        }
        return [...prevItems, newItem]
      })
    },
    [],
  )

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    setActivePromoCode(null)
    localStorage.removeItem("tuff-turf-promo")
  }, [])

  const getSubtotal = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [items])

  const getDiscount = useCallback(
    (code: string) => {
      const subtotal = getSubtotal()
      if (code.toUpperCase() === "TUFF10") {
        return Math.round(subtotal * 0.1 * 100) / 100
      }
      return 0
    },
    [getSubtotal],
  )

  const getTotal = useCallback(() => {
    const subtotal = getSubtotal()
    const discount = activePromoCode ? getDiscount(activePromoCode) : 0
    return Math.max(0, subtotal - discount)
  }, [getSubtotal, getDiscount, activePromoCode])

  const getItemCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0)
  }, [items])

  const applyPromoCode = useCallback((code: string) => {
    if (code.toUpperCase() === "TUFF10") {
      setActivePromoCode(code.toUpperCase())
      localStorage.setItem("tuff-turf-promo", code.toUpperCase())
    }
  }, [])

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
    getSubtotal,
    getDiscount,
    applyPromoCode,
    activePromoCode,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
