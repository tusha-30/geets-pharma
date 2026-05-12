const regions = [
  { name: "North America", sites: 8, employees: "6,200+" },
  { name: "Europe", sites: 6, employees: "3,800+" },
  { name: "India", sites: 18, employees: "21,000+" },
  { name: "Emerging Markets", sites: 6, employees: "5,400+" },
  { name: "Rest of the World", sites: 4, employees: "1,600+" },
];

export default function GlobalPresence() {
  return (
    <section className="section bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1d805040,transparent_40%),radial-gradient(circle_at_80%_60%,#3f9b6a30,transparent_45%)]" />
      <div className="container relative grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow !text-brand-300">Global Presence</span>
          <h2 className="section-title mt-3 !text-white">
            Serving patients in every corner of the world
          </h2>
          <p className="mt-5 max-w-xl text-gray-300">
            With operations spanning five continents, Geet&apos;s Pharmaceutical
            combines local insight with global capability to deliver quality
            medicines wherever they are needed.
          </p>

          <div className="mt-8 space-y-3">
            {regions.map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-brand-400/60"
              >
                <div>
                  <div className="font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-gray-400">
                    {r.sites} sites • {r.employees} employees
                  </div>
                </div>
                <div className="hidden sm:flex h-9 items-center justify-center rounded-full bg-brand-500/20 px-4 text-xs font-semibold text-brand-300">
                  Active Operations
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-lg rounded-full bg-gradient-to-br from-brand-500/20 to-transparent ring-1 ring-white/10">
            <svg
              viewBox="0 0 500 500"
              className="absolute inset-0 h-full w-full p-6"
              fill="none"
            >
              <circle cx="250" cy="250" r="230" stroke="#ffffff15" />
              <circle cx="250" cy="250" r="170" stroke="#ffffff10" />
              <circle cx="250" cy="250" r="110" stroke="#ffffff10" />
              {[
                [120, 180],
                [200, 130],
                [310, 160],
                [380, 230],
                [340, 320],
                [240, 360],
                [150, 320],
                [110, 250],
                [290, 240],
              ].map(([x, y], idx) => (
                <g key={idx}>
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#3f9b6a"
                    className="animate-pulse"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="16"
                    fill="#3f9b6a"
                    fillOpacity="0.2"
                  />
                </g>
              ))}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-6xl font-semibold text-white">
                  100+
                </div>
                <div className="mt-1 text-sm uppercase tracking-widest text-brand-300">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
