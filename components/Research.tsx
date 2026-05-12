import Link from "next/link";
import { Beaker, FlaskConical, Atom, Brain, ArrowRight } from "lucide-react";

const stats = [
  { Icon: Beaker, k: "R&D Centres", v: "5" },
  { Icon: FlaskConical, k: "Scientists", v: "1,800+" },
  { Icon: Atom, k: "Patents Filed", v: "650+" },
  { Icon: Brain, k: "Active Trials", v: "40+" },
];

export default function Research() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">Research & Innovation</span>
          <h2 className="section-title mt-3">
            Driven by science. Inspired by patients.
          </h2>
          <p className="mt-5 text-ink-soft text-base md:text-lg leading-relaxed">
            From discovery and pre-clinical research to global launches,
            Geet&apos;s Pharmaceutical invests heavily in advancing therapeutic
            frontiers. Our scientists pursue novel molecules, complex generics,
            biosimilars and breakthrough delivery technologies.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ Icon, k, v }) => (
              <div
                key={k}
                className="rounded-2xl bg-brand-50/60 p-4 ring-1 ring-brand-100"
              >
                <Icon className="h-5 w-5 text-brand-600" />
                <div className="mt-2 font-serif text-2xl font-semibold text-ink">
                  {v}
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">
                  {k}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/businesses" className="btn-primary">
              Explore Our Capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                className="h-56 w-full object-cover sm:h-64"
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80"
                alt="Research lab"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                className="h-40 w-full object-cover sm:h-44"
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80"
                alt="Microscope"
              />
            </div>
          </div>
          <div className="space-y-4 sm:pt-10">
            <div className="overflow-hidden rounded-2xl">
              <img
                className="h-40 w-full object-cover sm:h-44"
                src="https://images.unsplash.com/photo-1583912267550-d44c9c5f3f2c?auto=format&fit=crop&w=900&q=80"
                alt="Scientist"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                className="h-56 w-full object-cover sm:h-64"
                src="https://images.unsplash.com/photo-1576670159805-381a9b6dc16d?auto=format&fit=crop&w=900&q=80"
                alt="Lab work"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
