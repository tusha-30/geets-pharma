import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Directorate", href: "/about#directorate" },
      { label: "Quality", href: "/quality" },
      { label: "Verify Product", href: "/verify" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Our Molecules", href: "/molecules" },
      { label: "Oral Solids", href: "/molecules" },
      { label: "Injectables", href: "/molecules" },
      { label: "Pediatric", href: "/molecules" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "PCD Franchise", href: "/franchise" },
      { label: "For Doctors", href: "/molecules" },
      { label: "Third-Party Mfg.", href: "/franchise" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/GP_logo.png"
                alt="Geet's Pharmaceutical"
                className="h-11 w-auto object-contain"
              />
              <div>
                <div className="font-serif text-xl font-semibold text-white">
                  Geet&apos;s
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-brand-300">
                  Pharmaceutical Pvt. Ltd.
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Redefining Healthcare Excellence. A research-driven pharmaceutical
              company bridging advanced medical research with affordable
              healthcare accessibility.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  C62/A, 3RD FLOOR, JANTA GARDEN, PANDAV NAGAR, East Delhi,
                  Delhi — 110091, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-300" />
                <a href="tel:+919876543210" className="hover:text-brand-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-300" />
                <a
                  href="mailto:contact@geetspharma.com"
                  className="hover:text-brand-300"
                >
                  contact@geetspharma.com
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-gray-400 hover:text-brand-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Connected
            </h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/10 focus:ring-brand-400"
              />
              <button className="rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
                Subscribe
              </button>
            </form>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-500 transition"
                    aria-label="social"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Geet&apos;s Pharmaceutical Pvt. Ltd.
            All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="#" className="hover:text-brand-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-300">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-brand-300">
              UCPMP Compliance
            </Link>
            <Link href="#" className="hover:text-brand-300">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
