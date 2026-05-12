import Link from "next/link";
import { ArrowRight, Microscope, Globe2, HeartPulse } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80"
              alt="Geet's Pharma scientists at work"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block w-56 rounded-2xl bg-brand-gradient p-5 text-white shadow-xl">
            <div className="font-serif text-4xl font-semibold">35+</div>
            <div className="text-sm opacity-90">Years of Excellence</div>
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
            <div className="text-xs uppercase tracking-wider text-brand-600">
              Established
            </div>
            <div className="font-serif text-2xl font-semibold text-ink">
              Since 1989
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">About Geet&apos;s Pharmaceutical</span>
          <h2 className="section-title mt-3">
            Where science meets compassion to advance human health
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-soft">
            For more than three decades, Geet&apos;s Pharmaceutical has been at
            the forefront of pharmaceutical innovation — building a robust
            portfolio of specialty medicines, complex generics, biosimilars and
            consumer healthcare products that improve patient outcomes globally.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                Icon: Microscope,
                title: "Innovation-Led",
                desc: "Five R&D centres driving breakthrough therapies.",
              },
              {
                Icon: Globe2,
                title: "Global Footprint",
                desc: "Products available in 100+ countries.",
              },
              {
                Icon: HeartPulse,
                title: "Patient-First",
                desc: "Every decision begins and ends with patients.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-brand-50/60 p-5 ring-1 ring-brand-100"
              >
                <Icon className="h-6 w-6 text-brand-600" />
                <div className="mt-3 font-semibold text-ink">{title}</div>
                <p className="mt-1 text-sm text-ink-mute">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/about" className="btn-outline">
              Read Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
