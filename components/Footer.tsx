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
      { label: "Leadership", href: "/about#leadership" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  {
    title: "Businesses",
    links: [
      { label: "Specialty", href: "/businesses#specialty" },
      { label: "Generics", href: "/businesses#generics" },
      { label: "Consumer Healthcare", href: "/businesses#consumer" },
      { label: "APIs", href: "/businesses#api" },
    ],
  },
  {
    title: "Stakeholders",
    links: [
      { label: "Investors", href: "/investors" },
      { label: "Patients", href: "/contact" },
      { label: "Healthcare Professionals", href: "/contact" },
      { label: "Careers", href: "/careers" },
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
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white font-bold">
                G
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-white">
                  Geet&apos;s
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-brand-300">
                  Pharmaceutical
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              A global, integrated specialty pharmaceutical company delivering
              high-quality, affordable medicines to patients across 100+
              countries.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                <span>
                  Geet&apos;s Pharma Tower, BKC, Mumbai 400 051, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-300" />
                <span>+91 22 4324 4324</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-300" />
                <span>contact@geetspharma.com</span>
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
            © {new Date().getFullYear()} Geet&apos;s Pharmaceutical Industries
            Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-brand-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-300">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-brand-300">
              Cookie Settings
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
