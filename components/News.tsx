import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const items = [
  {
    cat: "Press Release",
    date: "Apr 28, 2026",
    title:
      "Geet's Pharmaceutical announces FDA approval for novel dermatology therapy",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
  },
  {
    cat: "Investor",
    date: "Apr 12, 2026",
    title:
      "Q4 FY26 results: Revenue up 14%, specialty business grows 22% YoY",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
  {
    cat: "Sustainability",
    date: "Mar 30, 2026",
    title:
      "Geet's launches $50M community health initiative across rural India",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80",
  },
];

export default function News() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Newsroom</span>
            <h2 className="section-title mt-3">Latest stories & updates</h2>
          </div>
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:gap-3 transition-all"
          >
            View all news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {items.map((n) => (
            <article
              key={n.title}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 hover:shadow-lg transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-ink-mute">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                    {n.cat}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {n.date}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-ink group-hover:text-brand-700">
                  {n.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
