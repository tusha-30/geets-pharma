"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

const offices = [
  {
    city: "Mumbai (HQ)",
    addr: "Geet's Pharma Tower, BKC, Mumbai 400 051, India",
    phone: "+91 22 4324 4324",
  },
  {
    city: "Princeton, USA",
    addr: "270 Carter Lane, Princeton, NJ 08540, USA",
    phone: "+1 609 555 0142",
  },
  {
    city: "London, UK",
    addr: "12 Pharma Square, London EC2A 4BX, United Kingdom",
    phone: "+44 20 7946 0700",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        desc="Get in touch with our teams for general inquiries, business partnerships, media or careers."
      />

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <span className="eyebrow">Reach Us</span>
            <h2 className="font-serif text-3xl font-semibold leading-tight">
              Global offices, local connections
            </h2>
            <p className="text-ink-soft">
              Whether you&apos;re a patient, partner, journalist or future
              colleague, our teams are here to help.
            </p>
            <div className="space-y-4">
              {offices.map((o) => (
                <div key={o.city} className="card p-5">
                  <div className="font-semibold text-ink">{o.city}</div>
                  <div className="mt-2 flex items-start gap-2 text-sm text-ink-mute">
                    <MapPin className="mt-0.5 h-4 w-4 text-brand-600" />
                    <span>{o.addr}</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 text-sm text-ink-mute">
                    <Phone className="h-4 w-4 text-brand-600" />
                    <span>{o.phone}</span>
                  </div>
                </div>
              ))}
              <div className="card p-5">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Mail className="h-5 w-5 text-brand-600" /> General Inquiries
                </div>
                <a
                  href="mailto:contact@geetspharma.com"
                  className="mt-1 inline-block text-brand-700 hover:underline"
                >
                  contact@geetspharma.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
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
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-ink-soft">
                        Company
                      </label>
                      <input
                        className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-soft">
                        Inquiry Type
                      </label>
                      <select className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
                        <option>General</option>
                        <option>Business / Partnerships</option>
                        <option>Media</option>
                        <option>Careers</option>
                        <option>Investor Relations</option>
                      </select>
                    </div>
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
        </div>
      </section>
    </>
  );
}
