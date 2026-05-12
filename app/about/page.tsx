import PageHeader from "@/components/PageHeader";
import { Target, Eye, HeartHandshake } from "lucide-react";

const leaders = [
  {
    name: "Dr. Geet Sharma",
    role: "Chairperson & Managing Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Iyer",
    role: "Chief Scientific Officer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rohan Verma",
    role: "Chief Financial Officer",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

const timeline = [
  { y: "1989", t: "Founded in Mumbai with a small generics portfolio." },
  { y: "1998", t: "First international expansion into Southeast Asia." },
  { y: "2007", t: "Launched specialty therapeutics division." },
  { y: "2014", t: "Acquired three R&D centres across the US and Europe." },
  { y: "2020", t: "Reached 100+ countries served and $3B in annual revenue." },
  { y: "2026", t: "Crossed 38,000 employees and 40+ manufacturing sites." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Building a healthier tomorrow, one breakthrough at a time"
        desc="For more than 35 years, Geet's Pharmaceutical has united science, scale and compassion to deliver medicines that matter."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1800&q=80"
      />

      <section id="story" className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title mt-3">
              From a single lab to a global healthcare leader
            </h2>
            <p className="mt-5 text-ink-soft text-base md:text-lg leading-relaxed">
              What began in 1989 with a vision to make quality medicines
              accessible to every Indian household has grown into a global
              pharmaceutical company present in 100+ countries. Our journey is
              one of relentless innovation, unwavering quality and an enduring
              commitment to patients.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Today, Geet&apos;s Pharmaceutical stands among the world&apos;s
              leading specialty and generics companies — a trusted partner to
              physicians, payers and patients alike.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80"
              alt="Our story"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="mission" className="section bg-brand-50/40">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: Target,
                t: "Mission",
                d: "To advance human health by delivering innovative, high-quality and affordable medicines globally.",
              },
              {
                Icon: Eye,
                t: "Vision",
                d: "To be the most trusted, integrated specialty pharma company touching a billion lives.",
              },
              {
                Icon: HeartHandshake,
                t: "Values",
                d: "Integrity, innovation, accountability, collaboration and care define everything we do.",
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

      <section className="section bg-white">
        <div className="container">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section-title mt-3">Milestones that shaped us</h2>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-100" />
            <div className="space-y-10">
              {timeline.map((m, i) => (
                <div
                  key={m.y}
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

      <section id="leadership" className="section bg-brand-50/40">
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-title mt-3">Meet our leadership team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l) => (
              <div key={l.name} className="card overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={l.img}
                    alt={l.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="font-serif text-lg font-semibold">
                    {l.name}
                  </div>
                  <div className="text-sm text-brand-700">{l.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
