"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Search, ChevronDown, Stethoscope } from "lucide-react";
import SearchModal from "./SearchModal";
import HCPPortal from "./HCPPortal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Molecules", href: "/molecules" },
  {
    label: "Quality",
    href: "/quality",
    children: [
      { label: "Certificates & Lab", href: "/quality" },
      { label: "Verify Your Product", href: "/verify" },
    ],
  },
  { label: "Franchise", href: "/franchise" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Director's Message", href: "/about#directors-message" },
      { label: "Directorate", href: "/about#directorate" },
      { label: "Our History", href: "/about#history" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hcpOpen, setHcpOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const drawer = (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src="/GP_logo.png"
              alt="Geet's Pharmaceutical"
              className="h-9 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="font-serif text-lg font-semibold text-ink">
                Geet&apos;s
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-600 -mt-0.5">
                Pharmaceutical
              </div>
            </div>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto bg-white px-3 py-4">
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
        </nav>

        <div className="border-t border-gray-100 bg-white px-5 py-4 space-y-3">
          <button
            onClick={() => {
              setOpen(false);
              setHcpOpen(true);
            }}
            className="btn-outline w-full"
          >
            <Stethoscope className="h-4 w-4" /> For Doctors
          </button>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur"
            : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/GP_logo.png"
              alt="Geet's Pharmaceutical"
              className="h-10 w-auto object-contain transition"
            />
            <div className="leading-tight">
              <div className="font-serif text-lg md:text-xl font-semibold text-ink">
                Geet&apos;s
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-600 -mt-0.5">
                Pharmaceutical
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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

          <div className="flex items-center gap-2 md:gap-3">
            <button
              aria-label="Search medicines"
              onClick={() => setSearchOpen(true)}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-brand-50 hover:text-brand-700"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setHcpOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              <Stethoscope className="h-4 w-4" />
              For Doctors
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary !py-2.5"
            >
              Contact
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
      </header>

      {mounted && createPortal(drawer, document.body)}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <HCPPortal open={hcpOpen} onClose={() => setHcpOpen(false)} />
    </>
  );
}
