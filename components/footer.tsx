import Link from "next/link"

export const Footer = () => {
  return (
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

        {/* Links */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Home
            </Link>
            <Link href="/merch" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Merch
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-accent transition-colors text-sm">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Contact
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/returns" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Returns & Refunds
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2025 Tuff Turf Entertainment LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
