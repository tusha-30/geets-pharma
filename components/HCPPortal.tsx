"use client";

import { useEffect, useState } from "react";
import { Stethoscope, X, FileText, BarChart3, BookOpen } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function HCPPortal({ open, onClose }: Props) {
  const [verified, setVerified] = useState(false);
  const [form, setForm] = useState({ name: "", regNo: "", email: "" });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setVerified(false);
      setForm({ name: "", regNo: "", email: "" });
    }
  }, [open]);

  if (!open) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerified(true);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-slide-up">
        <button
          onClick={onClose}
          aria-label="Close HCP portal"
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-gray-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold">For Doctors</h2>
              <p className="text-sm text-ink-mute">HCP Portal — Verified Access Only</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {!verified ? (
            <form onSubmit={handleVerify} className="space-y-4">
              <p className="text-sm text-ink-soft">
                Verify your medical credentials to access Leave Behind Leaflets (LBLs),
                clinical study summaries, and high-resolution dosage charts.
              </p>
              <div>
                <label className="block text-sm font-medium text-ink-soft">
                  Full Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="Dr. Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-soft">
                  Medical Registration No.
                </label>
                <input
                  required
                  value={form.regNo}
                  onChange={(e) => setForm({ ...form, regNo: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="MCI / State Council Reg. No."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-soft">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="doctor@hospital.com"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Verify & Access Portal
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-brand-700 font-medium">
                Welcome, {form.name}. Your credentials have been verified.
              </p>
              {[
                {
                  Icon: FileText,
                  title: "Leave Behind Leaflets (LBLs)",
                  desc: "Product monographs and prescribing information",
                },
                {
                  Icon: BookOpen,
                  title: "Clinical Study Summaries",
                  desc: "Evidence-based efficacy and safety data",
                },
                {
                  Icon: BarChart3,
                  title: "Dosage Charts",
                  desc: "High-resolution visual dosing guides",
                },
              ].map(({ Icon, title, desc }) => (
                <button
                  key={title}
                  className="flex w-full items-start gap-3 rounded-xl border border-gray-100 p-4 text-left hover:bg-brand-50 transition"
                >
                  <Icon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <div className="font-semibold text-ink">{title}</div>
                    <div className="text-sm text-ink-mute">{desc}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
