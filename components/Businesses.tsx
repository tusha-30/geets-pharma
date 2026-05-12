import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    tag: "Specialty",
    title: "Specialty Therapeutics",
    desc: "Differentiated medicines across dermatology, ophthalmology, oncology and CNS — addressing unmet patient needs.",
    img: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?auto=format&fit=crop&w=1200&q=80",
    href: "/businesses#specialty",
  },
  {
    tag: "Generics",
    title: "Quality Generics",
    desc: "One of the largest portfolios of high-quality, affordable generics serving patients in every region.",
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80",
    href: "/businesses#generics",
  },
  {
    tag: "Consumer",
    title: "Consumer Healthcare",
    desc: "Trusted everyday wellness brands across pain relief, vitamins, women's health and skin care.",
    img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
    href: "/businesses#consumer",
  },
  {
    tag: "API",
    title: "Active Pharmaceutical Ingredients",
    desc: "World-class APIs supplied to manufacturers across the globe with industry-leading quality benchmarks.",
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
    href: "/businesses#api",
  },
];

export default function Businesses() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Businesses</span>
            <h2 className="section-title mt-3">
              Four pillars driving better outcomes for patients
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            From breakthrough specialty therapies to everyday consumer wellness,
            our integrated portfolio touches every stage of human health.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link
              href={it.href}
              key={it.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl transition"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  {it.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-brand-700">
                    {it.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-brand-600 transition group-hover:rotate-45" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {it.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
