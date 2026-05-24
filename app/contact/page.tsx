"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const whatsappQueries = [
  {
    label: "PCD Franchise Inquiry",
    message: "Hello, I am interested in PCD Pharma Franchise with Geet's Pharmaceutical.",
  },
  {
    label: "Visual Aid Downloads",
    message: "Hello, I would like to request visual aid downloads.",
  },
  {
    label: "Safety Reporting",
    message: "Hello, I would like to report a product safety concern.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with us"
        desc="Direct contact numbers, WhatsApp support, and our office location on Google Maps."
      />

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="eyebrow">Reach Us</span>
            <h2 className="font-serif text-3xl font-semibold leading-tight">
              We&apos;re here to help
            </h2>

            <div className="card p-5">
              <div className="font-semibold text-ink">Head Office — Delhi</div>
              <div className="mt-2 flex items-start gap-2 text-sm text-ink-mute">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  C62/A, 3RD FLOOR, JANTA GARDEN, PANDAV NAGAR, East Delhi,
                  Delhi — 110091, India
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-brand-600" />
                <a href="tel:+919876543210" className="text-brand-700 hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-brand-600" />
                <a
                  href="mailto:contact@geetspharma.com"
                  className="text-brand-700 hover:underline"
                >
                  contact@geetspharma.com
                </a>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-2 font-semibold text-ink">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                WhatsApp Support
              </div>
              <p className="mt-2 text-sm text-ink-mute">
                Select a query category to start a WhatsApp conversation:
              </p>
              <div className="mt-3 space-y-2">
                {whatsappQueries.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => openWhatsApp(q.message)}
                    className="w-full rounded-xl border border-gray-100 px-4 py-2.5 text-left text-sm hover:bg-brand-50 transition"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-7 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Thank you!
                </h3>
                <p className="mt-2 text-ink-mute">
                  Your message has been received. We&apos;ll get back to you
                  within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h3 className="font-serif text-2xl font-semibold">
                  Send us a message
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-ink-soft">
                      Full name
                    </label>
                    <input
                      required
                      className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-soft">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Inquiry Type
                  </label>
                  <select className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
                    <option>General Inquiry</option>
                    <option>PCD Franchise</option>
                    <option>Product Information</option>
                    <option>Safety Reporting</option>
                    <option>Visual Aid Downloads</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40 pt-0">
        <div className="container">
          <span className="eyebrow">Location</span>
          <h2 className="section-title mt-3">Find us on Google Maps</h2>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <iframe
              title="Geet's Pharmaceutical Office Location"
              src="https://maps.google.com/maps?q=Pandav+Nagar+East+Delhi+110091&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[400px] w-full border-0 md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
