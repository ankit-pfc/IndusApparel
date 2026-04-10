export function Seal() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <defs>
        <linearGradient id="copper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C08457" />
          <stop offset="100%" stopColor="#8A5A28" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#copper)" stroke="#5b3a16" strokeWidth="2" />
      <path
        d="M20 50 C 35 30, 65 70, 80 50"
        fill="none"
        stroke="#f5f3ef"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <text x="50" y="92" textAnchor="middle" fontSize="10" fill="#f5f3ef" fontFamily="sans-serif">
        INDUS
      </text>
    </svg>
  );
}
