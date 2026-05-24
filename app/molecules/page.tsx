"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Search, Pill, Filter } from "lucide-react";
import { molecules, dosageForms, type DosageForm } from "@/lib/molecules";

export default function MoleculesPage() {
  const [query, setQuery] = useState("");
  const [formFilter, setFormFilter] = useState<DosageForm | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return molecules.filter((m) => {
      const matchesForm = formFilter === "All" || m.dosageForm === formFilter;
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.generic.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.dosageForm.toLowerCase().includes(q) ||
        m.indication.toLowerCase().includes(q);
      return matchesForm && matchesQuery;
    });
  }, [query, formFilter]);

  return (
    <>
      <PageHeader
        eyebrow="Our Molecules"
        title="Product catalog with full medicine information"
        desc="Search our portfolio of advanced oral solids, life-saving injectables, pediatric solutions, and specialized therapeutic care."
        image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-mute" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by brand name, generic, category, or dosage form..."
                className="w-full rounded-2xl border border-gray-200 py-3.5 pl-12 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-ink-mute" />
              <select
                value={formFilter}
                onChange={(e) =>
                  setFormFilter(e.target.value as DosageForm | "All")
                }
                className="rounded-2xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-brand-500"
              >
                <option value="All">All Dosage Forms</option>
                {dosageForms.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Advanced Oral Solids",
              "Life-Saving Injectables",
              "Pediatric",
              "Chronic & Acute Care",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm text-ink-mute">
            Showing {filtered.length} of {molecules.length} products
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filtered.map((m) => (
              <article key={m.id} id={m.id} className="card p-6 scroll-mt-28">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Pill className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">{m.name}</h3>
                      <p className="text-sm text-brand-700">{m.generic}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                    {m.dosageForm}
                  </span>
                </div>

                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-ink-mute">Strength</dt>
                    <dd className="text-ink">{m.strength}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink-mute">Category</dt>
                    <dd className="text-ink">{m.category}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink-mute">Pack Size</dt>
                    <dd className="text-ink">{m.packSize}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink-mute">Product Code</dt>
                    <dd className="text-ink">{m.id}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-medium text-ink-mute">Composition</dt>
                    <dd className="text-ink">{m.composition}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-medium text-ink-mute">Indication</dt>
                    <dd className="text-ink">{m.indication}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
