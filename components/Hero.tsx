"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    eyebrow: "The Brand Story",
    title: "Redefining Healthcare Excellence",
    desc: "Established in 2026 as a research-driven Private Limited entity headquartered in India — bridging the gap between advanced medical research and affordable healthcare accessibility.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    cta: { label: "Our Story", href: "/about" },
  },
  {
    eyebrow: "Quality First",
    title: "Every decision guided by human life",
    desc: "WHO-GMP benchmarks, ISO certification, and multi-tier quality control — because quality is non-negotiable in everything we do.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80",
    cta: { label: "Quality & Compliance", href: "/quality" },
  },
  {
    eyebrow: "Our Portfolio",
    title: "Advanced medicines for every therapeutic need",
    desc: "From oral solids and life-saving injectables to pediatric solutions and specialized chronic care — discover our full molecule catalog.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80",
    cta: { label: "Explore Molecules", href: "/molecules" },
  },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="relative h-[640px] sm:h-[680px] md:h-[720px] lg:h-[80vh] lg:min-h-[640px] lg:max-h-[820px] w-full">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
        ))}

        <div className="relative z-10 flex h-full items-center">
          <div className="container">
            <div className="max-w-2xl text-white animate-fade-in" key={i}>
              <span className="eyebrow !text-brand-300">{slides[i].eyebrow}</span>
              <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance">
                {slides[i].title}
              </h1>
              <p className="mt-5 max-w-xl text-base md:text-lg text-gray-200">
                {slides[i].desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={slides[i].cta.href} className="btn-primary">
                  {slides[i].cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/franchise" className="btn-ghost">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-20">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx
                      ? "w-10 bg-brand-400"
                      : "w-5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-12 md:-mt-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:grid-cols-4 md:gap-6 md:p-8">
            {[
              { v: "2026", k: "Established" },
              { v: "WHO-GMP", k: "Quality Standards" },
              { v: "ISO", k: "Certified" },
              { v: "100%", k: "Quality First" },
            ].map((s) => (
              <div key={s.k} className="text-center">
                <div className="font-serif text-2xl md:text-4xl font-semibold text-brand-700">
                  {s.v}
                </div>
                <div className="mt-1 text-xs md:text-sm font-medium uppercase tracking-wider text-ink-mute">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
