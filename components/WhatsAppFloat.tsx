"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const queries = [
  {
    label: "PCD Franchise Inquiry",
    message: "Hello, I am interested in PCD Pharma Franchise with Geet's Pharmaceutical.",
  },
  {
    label: "Visual Aid Downloads",
    message: "Hello, I would like to request visual aid downloads for Geet's Pharmaceutical products.",
  },
  {
    label: "Safety Reporting",
    message: "Hello, I would like to report a product safety concern to Geet's Pharmaceutical.",
  },
];

const WHATSAPP_NUMBER = "919876543210";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {open && (
        <div className="mb-3 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-slide-up">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">WhatsApp Support</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp menu"
              className="rounded-full p-1 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-2">
            <p className="px-2 py-2 text-xs text-ink-mute">
              Select your query category:
            </p>
            {queries.map((q) => (
              <button
                key={q.label}
                onClick={() => openWhatsApp(q.message)}
                className="w-full rounded-xl px-3 py-2.5 text-left text-sm text-ink hover:bg-brand-50 transition"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="Open WhatsApp support"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
