import PageHeader from "@/components/PageHeader";
import { Target, Eye, HeartHandshake } from "lucide-react";

const directors = [
  {
    name: "Dr. Geet Sharma",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    signature: "Dr. Geet Sharma",
  },
  {
    name: "Mr. Arjun Mehta",
    role: "Director — Operations & Strategy",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    signature: "Arjun Mehta",
  },
];

const timeline = [
  {
    y: "2026",
    t: "Incorporated as Geet's Pharmaceutical Pvt. Ltd. — a research-driven entity headquartered in India.",
  },
  {
    y: "2026",
    t: "Achieved ISO 9001:2015 certification for quality management systems.",
  },
  {
    y: "2026",
    t: "Launched product portfolio spanning oral solids, injectables, and pediatric formulations.",
  },
  {
    y: "2026",
    t: "Established PCD Pharma franchise network with exclusive monopoly rights model.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Directors' Message & Company History"
        desc="Geet's Pharmaceutical Pvt. Ltd. — committed to setting new benchmarks in pharmaceutical excellence through transparency, clinical integrity, and patient-centric innovation."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1800&q=80"
      />

      <section id="directors-message" className="section bg-white scroll-mt-24">
        <div className="container max-w-4xl">
          <span className="eyebrow">Director&apos;s Message</span>
          <h2 className="section-title mt-3">
            Setting new benchmarks in pharmaceutical excellence
          </h2>
          <div className="mt-8 space-y-5 text-ink-soft text-base md:text-lg leading-relaxed">
            <p>
              At Geet&apos;s Pharmaceutical Pvt. Ltd., we believe that quality
              is not a department — it is a culture. Established in 2026 with a
              clear vision of redefining healthcare excellence, our company was
              founded on the principle that every Indian patient deserves access
              to world-class medicines at affordable prices.
            </p>
            <p>
              Our commitment to transparency, clinical integrity, and
              patient-centric innovation guides every decision we make — from
              research and formulation to manufacturing and distribution. We
              adhere strictly to WHO-GMP standards, ISO certification
              requirements, UCPMP guidelines, and DCGI regulations because human
              life is at the centre of everything we do.
            </p>
            <p>
              As we build partnerships with PCD franchise distributors and
              healthcare professionals across India, we remain steadfast in our
              promise: Quality First, always.
            </p>
          </div>
          <div className="mt-8 font-serif text-xl italic text-brand-700">
            — Dr. Geet Sharma, Managing Director
          </div>
        </div>
      </section>

      <section id="directorate" className="section bg-brand-50/40 scroll-mt-24">
        <div className="container">
          <span className="eyebrow">Directorate</span>
          <h2 className="section-title mt-3">Our Board of Directors</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Professional leadership committed to pharmaceutical excellence and
            ethical business practices.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {directors.map((d) => (
              <div key={d.name} className="card overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="font-serif text-xl font-semibold">{d.name}</div>
                  <div className="text-sm text-brand-700">{d.role}</div>
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="font-serif text-2xl italic text-ink/70">
                      {d.signature}
                    </div>
                    <div className="mt-1 text-xs text-ink-mute">
                      Digital Signature
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="section bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: Target,
                t: "Mission",
                d: "To bridge the gap between advanced medical research and affordable healthcare accessibility.",
              },
              {
                Icon: Eye,
                t: "Vision",
                d: "Redefining Healthcare Excellence — setting new standards in quality, innovation, and patient care.",
              },
              {
                Icon: HeartHandshake,
                t: "Values",
                d: "Commitment to transparency, clinical integrity, and patient-centric innovation.",
              },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-ink-mute leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="section bg-brand-50/40 scroll-mt-24">
        <div className="container">
          <span className="eyebrow">Our History</span>
          <h2 className="section-title mt-3">The Geet&apos;s journey</h2>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-100" />
            <div className="space-y-10">
              {timeline.map((m, i) => (
                <div
                  key={`${m.y}-${i}`}
                  className={`relative flex flex-col md:flex-row md:items-center gap-4 ${
                    i % 2 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                    <div className="card p-6">
                      <div className="font-serif text-3xl font-semibold text-brand-700">
                        {m.y}
                      </div>
                      <p className="mt-2 text-ink-soft">{m.t}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex h-4 w-4 items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-brand-500 ring-4 ring-brand-100" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
