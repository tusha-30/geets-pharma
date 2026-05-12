import PageHeader from "@/components/PageHeader";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  Users,
  GraduationCap,
} from "lucide-react";

const goals = [
  {
    Icon: Sun,
    t: "Net-Zero by 2045",
    d: "Path to carbon neutrality across Scope 1 & 2 emissions.",
  },
  {
    Icon: Droplets,
    t: "Water Positive by 2030",
    d: "Replenish more water than we consume across operations.",
  },
  {
    Icon: Recycle,
    t: "Zero Waste-to-Landfill",
    d: "Eliminate non-recyclable waste at every manufacturing site.",
  },
  {
    Icon: Leaf,
    t: "60% Renewable Power",
    d: "Source the majority of electricity from renewable sources.",
  },
  {
    Icon: Users,
    t: "Diverse Workforce",
    d: "40% women in leadership across business functions by 2028.",
  },
  {
    Icon: GraduationCap,
    t: "5M Lives Empowered",
    d: "Patient access & community health programs reaching 5M+ lives.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title="A healthier world begins with responsible business"
        desc="Our ESG strategy embeds sustainability into every decision — from clinical research and manufacturing to people, communities and governance."
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <span className="eyebrow">2030 Commitments</span>
          <h2 className="section-title mt-3">
            Our roadmap to a sustainable future
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map(({ Icon, t, d }) => (
              <div key={t} className="card p-6">
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
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Community Impact</span>
            <h2 className="section-title mt-3">
              Healthcare access for those who need it most
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Through patient access programs, mobile health clinics, disease
              awareness initiatives and educational scholarships, we are
              actively bridging gaps in healthcare for underserved communities.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4">
              <div>
                <div className="font-serif text-3xl font-semibold text-brand-700">
                  3.2M+
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">
                  Patients reached
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-brand-700">
                  120+
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">
                  Mobile clinics
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-brand-700">
                  $18M
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">
                  Annual CSR spend
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1400&q=80"
              alt="Community health"
              className="h-[440px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
