import { AttributeBadge, Callout, JeansFlat } from "@/components/product";

export function ProductMockups() {
  return (
    <div className="grid xl:grid-cols-[1.3fr,1fr] gap-8">
      {/* Left: Detailed Flat with callouts */}
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs font-mono text-gray-500">IND-MJ-ST-101</div>
            <div className="text-lg font-semibold">Core Slim Taper — Rinse</div>
            <div className="text-sm text-gray-600">
              Sindhu Core Stretch 11.5 oz &bull; Mid-rise &bull; Hem 14–15 cm
            </div>
          </div>
          <div className="text-lg font-bold">&#8377;2,999</div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <svg viewBox="0 0 320 540" className="w-full h-auto">
              <JeansFlat variant="front" />
              <Callout
                x={110}
                y={85}
                title="Rivet Reinforcement"
                desc="Aged-copper rivets at stress points."
                side="right"
                dy={-14}
              />
              <Callout
                x={170}
                y={140}
                title="Secure Fly"
                desc="Lockstitch + bartack base for durability."
                side="right"
                dy={18}
              />
              <Callout
                x={205}
                y={86}
                title="Coin Pocket"
                desc="River-line stitch ID; tight construction."
                side="right"
                dy={46}
              />
              <Callout
                x={160}
                y={500}
                title="Chainstitched Hem"
                desc="Union-style chain for strong cuff fades."
                side="left"
                dy={0}
              />
            </svg>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <AttributeBadge label="Fabric" value="11.5 oz Core Stretch" />
              <AttributeBadge label="Composition" value="98% CO / 2% EL" />
              <AttributeBadge label="Stitch Density" value="12–14 SPI" />
              <AttributeBadge label="Hardware" value="Copper rivets, 3-prong button" />
              <AttributeBadge label="Rise" value="Mid" />
              <AttributeBadge label="Hem" value="14–15 cm" />
              <AttributeBadge label="Care" value="Cold wash, line dry" />
              <AttributeBadge label="Warranty" value="6-month workmanship" />
            </div>
            <div className="mt-6 text-sm text-gray-700">
              Lower-impact <strong>Rinse Indigo</strong>: laser whiskers avoided;
              soft resin + enzyme for hand. Pocket bags in 100% cotton
              (double-layer front).
            </div>
          </div>
        </div>
      </div>

      {/* Right: Back view & materials */}
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Back View &amp; Materials</div>
        <div className="rounded-xl ring-1 ring-black/10 overflow-hidden">
          <svg viewBox="0 0 320 540" className="w-full h-auto bg-white">
            <JeansFlat variant="back" />
            <Callout
              x={205}
              y={40}
              title="Patch"
              desc="Veg-tan / jacron with debossed river-line."
              side="right"
              dy={0}
            />
            <Callout
              x={138}
              y={160}
              title="Hidden Rivets"
              desc="Back pocket durability without visible rivets."
              side="left"
              dy={-8}
            />
            <Callout
              x={200}
              y={94}
              title="Back Yoke"
              desc="Shaped yoke for seat contouring."
              side="right"
              dy={20}
            />
          </svg>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <AttributeBadge label="Pocket Bags" value="100% Cotton, double layer" />
          <AttributeBadge label="Thread" value="Core-spun poly" />
          <AttributeBadge label="Zipper" value="YKK#5" />
          <AttributeBadge label="Labels" value="Oeko-Tex substrates" />
        </div>
      </div>
    </div>
  );
}
