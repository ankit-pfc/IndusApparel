export function JeansFlat({
  variant = "front",
  tone = "#1a3350",
}: {
  variant?: "front" | "back";
  tone?: string;
}) {
  return (
    <svg viewBox="0 0 320 540" className="w-full h-auto">
      <defs>
        <linearGradient id="dgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={tone} />
          <stop offset="100%" stopColor="#0f2134" />
        </linearGradient>
        <pattern
          id="denimTex"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="6" height="6" fill="url(#dgrad)" />
          <rect x="0" y="0" width="6" height="1" fill="#ffffff10" />
          <rect x="0" y="3" width="6" height="1" fill="#00000012" />
        </pattern>
      </defs>
      <path
        d="M110 20 L210 20 L230 60 L240 500 L80 500 L90 60 Z"
        fill="url(#denimTex)"
        stroke="#0b1623"
        strokeWidth="2"
      />
      {/* waistband */}
      <rect x="110" y="20" width="100" height="16" fill="#0e2134" stroke="#0b1623" />
      {/* fly */}
      {variant === "front" && (
        <path
          d="M160 36 L170 90 L160 160"
          stroke="#8A5A28"
          strokeDasharray="3 2"
          fill="none"
        />
      )}
      {/* side seams */}
      <path d="M90 60 L80 500" stroke="#8A5A28" strokeDasharray="3 2" />
      <path d="M230 60 L240 500" stroke="#8A5A28" strokeDasharray="3 2" />
      {/* hem chainstitch */}
      <path d="M80 500 L240 500" stroke="#8A5A28" strokeDasharray="2 2" />
      {/* pockets */}
      {variant === "front" ? (
        <g>
          <rect x="102" y="72" width="44" height="32" rx="4" fill="#0f2540" stroke="#8A5A28" />
          <rect x="176" y="72" width="44" height="32" rx="4" fill="#0f2540" stroke="#8A5A28" />
          <rect x="186" y="78" width="24" height="18" rx="3" fill="#0d2238" stroke="#8A5A28" />
          {[
            { x: 102, y: 72 },
            { x: 146, y: 72 },
            { x: 176, y: 72 },
            { x: 220, y: 72 },
            { x: 186, y: 78 },
            { x: 210, y: 78 },
          ].map((r, i) => (
            <circle key={i} cx={r.x} cy={r.y} r={3} fill="#8A5A28" />
          ))}
        </g>
      ) : (
        <g>
          <path d="M110 60 L210 60 L200 90 L120 90 Z" fill="#0d2238" stroke="#8A5A28" />
          <path d="M112 120 L156 120 L150 170 L118 170 Z" fill="#0f2540" stroke="#8A5A28" />
          <path d="M214 120 L170 120 L176 170 L208 170 Z" fill="#0f2540" stroke="#8A5A28" />
          <circle cx="150" cy="170" r="2" fill="#8A5A28" />
          <circle cx="176" cy="170" r="2" fill="#8A5A28" />
          <rect x="195" y="26" width="48" height="16" fill="#a97943" stroke="#6b4a2b" />
        </g>
      )}
    </svg>
  );
}
