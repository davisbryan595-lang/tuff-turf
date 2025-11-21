import Header from "@/components/header"
import Link from "next/link"

export default function Returns() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-12 tracking-tight">Returns & Refunds</h1>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Return Period</h2>
            <p>
              We offer a 30-day return policy on all merchandise purchases. Items must be returned in original, unused
              condition with all original packaging and tags attached.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">How to Return an Item</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Contact us at Tuffturfent@hotmail.com or 706-392-4092 to initiate a return</li>
              <li>Receive a prepaid return shipping label (for US domestic orders)</li>
              <li>Pack the item securely and ship it back to us</li>
              <li>Once received and inspected, we'll process your refund within 7-10 business days</li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Items showing signs of wear or damage beyond normal use</li>
              <li>Items without original tags or packaging</li>
              <li>Custom or personalized orders</li>
              <li>Digital products</li>
              <li>Services (performances, studio time, events)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Refund Processing</h2>
            <p>
              Refunds are issued to the original payment method. Depending on your bank, it may take 3-5 business days
              for the refund to appear in your account. Shipping costs are non-refundable unless the item arrived damaged.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact us immediately with photos. We'll replace the
              item or issue a full refund at no cost to you, including return shipping.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Service Refunds</h2>
            <p>
              Cancellations for services (performances, studio time, events) must be made at least 14 days in advance
              for a full refund. Cancellations within 14 days are subject to a 50% restocking fee.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              For questions about returns or refunds, please reach out:
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
