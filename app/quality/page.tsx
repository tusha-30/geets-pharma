import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import {
  ShieldCheck,
  FlaskConical,
  Award,
  Scale,
  ArrowRight,
} from "lucide-react";

const standards = [
  {
    Icon: ShieldCheck,
    title: "Quality First Philosophy",
    desc: "'Quality First' is non-negotiable — every decision is guided by our responsibility toward human life.",
  },
  {
    Icon: Award,
    title: "WHO-GMP Standards",
    desc: "Full adherence to WHO-GMP international benchmarks for manufacturing, packaging, and distribution.",
  },
  {
    Icon: FlaskConical,
    title: "Multi-Tier QC Testing",
    desc: "Rigorous quality control checks at raw material, in-process, and finished product stages for purity, efficacy, and safety.",
  },
  {
    Icon: Scale,
    title: "Regulatory Compliance",
    desc: "Strict adherence to UCPMP (Uniform Code for Pharmaceutical Marketing Practices) and DCGI regulations.",
  },
];

const qcSteps = [
  "Raw material identity and purity verification",
  "In-process manufacturing parameter checks",
  "Finished product assay and dissolution testing",
  "Microbial and sterility validation (where applicable)",
  "Stability studies and batch release documentation",
];

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality & Compliance"
        title="Quality First — because lives depend on it"
        desc="Every Geet's Pharmaceutical product undergoes multi-tier quality control aligned with WHO-GMP and ISO standards."
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {standards.map(({ Icon, title, desc }) => (
              <div key={title} className="card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-ink-mute leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Laboratory & Testing</span>
            <h2 className="section-title mt-3">
              Multi-tier quality control framework
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our state-of-the-art quality control laboratories implement
              comprehensive testing protocols at every stage of the manufacturing
              lifecycle — ensuring every batch meets the highest standards of
              purity, efficacy, and safety before release.
            </p>
            <ul className="mt-6 space-y-3">
              {qcSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=80"
              alt="Quality control laboratory"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title mt-3">ISO certified for management excellence</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Geet&apos;s Pharmaceutical Pvt. Ltd. is certified to ISO 9001:2015,
            reflecting our commitment to quality management systems and
            operational efficiency across all processes.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <img
              src="/certificate.png"
              alt="ISO certification"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container text-center">
          <span className="eyebrow">Product Authenticity</span>
          <h2 className="section-title mt-3">Verify your product</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Scan the QR code on your Geet&apos;s Pharmaceutical packaging to
            confirm product authenticity and batch details.
          </p>
          <Link href="/verify" className="btn-primary mt-8 inline-flex">
            Verify Your Product <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
