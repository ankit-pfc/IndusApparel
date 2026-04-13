import { Container } from "@/components/ui";

const ROWS = [
  { feature: "Price Range", indus: "\u20B92,999\u2013\u20B96,999", fast: "\u20B9999\u2013\u20B92,499", premium: "\u20B98,000\u2013\u20B918,000" },
  { feature: "Fit Grading", indus: "India-first blocks", fast: "Generic international", premium: "International scaled-down" },
  { feature: "Fabric", indus: "Indian mill, 11\u201313.5 oz", fast: "Blended stretch", premium: "Japanese / American selvedge" },
  { feature: "Construction", indus: "12\u201314 SPI, chainstitch", fast: "8\u201310 SPI, lockstitch", premium: "12+ SPI, varies" },
  { feature: "Hardware", indus: "Solid copper", fast: "Zinc alloy", premium: "Varies (often brass)" },
  { feature: "Repair Program", indus: "Yes, built-in", fast: "No", premium: "Limited" },
  { feature: "Responsible Washes", indus: "Ozone / laser / enzyme", fast: "Chemical-heavy", premium: "Varies" },
  { feature: "Made In", indus: "India", fast: "Bangladesh / Vietnam", premium: "Japan / Italy / USA" },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 inline-block text-copper-rivet" fill="currentColor">
      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-monsoon-grey mb-2">
          How we compare
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
          INDUS vs the rest.
        </h2>

        {/* Desktop: table */}
        <div className="hidden md:block max-w-4xl mx-auto rounded-2xl overflow-hidden ring-1 ring-black/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-medium text-gray-500">Feature</th>
                <th className="text-left p-4 font-semibold text-indus-deep bg-indus-deep/5 ring-2 ring-indus-deep/20">
                  <CheckIcon /> INDUS
                </th>
                <th className="text-left p-4 font-medium text-gray-500">Fast Fashion</th>
                <th className="text-left p-4 font-medium text-gray-500">Imported Premium</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="p-4 text-indus-deep font-medium bg-indus-deep/5">{row.indus}</td>
                  <td className="p-4 text-gray-600">{row.fast}</td>
                  <td className="p-4 text-gray-600">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          <div className="rounded-2xl ring-2 ring-copper-rivet bg-indus-deep/5 p-5">
            <h3 className="text-lg font-semibold text-indus-deep mb-4 flex items-center gap-2">
              <CheckIcon /> INDUS
            </h3>
            <dl className="space-y-3">
              {ROWS.map((row) => (
                <div key={row.feature}>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">{row.feature}</dt>
                  <dd className="text-sm font-medium text-gray-900">{row.indus}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl ring-1 ring-black/10 p-5">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Fast Fashion</h3>
            <dl className="space-y-3">
              {ROWS.map((row) => (
                <div key={row.feature}>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">{row.feature}</dt>
                  <dd className="text-sm text-gray-700">{row.fast}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl ring-1 ring-black/10 p-5">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Imported Premium</h3>
            <dl className="space-y-3">
              {ROWS.map((row) => (
                <div key={row.feature}>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">{row.feature}</dt>
                  <dd className="text-sm text-gray-700">{row.premium}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
