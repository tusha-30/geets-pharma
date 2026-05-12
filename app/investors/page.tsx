import PageHeader from "@/components/PageHeader";
import { TrendingUp, FileText, BarChart3, Calendar } from "lucide-react";

const financials = [
  { k: "FY26 Revenue", v: "$5.2B", change: "+14% YoY" },
  { k: "EBITDA Margin", v: "27.8%", change: "+180 bps" },
  { k: "Specialty Sales", v: "$1.4B", change: "+22% YoY" },
  { k: "R&D Spend", v: "$420M", change: "8.1% of sales" },
];

const reports = [
  { t: "Annual Report FY26", d: "Comprehensive view of the year." },
  { t: "Q4 FY26 Investor Presentation", d: "Detailed quarterly performance." },
  { t: "Sustainability Report 2026", d: "Our ESG progress & commitments." },
  { t: "Press Release Archive", d: "Past corporate announcements." },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investors"
        title="Long-term value through innovation, scale and discipline"
        desc="Geet's Pharmaceutical is committed to sustainable, profitable growth and transparent communication with our shareholders."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <span className="eyebrow">Financial Highlights</span>
          <h2 className="section-title mt-3">FY26 at a glance</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {financials.map((f) => (
              <div key={f.k} className="card p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-ink-mute">
                  <TrendingUp className="h-4 w-4 text-brand-600" />
                  {f.k}
                </div>
                <div className="mt-3 font-serif text-3xl font-semibold text-ink">
                  {f.v}
                </div>
                <div className="mt-1 text-sm font-medium text-brand-700">
                  {f.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/40">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="eyebrow">Reports & Disclosures</span>
            <h2 className="section-title mt-3">Latest publications</h2>
            <p className="mt-4 text-ink-soft">
              Access our annual reports, quarterly results, investor
              presentations and disclosures.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {reports.map((r) => (
              <a
                key={r.t}
                href="#"
                className="group card p-6 flex items-start gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-ink group-hover:text-brand-700">
                    {r.t}
                  </div>
                  <div className="text-sm text-ink-mute">{r.d}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 md:grid-cols-2">
          <div className="card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold">
              Stock Information
            </h3>
            <p className="mt-2 text-ink-mute">
              Listed on NSE & BSE. Track real-time prices, historical data and
              analyst coverage.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">
                  GEETPHARMA
                </div>
                <div className="font-serif text-3xl font-semibold text-brand-700">
                  ₹1,842.50
                </div>
              </div>
              <div className="text-sm font-semibold text-brand-700">+1.24%</div>
            </div>
          </div>

          <div className="card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold">
              Upcoming Events
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between border-b border-gray-100 pb-3">
                <span>Annual General Meeting</span>
                <span className="font-semibold text-brand-700">
                  Jun 14, 2026
                </span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-3">
                <span>Q1 FY27 Results</span>
                <span className="font-semibold text-brand-700">
                  Jul 28, 2026
                </span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-3">
                <span>Investor Day</span>
                <span className="font-semibold text-brand-700">
                  Sep 10, 2026
                </span>
              </li>
              <li className="flex justify-between">
                <span>Q2 FY27 Results</span>
                <span className="font-semibold text-brand-700">
                  Nov 02, 2026
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
