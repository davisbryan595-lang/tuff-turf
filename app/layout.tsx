import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tuff Turf Entertainment | Georgia Live Shows & Merch",
  description:
    "The hardest movement in the South. Live performances, studio production, and exclusive merch from Tuff Turf Entertainment LLC.",
  generator: "v0.app",
  keywords: "live shows, entertainment, booking, georgia, hip-hop, merch",
  openGraph: {
    title: "Tuff Turf Entertainment",
    description: "The hardest movement in the South",
    images: [
      {
        url: "/images/tuff-removebg-preview.png",
        width: 1200,
        height: 1200,
        alt: "Tuff Turf Entertainment Logo",
      },
    ],
  },
  icons: {
    icon: "/images/tuff-removebg-preview.png",
    apple: "/images/tuff-removebg-preview.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
