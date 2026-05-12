import PageHeader from "@/components/PageHeader";
import {
  Briefcase,
  MapPin,
  Search,
  Filter,
  Sparkles,
  Award,
  Heart,
} from "lucide-react";

const jobs = [
  {
    title: "Senior Research Scientist – Dermatology",
    dept: "R&D",
    loc: "Mumbai, India",
    type: "Full-time",
  },
  {
    title: "Manufacturing Quality Lead",
    dept: "Operations",
    loc: "Halol, Gujarat",
    type: "Full-time",
  },
  {
    title: "Regulatory Affairs Manager",
    dept: "Regulatory",
    loc: "Princeton, NJ",
    type: "Full-time",
  },
  {
    title: "Brand Manager – Consumer Healthcare",
    dept: "Marketing",
    loc: "London, UK",
    type: "Full-time",
  },
  {
    title: "Data Scientist – Commercial Analytics",
    dept: "Technology",
    loc: "Hyderabad, India",
    type: "Hybrid",
  },
  {
    title: "Medical Science Liaison – Oncology",
    dept: "Medical Affairs",
    loc: "Remote, US",
    type: "Remote",
  },
];

const perks = [
  {
    Icon: Sparkles,
    t: "Growth & Learning",
    d: "Personalized development plans, global mobility and tuition assistance.",
  },
  {
    Icon: Heart,
    t: "Health & Wellbeing",
    d: "Comprehensive healthcare, mental wellness and family support programs.",
  },
  {
    Icon: Award,
    t: "Recognition",
    d: "Performance-based rewards and a culture that celebrates excellence.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build a meaningful career that touches lives every day"
        desc="When you join Geet's Pharmaceutical, you become part of a global team united by purpose — to advance human health."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <span className="eyebrow">Why Geet&apos;s</span>
          <h2 className="section-title mt-3">A workplace where you can thrive</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {perks.map(({ Icon, t, d }) => (
              <div key={t} className="card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-ink-mute leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Open Positions</span>
              <h2 className="section-title mt-3">Find your next role</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 ring-1 ring-black/5">
                <Search className="h-4 w-4 text-ink-mute" />
                <input
                  className="w-full outline-none text-sm bg-transparent placeholder-ink-mute"
                  placeholder="Search jobs"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold ring-1 ring-black/5 hover:bg-brand-50">
                <Filter className="h-4 w-4" /> Filter
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            {jobs.map((j) => (
              <div
                key={j.title}
                className="group card flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg font-semibold group-hover:text-brand-700">
                    {j.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-ink-mute">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {j.dept}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {j.loc}
                    </span>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      {j.type}
                    </span>
                  </div>
                </div>
                <button className="btn-outline !py-2.5">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
