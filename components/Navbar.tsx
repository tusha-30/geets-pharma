"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Search, ChevronDown, Globe } from "lucide-react";

const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Values", href: "/about#mission" },
    ],
  },
  {
    label: "Businesses",
    href: "/businesses",
    children: [
      { label: "Specialty", href: "/businesses#specialty" },
      { label: "Generics", href: "/businesses#generics" },
      { label: "Consumer Healthcare", href: "/businesses#consumer" },
      { label: "APIs", href: "/businesses#api" },
    ],
  },
  {
    label: "Investors",
    href: "/investors",
  },
  {
    label: "Sustainability",
    href: "/sustainability",
  },
  {
    label: "Newsroom",
    href: "/newsroom",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="hidden md:block border-b border-gray-100">
        <div className="container flex h-9 items-center justify-end gap-6 text-xs text-ink-mute">
          <Link href="/investors" className="hover:text-brand-600">
            Investors
          </Link>
          <Link href="/newsroom" className="hover:text-brand-600">
            Newsroom
          </Link>
          <Link href="/careers" className="hover:text-brand-600">
            Careers
          </Link>
          <button className="flex items-center gap-1 hover:text-brand-600">
            <Globe className="h-3.5 w-3.5" /> EN
          </button>
        </div>
      </div>

      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white font-bold shadow-md group-hover:scale-105 transition">
            G
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg md:text-xl font-semibold text-ink">
              Geet&apos;s
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-600 -mt-0.5">
              Pharmaceutical
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="nav-link flex items-center gap-1 py-6"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                )}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden min-w-[220px] rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5 group-hover:block">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block rounded-lg px-4 py-2.5 text-sm text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-brand-50 hover:text-brand-700"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary !py-2.5"
          >
            Get in Touch
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand-50"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white font-bold">
                G
              </div>
              <span className="font-serif text-lg font-semibold">
                Geet&apos;s
              </span>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand-50"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="overflow-y-auto px-3 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 px-2 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setActiveMobile(
                          activeMobile === item.label ? null : item.label
                        )
                      }
                      className="p-3 text-ink-mute"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          activeMobile === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && activeMobile === item.label && (
                  <div className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-brand-50"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 px-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
