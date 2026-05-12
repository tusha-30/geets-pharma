import Link from "next/link";
import { Leaf, Users, ShieldCheck, ArrowRight } from "lucide-react";

const pillars = [
  {
    Icon: Leaf,
    title: "Environment",
    desc: "Carbon-neutral commitments, water stewardship and zero-waste manufacturing.",
  },
  {
    Icon: Users,
    title: "Social",
    desc: "Patient access programs, community health initiatives and inclusive workplaces.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance",
    desc: "Highest standards of compliance, ethics and transparent reporting.",
  },
];

export default function Sustainability() {
  return (
    <section className="section relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/95 to-white" />

      <div className="container">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <span className="eyebrow">Sustainability</span>
            <h2 className="section-title mt-3">
              Caring for people. Caring for the planet.
            </h2>
          </div>
          <p className="text-ink-soft text-base md:text-lg">
            Our sustainability strategy aligns with the UN Sustainable
            Development Goals — driving meaningful action across environment,
            social and governance pillars.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group card p-7 hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-ink-mute leading-relaxed">{desc}</p>
              <Link
                href="/sustainability"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl bg-brand-gradient p-8 text-white md:grid-cols-4 md:p-12">
          {[
            { v: "42%", k: "Reduction in carbon emissions" },
            { v: "3.2M+", k: "Patients reached through CSR" },
            { v: "60%", k: "Renewable electricity by 2027" },
            { v: "Zero", k: "Waste-to-landfill goal" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-serif text-3xl md:text-4xl font-semibold">
                {s.v}
              </div>
              <div className="mt-1 text-sm opacity-90">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
