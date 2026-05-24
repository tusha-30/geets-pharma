import Link from "next/link";
import {
  ArrowRight,
  Microscope,
  ShieldCheck,
  HeartPulse,
  Pill,
  Syringe,
  Baby,
  Activity,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <>
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80"
                alt="Geet's Pharmaceutical research"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block w-56 rounded-2xl bg-brand-gradient p-5 text-white shadow-xl">
              <div className="font-serif text-3xl font-semibold">India</div>
              <div className="text-sm opacity-90">Headquartered</div>
            </div>
            <div className="absolute -top-6 -left-6 hidden md:block rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="text-xs uppercase tracking-wider text-brand-600">
                Incorporated
              </div>
              <div className="font-serif text-2xl font-semibold text-ink">
                2026
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Corporate Identity & Vision</span>
            <h2 className="section-title mt-3">
              Redefining Healthcare Excellence
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-soft">
              Geet&apos;s Pharmaceutical Pvt. Ltd. is a research-driven Private
              Limited entity established in 2026, headquartered in India. Our
              mission is to bridge the gap between advanced medical research and
              affordable healthcare accessibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  Icon: Microscope,
                  title: "Research-Driven",
                  desc: "Science-led formulation development.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Clinical Integrity",
                  desc: "Transparency in every process.",
                },
                {
                  Icon: HeartPulse,
                  title: "Patient-Centric",
                  desc: "Innovation that puts patients first.",
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
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container">
          <span className="eyebrow">Product Portfolio</span>
          <h2 className="section-title mt-3">Our specializations</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            A comprehensive range spanning advanced oral solids, life-saving
            injectables, pediatric solutions, and specialized therapeutic care.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Pill,
                title: "Advanced Oral Solids",
                desc: "Tablets & capsules with precision dosing.",
              },
              {
                Icon: Syringe,
                title: "Life-Saving Injectables",
                desc: "Critical care IV and injection formulations.",
              },
              {
                Icon: Baby,
                title: "Pediatric Solutions",
                desc: "Safe, palatable medicines for children.",
              },
              {
                Icon: Activity,
                title: "Therapeutic Care",
                desc: "Chronic & acute specialized treatments.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <Icon className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 font-serif text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-ink-mute">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/molecules" className="btn-primary inline-flex">
              Browse Product Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
