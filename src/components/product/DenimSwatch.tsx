export function DenimSwatch({ name, stops }: { name: string; stops: string[] }) {
  const id = name.replace(/\s+/g, "");
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 120 80"
        className="w-28 h-20 rounded-xl shadow-sm ring-1 ring-black/10"
      >
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={stops[0]} />
            <stop offset="100%" stopColor={stops[1]} />
          </linearGradient>
          <pattern
            id={`weave-${id}`}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="6" height="6" fill={`url(#g-${id})`} />
            <rect x="0" y="0" width="6" height="1" fill="#ffffff10" />
            <rect x="0" y="3" width="6" height="1" fill="#00000010" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="120" height="80" fill={`url(#weave-${id})`} />
        {/* Selvedge ID */}
        <rect x="103" y="0" width="4" height="80" fill="#e5e7eb" />
        <rect x="107" y="0" width="4" height="80" fill="#ef4444" />
      </svg>
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-500">Denim weave mock &bull; Selvedge ID</div>
      </div>
    </div>
  );
}
