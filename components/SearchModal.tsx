"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { molecules } from "@/lib/molecules";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return molecules.slice(0, 6);
    return molecules.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.generic.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.dosageForm.toLowerCase().includes(q)
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center bg-ink/50 backdrop-blur-sm p-4 pt-24">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-slide-up">
        <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
          <Search className="h-5 w-5 text-brand-600" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicines by name, generic, category or dosage form..."
            className="flex-1 text-base outline-none placeholder:text-ink-mute"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[420px] overflow-y-auto p-3">
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-ink-mute">
              No medicines found. Try a different search term.
            </p>
          ) : (
            results.map((m) => (
              <Link
                key={m.id}
                href={`/molecules#${m.id}`}
                onClick={onClose}
                className="block rounded-xl px-4 py-3 hover:bg-brand-50 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-ink">{m.name}</div>
                    <div className="text-sm text-ink-mute">{m.generic}</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                    {m.dosageForm}
                  </span>
                </div>
                <div className="mt-1 text-xs text-ink-mute">
                  {m.strength} · {m.category}
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="border-t border-gray-100 px-5 py-3 text-center">
          <Link
            href="/molecules"
            onClick={onClose}
            className="text-sm font-medium text-brand-700 hover:underline"
          >
            View full product catalog →
          </Link>
        </div>
      </div>
    </div>
  );
}
