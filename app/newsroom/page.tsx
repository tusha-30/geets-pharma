import PageHeader from "@/components/PageHeader";
import { Calendar, ArrowRight } from "lucide-react";

const items = [
  {
    cat: "Press Release",
    date: "Apr 28, 2026",
    title:
      "Geet's Pharmaceutical announces FDA approval for novel dermatology therapy",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "The new therapy represents a major advance for patients with moderate-to-severe psoriasis worldwide.",
  },
  {
    cat: "Investor",
    date: "Apr 12, 2026",
    title:
      "Q4 FY26 results: Revenue up 14%, specialty business grows 22% YoY",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Strong performance across specialty and global generics drove record annual revenue.",
  },
  {
    cat: "Sustainability",
    date: "Mar 30, 2026",
    title:
      "Geet's launches $50M community health initiative across rural India",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Three-year program will reach 5 million underserved patients via mobile clinics.",
  },
  {
    cat: "Press Release",
    date: "Mar 14, 2026",
    title: "Strategic partnership signed with leading European biotech",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Collaboration will accelerate development of next-generation oncology therapeutics.",
  },
  {
    cat: "Awards",
    date: "Feb 22, 2026",
    title: "Recognized among India's Best Workplaces 2026",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Ranked in the Top 25 for the seventh consecutive year by Great Place to Work.",
  },
  {
    cat: "Innovation",
    date: "Feb 02, 2026",
    title: "New R&D centre inaugurated in Boston, USA",
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Our fifth global R&D centre will focus on biologics and complex therapeutics.",
  },
];

export default function NewsroomPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsroom"
        title="Stories, news and announcements"
        desc="Explore the latest from Geet's Pharmaceutical — press releases, investor updates, scientific breakthroughs and more."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
                  <p className="mt-2 text-sm text-ink-mute">{n.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
