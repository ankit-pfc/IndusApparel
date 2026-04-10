export function TypographySpecimen() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm text-gray-600">
          Headlines — Humanist Serif (eg. Spectral)
        </div>
        <div className="mt-2 text-4xl font-semibold tracking-wide">
          INDUS Apparels — Modern Denim. Indian Origin.
        </div>
        <div className="mt-4 text-2xl font-semibold">
          Born by the River. Built for the Road.
        </div>
      </div>
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm text-gray-600">Body — Clean Sans (eg. Inter)</div>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          Precision fits for Indian morphology, lower-impact wash recipes, and
          construction standards that prioritise longevity. Made in India. Worn
          everywhere.
        </p>
        <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
          <li>12–14 SPI seams &bull; chainstitched hems</li>
          <li>Copper rivets &bull; 3-prong button &bull; YKK zip</li>
          <li>Reinforced pocket bags &bull; repair-first culture</li>
        </ul>
      </div>
    </div>
  );
}
