export function PackagingSystem() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Swing tag */}
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Swing Tag — Front/Back</div>
        <div className="grid grid-cols-2 gap-4">
          <svg viewBox="0 0 200 320" className="w-full h-72">
            <rect width="200" height="320" rx="10" fill="#E9E2D8" stroke="#d1caba" />
            <circle cx="100" cy="24" r="6" fill="#8A5A28" />
            <text
              x="100"
              y="160"
              textAnchor="middle"
              fontFamily="serif"
              fontWeight="700"
              fontSize="36"
              fill="#112B4A"
              letterSpacing="4"
            >
              INDUS
            </text>
            <text
              x="100"
              y="190"
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize="10"
              fill="#4B5563"
            >
              Indigo, from India
            </text>
          </svg>
          <svg viewBox="0 0 200 320" className="w-full h-72">
            <rect width="200" height="320" rx="10" fill="#ffffff" stroke="#d1d5db" />
            <text x="20" y="40" fontFamily="sans-serif" fontSize="10" fill="#6b7280">STYLE</text>
            <text x="20" y="60" fontFamily="monospace" fontSize="12" fill="#111827">IND-MJ-ST-101</text>
            <text x="20" y="90" fontFamily="sans-serif" fontSize="10" fill="#6b7280">FABRIC</text>
            <text x="20" y="110" fontFamily="sans-serif" fontSize="12" fill="#111827">Core Stretch 11.5 oz</text>
            <text x="20" y="140" fontFamily="sans-serif" fontSize="10" fill="#6b7280">WASH</text>
            <text x="20" y="160" fontFamily="sans-serif" fontSize="12" fill="#111827">Rinse Indigo</text>
            <text x="20" y="200" fontFamily="sans-serif" fontSize="10" fill="#6b7280">MRP</text>
            <text x="20" y="220" fontFamily="sans-serif" fontSize="14" fill="#111827">&#8377;2,999</text>
            <text x="20" y="260" fontFamily="sans-serif" fontSize="10" fill="#6b7280">MADE IN INDIA</text>
            <rect x="130" y="220" width="50" height="50" fill="#E5E7EB" stroke="#D1D5DB" />
          </svg>
        </div>
      </div>

      {/* Back patch */}
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Back Patch — Veg Tan / Jacron</div>
        <svg viewBox="0 0 380 220" className="w-full h-56">
          <defs>
            <linearGradient id="leather" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#cfa175" />
              <stop offset="100%" stopColor="#a97943" />
            </linearGradient>
          </defs>
          <rect
            x="10"
            y="10"
            width="360"
            height="200"
            rx="8"
            fill="url(#leather)"
            stroke="#6b4a2b"
            strokeWidth="2"
          />
          <text
            x="190"
            y="120"
            textAnchor="middle"
            fontFamily="serif"
            fontSize="48"
            fontWeight="700"
            fill="#3a2a1a"
            letterSpacing="6"
          >
            INDUS
          </text>
          <path
            d="M60 150 C 120 120, 260 180, 320 150"
            stroke="#3a2a1a"
            strokeWidth="6"
            fill="none"
            opacity="0.6"
          />
          <text
            x="190"
            y="170"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="10"
            fill="#3a2a1a"
          >
            born by the river &bull; built for the road
          </text>
        </svg>
      </div>

      {/* Woven label */}
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Woven Main Label</div>
        <svg viewBox="0 0 400 160" className="w-full h-44">
          <rect x="10" y="10" width="380" height="140" rx="6" fill="#E9E2D8" stroke="#cfc7bd" />
          <text
            x="200"
            y="95"
            textAnchor="middle"
            fontFamily="serif"
            fontWeight="700"
            fontSize="48"
            fill="#112B4A"
            letterSpacing="6"
          >
            INDUS
          </text>
          <text
            x="200"
            y="55"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="10"
            fill="#6b7280"
          >
            INDIA &bull; ORIGIN &bull; DENIM
          </text>
        </svg>
      </div>
    </div>
  );
}
