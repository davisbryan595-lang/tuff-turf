import Header from "@/components/header"
import Link from "next/link"

export default function Privacy() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-12 tracking-tight">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              When you visit Tuff Turf Entertainment and make a purchase, we collect information including your name,
              email address, shipping address, payment information, and order history. This information helps us fulfill
              your orders and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and deliver your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your inquiries and customer support requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">3. Payment Processing</h2>
            <p>
              We use Stripe for secure payment processing. Your credit card information is not stored on our servers.
              All payment information is encrypted and handled securely by Stripe.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no method
              of transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">5. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices
              of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at:
              <br />
              Email: Tuffturfent@hotmail.com
              <br />
              Phone: 706-392-4092
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Last updated: January 2025</p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
