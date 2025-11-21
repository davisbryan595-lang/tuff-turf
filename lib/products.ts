export interface ProductVariant {
  name: string
  value: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images: string[]
  badge: string
  category: "merch" | "service"
  inventory: number
  variants?: {
    [key: string]: ProductVariant[]
  }
  rating: number
  features?: string[]
}

export const products: Product[] = [
  {
    id: "hoodie-black",
    name: "Tuff Turf Hoodie",
    description: "Premium black hoodie with embroidered gold Tuff Turf logo. Street luxury meets comfort.",
    price: 65,
    image: "https://images.unsplash.com/photo-1556821552-5f394feea11a?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821552-5f394feea11a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=600&fit=crop",
    ],
    badge: "Premium",
    category: "merch",
    inventory: 100,
    variants: {
      size: [
        { name: "XS", value: "xs" },
        { name: "S", value: "s" },
        { name: "M", value: "m" },
        { name: "L", value: "l" },
        { name: "XL", value: "xl" },
        { name: "XXL", value: "xxl" },
      ],
      color: [
        { name: "Black", value: "black" },
        { name: "Charcoal", value: "charcoal" },
      ],
    },
    rating: 5,
  },
  {
    id: "tee-hardest",
    name: "Performance Tee",
    description: 'Graphic tee featuring "Hardest Movement in the South" print. 100% cotton comfort.',
    price: 35,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&h=600&fit=crop",
    ],
    badge: "Tuff Turf Certified",
    category: "merch",
    inventory: 100,
    variants: {
      size: [
        { name: "XS", value: "xs" },
        { name: "S", value: "s" },
        { name: "M", value: "m" },
        { name: "L", value: "l" },
        { name: "XL", value: "xl" },
        { name: "XXL", value: "xxl" },
      ],
      color: [
        { name: "Black", value: "black" },
        { name: "Navy", value: "navy" },
        { name: "Charcoal", value: "charcoal" },
      ],
    },
    rating: 5,
  },
  {
    id: "cap-snapback",
    name: "Studio Cap",
    description: "Embroidered snapback with adjustable fit. Perfect for any occasion.",
    price: 25,
    image: "https://images.unsplash.com/photo-1588856391814-5ecb80d3b131?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588856391814-5ecb80d3b131?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564394234476-7e3b7ce591f0?w=500&h=600&fit=crop",
    ],
    badge: "Limited Stock",
    category: "merch",
    inventory: 100,
    variants: {
      color: [
        { name: "Black", value: "black" },
        { name: "Gold", value: "gold" },
        { name: "Navy", value: "navy" },
      ],
    },
    rating: 5,
  },
  {
    id: "vinyl-mixtape",
    name: "Lawrence Eaton Vinyl Album",
    description: "Limited edition vinyl of Lawrence Eaton's signature mixtape. Collectors item.",
    price: 20,
    image: "https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=600&fit=crop",
    ],
    badge: "Limited Edition",
    category: "merch",
    inventory: 100,
    rating: 5,
  },
  {
    id: "poster-bundle",
    name: "Event Poster Bundle",
    description: "Set of 3 limited-edition event posters featuring iconic Tuff Turf moments.",
    price: 15,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=600&fit=crop",
    ],
    badge: "Bundle Deal",
    category: "merch",
    inventory: 100,
    rating: 5,
  },
  {
    id: "hoodie-premium",
    name: "Premium Track Jacket",
    description: "High-end performance jacket. Perfect for outdoor performances and studio sessions.",
    price: 95,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551259863-cc6b0b5a1786?w=500&h=600&fit=crop",
    ],
    badge: "Premium",
    category: "merch",
    inventory: 100,
    variants: {
      size: [
        { name: "XS", value: "xs" },
        { name: "S", value: "s" },
        { name: "M", value: "m" },
        { name: "L", value: "l" },
        { name: "XL", value: "xl" },
        { name: "XXL", value: "xxl" },
      ],
      color: [
        { name: "Black", value: "black" },
        { name: "Charcoal", value: "charcoal" },
        { name: "Navy", value: "navy" },
      ],
    },
    rating: 5,
  },
  {
    id: "tee-gold",
    name: "Gold Logo Tee",
    description: "Premium cotton tee with metallic gold Tuff Turf logo. Street luxury made simple.",
    price: 32,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516992654410-73ead1557f1d?w=500&h=600&fit=crop",
    ],
    badge: "Tuff Turf Certified",
    category: "merch",
    inventory: 100,
    variants: {
      size: [
        { name: "XS", value: "xs" },
        { name: "S", value: "s" },
        { name: "M", value: "m" },
        { name: "L", value: "l" },
        { name: "XL", value: "xl" },
        { name: "XXL", value: "xxl" },
      ],
    },
    rating: 5,
  },
]

export const serviceProducts: Product[] = [
  {
    id: "service-performance",
    name: "Live Performance Booking",
    description: "Full-scale entertainment experience for your event.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop"],
    badge: "Starting at",
    category: "service",
    inventory: 999,
    features: [
      "Professional sound and lighting",
      "Complete technical setup",
      "Sound check included",
      "Multiple set options",
      "Crowd engagement expertise",
    ],
    rating: 5,
  },
  {
    id: "service-studio",
    name: "Studio Production (Hourly)",
    description: "Professional recording, mixing, and mastering services.",
    price: 75,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"],
    badge: "Per Hour",
    category: "service",
    inventory: 999,
    variants: {
      duration: [
        { name: "1 Hour", value: "1h" },
        { name: "4 Hours (Bundle)", value: "4h" },
        { name: "8 Hours (Full Day)", value: "8h" },
      ],
    },
    features: [
      "State-of-the-art equipment",
      "Experienced sound engineers",
      "Full production suite",
      "Mix and master services",
      "Artist coaching included",
    ],
    rating: 5,
  },
  {
    id: "service-event",
    name: "Event Hosting & Takeover",
    description: "Complete event management with premium entertainment.",
    price: 500,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop"],
    badge: "Min. Deposit",
    category: "service",
    inventory: 999,
    features: [
      "Venue coordination",
      "Artist booking",
      "Full production setup",
      "Security management",
      "Marketing & promotion",
    ],
    rating: 5,
  },
]

export function getProduct(id: string): Product | undefined {
  return [...products, ...serviceProducts].find((p) => p.id === id)
}

export function getAllMerch(): Product[] {
  return products
}

export function getAllServices(): Product[] {
  return serviceProducts
}
