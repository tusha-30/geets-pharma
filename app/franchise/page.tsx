"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Handshake,
  Crown,
  Monitor,
  Truck,
  Send,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    Icon: Crown,
    title: "Exclusive Monopoly Rights",
    desc: "Territory-wise exclusive distribution rights to protect and grow your business.",
  },
  {
    Icon: Monitor,
    title: "Digital-Ready Visual Aids",
    desc: "Professionally designed, print-ready and digital visual aids for effective doctor detailing.",
  },
  {
    Icon: Truck,
    title: "Robust Supply Chain Integrity",
    desc: "Reliable logistics, timely dispatch, and cold-chain compliance for sensitive products.",
  },
  {
    Icon: Handshake,
    title: "PCD Pharma Franchise Support",
    desc: "Complete promotional support, product training, and dedicated franchise manager assistance.",
  },
];

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Franchise"
        title="PCD Pharma Franchise & Third-Party Manufacturing"
        desc="Partner with Geet's Pharmaceutical for exclusive monopoly rights, digital-ready visual aids, and a robust supply chain built on quality and trust."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <span className="eyebrow">Partner Benefits</span>
          <h2 className="section-title mt-3">
            Why partner with Geet&apos;s Pharmaceutical
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-ink-mute leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Third-Party Manufacturing</span>
            <h2 className="section-title mt-3">
              Contract manufacturing you can trust
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Leverage our WHO-GMP certified facilities for third-party
              manufacturing across oral solids, injectables, and specialized
              formulations. We offer end-to-end support from formulation
              development to regulatory documentation.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {[
                "Tablets, capsules, and oral liquids",
                "Life-saving injectables and IV fluids",
                "Pediatric and specialized therapeutic formulations",
                "Regulatory and documentation support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7 md:p-10">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Inquiry Received
                </h3>
                <p className="mt-2 text-ink-mute">
                  Our franchise team will contact you within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6"
                >
                  Submit Another Inquiry
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
                  PCD / Distributor Inquiry
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-ink-soft">
                      Full Name
                    </label>
                    <input
                      required
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-soft">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Preferred Territory / State
                  </label>
                  <input
                    required
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    placeholder="e.g. Maharashtra, Delhi NCR"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Inquiry Type
                  </label>
                  <select className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500">
                    <option>PCD Pharma Franchise</option>
                    <option>Distributorship</option>
                    <option>Third-Party Manufacturing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-soft">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    placeholder="Tell us about your business and requirements"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Inquiry <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
