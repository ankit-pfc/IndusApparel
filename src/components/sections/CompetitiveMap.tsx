const peers = [
  { name: "Snitch", x: 32, y: 38 },
  { name: "Andamen", x: 72, y: 78 },
  { name: "Bombay Shirt Co.", x: 65, y: 70 },
  { name: "Pant Project", x: 58, y: 62 },
  { name: "INDUS", x: 60, y: 82 },
];

export function CompetitiveMap() {
  return (
    <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
      <div className="flex items-end justify-between mb-2">
        <div>
          <div className="text-xs text-gray-500">Perceptual Map</div>
          <div className="text-lg font-semibold">
            Positioning vs New-age Indian D2C
          </div>
        </div>
        <div className="text-xs text-gray-500">Craft/Heritage &uarr; &bull; Price &rarr;</div>
      </div>
      <svg viewBox="0 0 100 60" className="w-full h-56">
        <rect x="0" y="0" width="100" height="60" fill="#f9fafb" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 10}
            y1={0}
            x2={i * 10}
            y2={60}
            stroke="#e5e7eb"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 10}
            x2={100}
            y2={i * 10}
            stroke="#e5e7eb"
          />
        ))}
        {peers.map((p) => (
          <g key={p.name}>
            <circle
              cx={p.x}
              cy={60 - p.y * 0.6}
              r={p.name === "INDUS" ? 3.6 : 2.8}
              fill={p.name === "INDUS" ? "#112B4A" : "#6b7280"}
            />
            <text
              x={p.x + 1.8}
              y={60 - p.y * 0.6 - 1.2}
              fontSize="3"
              fill="#111827"
            >
              {p.name}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-3 text-sm text-gray-700">
        INDUS targets <strong>accessible-premium</strong> price with a stronger{" "}
        <strong>craft/heritage</strong> story (Indus origin, construction
        discipline) than most fast-turn fashion peers. This supports durable
        positioning alongside tailoring-led brands.
      </p>
    </div>
  );
}
