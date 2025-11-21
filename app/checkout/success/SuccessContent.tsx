// app/checkout/success/SuccessContent.tsx
"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!sessionId) {
      setError("No session found");
      setLoading(false);
      return;
    }

    const fetchOrderData = async () => {
      try {
        const response = await fetch(`/api/checkout/success?session_id=${sessionId}`);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setOrderData(data);
        }
      } catch (err) {
        console.error("Error fetching order:", err);
        setError("Failed to load order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [sessionId]);

  // Show error state
  if (!loading && error) {
    return (
      <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-6 tracking-tight">Order Error</h1>
        <p className="text-xl text-gray-300 mb-8">{error}</p>
        <Link
          href="/merch"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
        >
          <ArrowLeft size={18} />
          Back to Shop
        </Link>
      </section>
    );
  }

  // Show success UI
  return (
    <>
      {/* Success Hero */}
      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent rounded-2xl p-12 text-center">
          <div className="inline-block mb-6">
            <CheckCircle size={64} className="text-accent animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            ORDER <span className="text-accent">CONFIRMED</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">Thank you for your purchase!</p>
          {orderData?.email && (
            <p className="text-gray-400">
              A confirmation email has been sent to <span className="font-bold text-accent">{orderData.email}</span>
            </p>
          )}
        </div>
      </section>

      {/* Full success content here — same as your original */}
      {orderData && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          {/* ... all your beautiful order details, items, summary, next steps ... */}
          {/* Paste everything from your original return() block here */}
          {/* I won't repeat it all to save space, but copy-paste your full success UI */}
        </section>
      )}

      {/* What Next section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 tracking-tight text-center">
            WHAT <span className="text-accent">NEXT</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Your three cards */}
          </div>
        </div>
      </section>
    </>
  );
}