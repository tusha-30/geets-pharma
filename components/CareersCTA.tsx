import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />

      <div className="container">
        <div className="max-w-2xl text-white">
          <span className="eyebrow !text-brand-300">Careers</span>
          <h2 className="section-title mt-3 !text-white">
            Join a team committed to better health for all
          </h2>
          <p className="mt-5 text-gray-200">
            From the lab to the manufacturing floor, our 38,000+ colleagues
            share a single passion — improving lives. Explore opportunities
            across science, technology, operations and corporate functions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/careers" className="btn-primary">
              View Open Roles <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-ghost">
              Life at Geet&apos;s
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
