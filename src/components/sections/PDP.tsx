export function PDP() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
        <div className="h-80 bg-gradient-to-br from-[#0f2134] to-[#1a3350] relative">
          <div className="absolute right-4 top-4 bg-white/90 text-xs px-2 py-1 rounded">
            Rinse Indigo
          </div>
          <div className="absolute bottom-4 left-4 text-white text-sm">
            Selvedge rail &bull; chainstitched hem
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-16 rounded bg-gradient-to-br from-[#1a3350] to-[#2a4a77]"
            />
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <div className="text-xs font-mono text-gray-500">IND-MJ-ST-101</div>
        <h3 className="text-2xl font-semibold">Core Slim Taper — Rinse</h3>
        <div className="mt-1 text-gray-600">
          Sindhu Core Stretch 11.5 oz &bull; Mid-rise &bull; Hem 14–15 cm
        </div>
        <div className="mt-3 text-2xl font-bold">&#8377;2,999</div>
        <div className="mt-4">
          <div className="text-sm font-medium">Select Size</div>
          <div className="mt-2 grid grid-cols-8 gap-2">
            {["28", "29", "30", "31", "32", "33", "34", "36"].map((s) => (
              <button
                key={s}
                className="py-2 rounded-md ring-1 ring-gray-300 hover:ring-gray-900 text-sm"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-medium">Length</div>
          <div className="mt-2 flex gap-2">
            {["30", "32", "34"].map((l) => (
              <button
                key={l}
                className="px-3 py-2 rounded-md ring-1 ring-gray-300 hover:ring-gray-900 text-sm"
              >
                L{l}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-5 text-sm text-gray-700 list-disc ml-5">
          <li>12–14 SPI seams, chainstitched hems</li>
          <li>Copper rivets, YKK zipper, reinforced pockets</li>
          <li>Lower-impact rinse; repair-first guarantee</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-[#112B4A] text-white">
            Add to Cart
          </button>
          <button className="px-4 py-2 rounded-lg ring-1 ring-gray-300">
            Size &amp; Fit Guide
          </button>
        </div>
      </div>
    </div>
  );
}
