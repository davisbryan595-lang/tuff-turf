"use client"

import Header from "@/components/header"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop",
      alt: "Live Performance",
      title: "Main Stage Performance",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop",
      alt: "Crowd Energy",
      title: "Crowd in Motion",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
      alt: "Studio Session",
      title: "Behind the Scenes Studio",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
      alt: "Event Setup",
      title: "Event Production",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1516280440614-37939635fbb1?w=800&h=800&fit=crop",
      alt: "Artist Performance",
      title: "Spotlight Performance",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1501612780353-7e5c60a05a20?w=800&h=800&fit=crop",
      alt: "Mix Console",
      title: "Professional Sound",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=800&fit=crop",
      alt: "Festival Stage",
      title: "Festival Action",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=800&fit=crop",
      alt: "Crowd Control",
      title: "Crowd Connection",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1532618025503-afd699f809b3?w=800&h=800&fit=crop",
      alt: "Team Work",
      title: "Production Team",
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-accent">VISUAL</span> STORY
          </h1>
          <p className="text-xl text-gray-300">
            Behind-the-scenes, live performances, and the energy that defines Tuff Turf
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg animate-float-in ${
                idx === 0 || idx === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => setSelectedImage(idx)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-4xl">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />

            {/* Info */}
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</h2>
              <p className="text-gray-300">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={prevImage}
                disabled={selectedImage === 0}
                className="p-3 bg-muted hover:bg-accent hover:text-primary rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                disabled={selectedImage === galleryImages.length - 1}
                className="p-3 bg-muted hover:bg-accent hover:text-primary rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

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
