import { JeansFlat } from "@/components/product";
import { Container } from "@/components/ui";

const DETAILS = [
  {
    title: "12–14 SPI Stitching",
    desc: "High stitch count for strength.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 20 L8 4 L12 20 L16 4 L20 20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Copper Rivets",
    desc: "Solid copper, salt-spray tested.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    title: "Selvedge Denim",
    desc: "Shuttle-loom woven in India.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    title: "Chainstitched Hems",
    desc: "Signature rope finish after wash.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 12 C4 8, 8 8, 8 12 C8 16, 12 16, 12 12 C12 8, 16 8, 16 12 C16 16, 20 16, 20 12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "3-Prong Shank Button",
    desc: "Copper, hand-set at waistband.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v6M12 15v6" />
      </svg>
    ),
  },
  {
    title: "Bartacked Pockets",
    desc: "Stress-point reinforcement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M6 4v16M10 4v16M14 4v16M18 4v16" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ConstructionDetails() {
  return (
    <section className="py-16 sm:py-20 bg-sand-selvedge">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
          Construction
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep mb-8">
          Built at every seam.
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Mobile: JeansFlat on top */}
          <div className="flex justify-center mb-10 lg:hidden">
            <div className="w-48">
              <JeansFlat variant="front" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {DETAILS.map((d) => (
              <div
                key={d.title}
                className="p-4 rounded-xl bg-white ring-1 ring-black/10"
              >
                <div className="text-indus-deep mb-2">{d.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {d.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop: JeansFlat on right */}
          <div className="hidden lg:flex justify-center">
            <div className="w-64">
              <JeansFlat variant="front" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
