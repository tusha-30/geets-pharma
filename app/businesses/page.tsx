import PageHeader from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";

const segments = [
  {
    id: "specialty",
    tag: "Specialty",
    title: "Specialty Therapeutics",
    desc: "Our specialty business is focused on differentiated medicines that address chronic and complex conditions where patient needs remain unmet. Therapeutic areas include dermatology, ophthalmology, oncology, neurology and rheumatology.",
    img: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "20+ specialty brands across major markets",
      "Industry-leading dermatology franchise",
      "Robust pipeline of innovative therapies",
    ],
  },
  {
    id: "generics",
    tag: "Generics",
    title: "Quality Generics",
    desc: "We rank among the world's largest generic pharmaceutical companies, supplying high-quality, affordable medicines to patients in over 100 countries with a portfolio of more than 2,000 products.",
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "2,000+ products in our global portfolio",
      "Complex generics & first-to-file launches",
      "End-to-end vertically integrated supply",
    ],
  },
  {
    id: "consumer",
    tag: "Consumer",
    title: "Consumer Healthcare",
    desc: "Our consumer healthcare division brings trusted everyday wellness solutions to homes worldwide — covering pain relief, vitamins & supplements, women's health, skin care and digestive wellness.",
    img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Iconic brands trusted for generations",
      "Direct-to-consumer & retail channels",
      "Science-backed wellness innovation",
    ],
  },
  {
    id: "api",
    tag: "API",
    title: "Active Pharmaceutical Ingredients",
    desc: "We manufacture and supply high-quality active pharmaceutical ingredients to pharmaceutical companies globally, leveraging deep chemistry expertise and world-class manufacturing.",
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "300+ APIs in our portfolio",
      "USFDA, EMA, WHO-GMP certified facilities",
      "Complex & specialty API capabilities",
    ],
  },
];

export default function BusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Businesses"
        title="Four integrated businesses, one mission"
        desc="From specialty therapeutics to APIs, our integrated portfolio enables us to serve every stage of the healthcare value chain."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1800&q=80"
      />

      {segments.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`section ${idx % 2 ? "bg-brand-50/40" : "bg-white"}`}
        >
          <div
            className={`container grid gap-12 lg:grid-cols-2 lg:items-center ${
              idx % 2 ? "" : ""
            }`}
          >
            <div className={`${idx % 2 ? "lg:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-[440px] w-full object-cover"
                />
              </div>
            </div>
            <div className={`${idx % 2 ? "lg:order-1" : ""}`}>
              <span className="eyebrow">{s.tag}</span>
              <h2 className="section-title mt-3">{s.title}</h2>
              <p className="mt-5 text-ink-soft text-base md:text-lg leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-7 space-y-3">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-ink-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
