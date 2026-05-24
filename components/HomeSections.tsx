import Link from "next/link";
import { ArrowRight, ShieldCheck, Handshake, QrCode } from "lucide-react";

export default function HomeSections() {
  return (
    <>
      <section className="section bg-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            {
              Icon: ShieldCheck,
              title: "Quality & Compliance",
              desc: "WHO-GMP standards, ISO certification, UCPMP & DCGI compliance with multi-tier QC testing.",
              href: "/quality",
            },
            {
              Icon: QrCode,
              title: "Verify Your Product",
              desc: "Scan QR codes on packaging to confirm product authenticity and batch details.",
              href: "/verify",
            },
            {
              Icon: Handshake,
              title: "PCD Franchise",
              desc: "Exclusive monopoly rights, digital visual aids, and robust supply chain for partners.",
              href: "/franchise",
            },
          ].map(({ Icon, title, desc, href }) => (
            <Link key={title} href={href} className="card group p-7">
              <Icon className="h-8 w-8 text-brand-600" />
              <h3 className="mt-4 font-serif text-xl font-semibold group-hover:text-brand-700 transition">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ink-mute leading-relaxed">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-brand-gradient text-white">
        <div className="container text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            Partner With Us
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold">
            Ready to grow with Geet&apos;s Pharmaceutical?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Join our PCD Pharma franchise network or explore third-party
            manufacturing partnerships backed by quality you can trust.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/franchise"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Franchise Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
