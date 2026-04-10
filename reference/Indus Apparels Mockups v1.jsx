import React from "react";

// Board-ready single-file mockups for Indus Apparels
// Tailwind required. All assets are vector/SVG so this renders self-contained.

// —— Brand Constants
const Palette = [
  { name: "Indus Deep", hex: "#112B4A" },
  { name: "River Clay", hex: "#B25E3C" },
  { name: "Copper Rivet", hex: "#8A5A28" },
  { name: "Sand Selvedge", hex: "#E9E2D8" },
  { name: "Monsoon Grey", hex: "#4C566A" },
];

const Fits = [
  { code: "ST", name: "Slim Taper", hem: "14–15 cm", rise: "Mid", desc: "Clean thigh, narrow hem. Office-to-street." },
  { code: "AT", name: "Athletic Taper", hem: "15–16.5 cm", rise: "Mid", desc: "Room in seat/thigh; tapered hem." },
  { code: "SR", name: "Straight", hem: "17–18 cm", rise: "Mid", desc: "Balanced knee to hem. Classic profile." },
  { code: "RS", name: "Relaxed Straight", hem: "18–20 cm", rise: "Mid", desc: "Eased top block; straight leg." },
  { code: "SV", name: "Selvedge Slim", hem: "14–15 cm", rise: "Mid", desc: "Shuttle-loom selvedge; narrow hem." },
  { code: "CU", name: "Carpenter", hem: "18–19 cm", rise: "Mid", desc: "Utility loop + tool pocket." },
];

const Skus = [
  { sku: "IND-MJ-ST-101", name: "Core Slim Taper — Rinse", price: 2999, fabric: "Core Stretch 11.5 oz", wash: "Rinse Indigo", color: "#1b3252" },
  { sku: "IND-MJ-ST-102", name: "Core Slim Taper — Mid Fade (Eco)", price: 3299, fabric: "Core Stretch 12 oz", wash: "Mid Indigo", color: "#2a4a77" },
  { sku: "IND-MJ-AT-111", name: "Athletic Taper — Dark Rinse", price: 3499, fabric: "Core Stretch 12.5 oz", wash: "Dark Rinse", color: "#132538" },
  { sku: "IND-MJ-SR-121", name: "Straight — Copper Rigid", price: 3299, fabric: "Rigid 12.5 oz", wash: "Copper Rinse", color: "#263f5f" },
  { sku: "IND-MJ-LT-141", name: "802 Summer Taper — Ecru", price: 2999, fabric: "Terracotta Ecru 11 oz", wash: "Undyed/Ecru", color: "#e9e2d8" },
  { sku: "IND-MJ-SV-171", name: "Dholavira Selvedge — Slim", price: 6999, fabric: "Selvedge 13.5 oz", wash: "Raw", color: "#0e2134" },
];

const Washes = [
  { name: "Rinse Indigo", stops: ["#0f2134", "#1a3350"] },
  { name: "Dark Rinse", stops: ["#0a1724", "#132538"] },
  { name: "Mid Indigo (Eco)", stops: ["#1b3c66", "#325b8f"] },
  { name: "Storm Grey", stops: ["#3f4859", "#6b7280"] },
  { name: "Overdyed Black", stops: ["#0b0f13", "#1f2937"] },
  { name: "Ecru (Undyed)", stops: ["#efe9df", "#d9d2c8"] },
  { name: "Copper Rigid", stops: ["#1a2e4a", "#2f4b71"] },
];

// —— UI Atoms
function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs ring-1 ring-white/20">{text}</span>
  );
}

function Wordmark({ fg = "#111827" }: { fg?: string }) {
  return (
    <svg viewBox="0 0 420 64" className="w-72 h-12">
      <text x="0" y="48" fontFamily="serif" fontWeight="700" fontSize="56" fill={fg} letterSpacing="4">INDUS</text>
    </svg>
  );
}

function Seal() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <defs>
        <linearGradient id="copper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C08457" />
          <stop offset="100%" stopColor="#8A5A28" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#copper)" stroke="#5b3a16" strokeWidth="2" />
      <path d="M20 50 C 35 30, 65 70, 80 50" fill="none" stroke="#f5f3ef" strokeWidth="6" strokeLinecap="round" />
      <text x="50" y="92" textAnchor="middle" fontSize="10" fill="#f5f3ef" fontFamily="sans-serif">INDUS</text>
    </svg>
  );
}

function RiverLines() {
  return (
    <svg className="absolute inset-0 opacity-30" viewBox="0 0 1200 600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f3b5b" />
          <stop offset="100%" stopColor="#0f2134" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#river)" />
      <path d="M0 400 C 200 360, 400 440, 600 400 C 800 360, 1000 440, 1200 400" stroke="#ffffff10" strokeWidth="40" fill="none" />
      <path d="M0 470 C 200 430, 400 510, 600 470 C 800 430, 1000 510, 1200 470" stroke="#ffffff08" strokeWidth="28" fill="none" />
    </svg>
  );
}

function DenimSwatch({ name, stops }: { name: string; stops: string[] }) {
  const id = name.replace(/\s+/g, "");
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 120 80" className="w-28 h-20 rounded-xl shadow-sm ring-1 ring-black/10">
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={stops[0]} />
            <stop offset="100%" stopColor={stops[1]} />
          </linearGradient>
          <pattern id={`weave-${id}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
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
        <div className="text-xs text-gray-500">Denim weave mock • Selvedge ID</div>
      </div>
    </div>
  );
}

// —— Sections
function LogoLockup() {
  return (
    <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
      <div className="p-6 rounded-2xl bg-[#112B4A] text-white relative overflow-hidden">
        <RiverLines />
        <div className="relative z-10">
          <div className="text-sm tracking-[0.35em] uppercase opacity-80">India • Origin • Denim</div>
          <h1 className="mt-2 text-5xl font-semibold tracking-wide">INDUS</h1>
          <p className="mt-2 text-lg opacity-90 max-w-xl">Born by the river. Built for the road. Modern denim from India for India—and the world.</p>
          <div className="mt-6 flex items-center gap-4">
            <Badge text="Est. 2025" />
            <Badge text="Indigo, from India" />
            <Badge text="Responsible Washes" />
          </div>
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <h3 className="text-xl font-semibold">Primary Mark</h3>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Wordmark fg="#112B4A" />
            <span className="text-sm text-gray-600">Wordmark (Serif) on Sand Selvedge</span>
          </div>
          <div className="flex items-center gap-4">
            <Seal />
            <span className="text-sm text-gray-600">Seal Monogram (River-Line) for patches, rivets, and buttons</span>
          </div>
        </div>
        <hr className="my-6" />
        <h4 className="text-sm font-medium text-gray-700">Color System</h4>
        <div className="mt-3 grid grid-cols-5 gap-3">
          {Palette.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-12 rounded-md shadow-sm" style={{ backgroundColor: c.hex }} />
              <div className="text-[10px] text-center leading-tight">
                <div className="font-medium">{c.name}</div>
                <div className="font-mono">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FitIllustration() {
  return (
    <svg viewBox="0 0 90 120" className="w-16 h-20">
      {/* silhouette */}
      <path d="M20 10 L35 10 L40 50 L50 50 L55 10 L70 10 L62 115 L28 115 Z" fill="#e5e7eb" stroke="#9ca3af" />
      {/* stitch lines */}
      <path d="M45 50 L45 115" stroke="#8A5A28" strokeDasharray="3 2" />
      <path d="M28 85 L62 85" stroke="#8A5A28" strokeDasharray="3 2" />
      <circle cx="30" cy="60" r="1.5" fill="#8A5A28" />
      <circle cx="60" cy="60" r="1.5" fill="#8A5A28" />
    </svg>
  );
}

function FitCard({ fit }: any) {
  return (
    <div className="p-4 bg-white rounded-xl ring-1 ring-black/10">
      <div className="flex items-start gap-4">
        <FitIllustration />
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500">{fit.code}</div>
          <div className="text-lg font-semibold">{fit.name}</div>
          <div className="text-sm text-gray-600">Hem: {fit.hem} • Rise: {fit.rise}</div>
          <p className="mt-1 text-sm text-gray-700">{fit.desc}</p>
        </div>
      </div>
    </div>
  );
}

function SkuCard({ item }: any) {
  const isLight = (() => {
    const c = item.color.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const l = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return l > 0.75;
  })();
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
      <div className="h-40 relative" style={{ background: item.color }}>
        <div className={`absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded ${isLight ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-900'}`}>{item.wash}</div>
        {/* Selvedge rail indicator */}
        <div className="absolute right-3 top-3 bottom-3 w-1.5 bg-white/90" />
        <div className="absolute right-3 top-3 bottom-3 w-0.5 bg-red-500" />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 font-mono">{item.sku}</div>
        <div className="text-base font-semibold">{item.name}</div>
        <div className="text-sm text-gray-700">{item.fabric}</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">₹{item.price.toLocaleString()}</div>
          <div className="text-xs text-gray-500">28–40 • L30/32/34</div>
        </div>
      </div>
    </div>
  );
}

function TypographySpecimen() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm text-gray-600">Headlines — Humanist Serif (eg. Spectral)</div>
        <div className="mt-2 text-4xl font-semibold tracking-wide">INDUS Apparels — Modern Denim. Indian Origin.</div>
        <div className="mt-4 text-2xl font-semibold">Born by the River. Built for the Road.</div>
      </div>
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm text-gray-600">Body — Clean Sans (eg. Inter)</div>
        <p className="mt-2 text-sm leading-6 text-gray-700">Precision fits for Indian morphology, lower‑impact wash recipes, and construction standards that prioritise longevity. Made in India. Worn everywhere.</p>
        <ul className="mt-3 text-sm text-gray-700 list-disc ml-5">
          <li>12–14 SPI seams • chainstitched hems</li>
          <li>Copper rivets • 3‑prong button • YKK zip</li>
          <li>Reinforced pocket bags • repair‑first culture</li>
        </ul>
      </div>
    </div>
  );
}

function PackagingSystem() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Swing tag */}
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Swing Tag — Front/Back</div>
        <div className="grid grid-cols-2 gap-4">
          <svg viewBox="0 0 200 320" className="w-full h-72">
            <rect width="200" height="320" rx="10" fill="#E9E2D8" stroke="#d1caba" />
            <circle cx="100" cy="24" r="6" fill="#8A5A28" />
            <text x="100" y="160" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="36" fill="#112B4A" letterSpacing="4">INDUS</text>
            <text x="100" y="190" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#4B5563">Indigo, from India</text>
          </svg>
          <svg viewBox="0 0 200 320" className="w-full h-72">
            <rect width="200" height="320" rx="10" fill="#ffffff" stroke="#d1d5db" />
            <text x="20" y="40" fontFamily="sans-serif" fontSize="10" fill="#6b7280">STYLE</text>
            <text x="20" y="60" fontFamily="mono" fontSize="12" fill="#111827">IND-MJ-ST-101</text>
            <text x="20" y="90" fontFamily="sans-serif" fontSize="10" fill="#6b7280">FABRIC</text>
            <text x="20" y="110" fontFamily="sans-serif" fontSize="12" fill="#111827">Core Stretch 11.5 oz</text>
            <text x="20" y="140" fontFamily="sans-serif" fontSize="10" fill="#6b7280">WASH</text>
            <text x="20" y="160" fontFamily="sans-serif" fontSize="12" fill="#111827">Rinse Indigo</text>
            <text x="20" y="200" fontFamily="sans-serif" fontSize="10" fill="#6b7280">MRP</text>
            <text x="20" y="220" fontFamily="sans-serif" fontSize="14" fill="#111827">₹2,999</text>
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
          <rect x="10" y="10" width="360" height="200" rx="8" fill="url(#leather)" stroke="#6b4a2b" strokeWidth="2" />
          <text x="190" y="120" textAnchor="middle" fontFamily="serif" fontSize="48" fontWeight="700" fill="#3a2a1a" letterSpacing="6">INDUS</text>
          <path d="M60 150 C 120 120, 260 180, 320 150" stroke="#3a2a1a" strokeWidth="6" fill="none" opacity="0.6" />
          <text x="190" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#3a2a1a">born by the river • built for the road</text>
        </svg>
      </div>

      {/* Woven label */}
      <div className="p-6 rounded-xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Woven Main Label</div>
        <svg viewBox="0 0 400 160" className="w-full h-44">
          <rect x="10" y="10" width="380" height="140" rx="6" fill="#E9E2D8" stroke="#cfc7bd" />
          <text x="200" y="95" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="48" fill="#112B4A" letterSpacing="6">INDUS</text>
          <text x="200" y="55" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280">INDIA • ORIGIN • DENIM</text>
        </svg>
      </div>
    </div>
  );
}

function PDP() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
        <div className="h-80 bg-gradient-to-br from-[#0f2134] to-[#1a3350] relative">
          <div className="absolute right-4 top-4 bg-white/90 text-xs px-2 py-1 rounded">Rinse Indigo</div>
          <div className="absolute bottom-4 left-4 text-white text-sm">Selvedge rail • chainstitched hem</div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 rounded bg-gradient-to-br from-[#1a3350] to-[#2a4a77]" />
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <div className="text-xs font-mono text-gray-500">IND-MJ-ST-101</div>
        <h3 className="text-2xl font-semibold">Core Slim Taper — Rinse</h3>
        <div className="mt-1 text-gray-600">Sindhu Core Stretch 11.5 oz • Mid-rise • Hem 14–15 cm</div>
        <div className="mt-3 text-2xl font-bold">₹2,999</div>
        <div className="mt-4">
          <div className="text-sm font-medium">Select Size</div>
          <div className="mt-2 grid grid-cols-8 gap-2">
            {["28","29","30","31","32","33","34","36"].map((s) => (
              <button key={s} className="py-2 rounded-md ring-1 ring-gray-300 hover:ring-gray-900 text-sm">{s}</button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-medium">Length</div>
          <div className="mt-2 flex gap-2">
            {["30","32","34"].map((l) => (
              <button key={l} className="px-3 py-2 rounded-md ring-1 ring-gray-300 hover:ring-gray-900 text-sm">L{l}</button>
            ))}
          </div>
        </div>
        <ul className="mt-5 text-sm text-gray-700 list-disc ml-5">
          <li>12–14 SPI seams, chainstitched hems</li>
          <li>Copper rivets, YKK zipper, reinforced pockets</li>
          <li>Lower‑impact rinse; repair-first guarantee</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-[#112B4A] text-white">Add to Cart</button>
          <button className="px-4 py-2 rounded-lg ring-1 ring-gray-300">Size & Fit Guide</button>
        </div>
      </div>
    </div>
  );
}

function WholesaleLineSheet() {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/10 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500 font-mono">AW ’25 Core</div>
          <div className="text-lg font-semibold">Indus — Wholesale Line Sheet (Men’s)</div>
        </div>
        <Wordmark fg="#112B4A" />
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              {[
                "SKU","Style","Fit","Fabric/Oz","Wash","Sizes","MRP (INR)","Wholesale (INR)","MOQ","Lead"
              ].map(h => (
                <th key={h} className="px-4 py-2 text-left whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Skus.map((s) => (
              <tr key={s.sku} className="border-t">
                <td className="px-4 py-2 font-mono text-gray-700">{s.sku}</td>
                <td className="px-4 py-2">{s.name}</td>
                <td className="px-4 py-2">{s.name.includes("Slim") ? "Slim" : s.name.includes("Taper") ? "Taper" : s.name.includes("Straight") ? "Straight" : "N/A"}</td>
                <td className="px-4 py-2">{s.fabric}</td>
                <td className="px-4 py-2">{s.wash}</td>
                <td className="px-4 py-2">28–40 / L30/32/34</td>
                <td className="px-4 py-2">₹{s.price.toLocaleString()}</td>
                <td className="px-4 py-2">₹{Math.round(s.price * 0.55).toLocaleString()}</td>
                <td className="px-4 py-2">300</td>
                <td className="px-4 py-2">60–75 days</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CompetitiveMap() {
  // Simple perceptual map vs Indian D2C peers
  // Axes: Price (Low→High), Craft/Heritage (Low→High)
  const peers = [
    { name: "Snitch", x: 32, y: 38 },
    { name: "Andamen", x: 72, y: 78 },
    { name: "Bombay Shirt Co.", x: 65, y: 70 },
    { name: "Pant Project", x: 58, y: 62 },
    { name: "INDUS", x: 60, y: 82 },
  ];
  return (
    <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
      <div className="flex items-end justify-between mb-2">
        <div>
          <div className="text-xs text-gray-500">Perceptual Map</div>
          <div className="text-lg font-semibold">Positioning vs New-age Indian D2C</div>
        </div>
        <div className="text-xs text-gray-500">Craft/Heritage ↑ • Price →</div>
      </div>
      <svg viewBox="0 0 100 60" className="w-full h-56">
        <rect x="0" y="0" width="100" height="60" fill="#f9fafb" />
        {/* grid */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={i * 10} y1={0} x2={i * 10} y2={60} stroke="#e5e7eb" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={0} y1={i * 10} x2={100} y2={i * 10} stroke="#e5e7eb" />
        ))}
        {peers.map((p) => (
          <g key={p.name}>
            <circle cx={p.x} cy={60 - (p.y * 0.6)} r={p.name === "INDUS" ? 3.6 : 2.8} fill={p.name === "INDUS" ? "#112B4A" : "#6b7280"} />
            <text x={p.x + 1.8} y={60 - (p.y * 0.6) - 1.2} fontSize="3" fill="#111827">{p.name}</text>
          </g>
        ))}
      </svg>
      <p className="mt-3 text-sm text-gray-700">INDUS targets <strong>accessible‑premium</strong> price with a stronger <strong>craft/heritage</strong> story (Indus origin, construction discipline) than most fast‑turn fashion peers. This supports durable positioning alongside tailoring‑led brands.</p>
    </div>
  );
}

function WashLibrary() {
  return (
    <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
      <div className="text-lg font-semibold mb-4">Wash Library (Lower‑impact Targets)</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Washes.map((w) => (
          <DenimSwatch key={w.name} name={w.name} stops={w.stops} />
        ))}
      </div>
    </div>
  );
}

// —————————————————————————————————————
// PRODUCT MOCKUPS & FEATURE HIGHLIGHTS
// —————————————————————————————————————

function AttributeBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-2 rounded-lg bg-white ring-1 ring-black/10 text-xs">
      <div className="text-[10px] uppercase tracking-widest text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function Callout({ x, y, title, desc, side = 'right', dy = 0 }: { x: number; y: number; title: string; desc: string; side?: 'left' | 'right'; dy?: number }) {
  // Non-overlapping callout: place label box to fixed side with optional vertical offset
  const boxW = 180; const boxH = 48;
  const lineDx = side === 'right' ? 18 : -18;
  const boxX = side === 'right' ? x + lineDx + 4 : x + lineDx - boxW - 4;
  const boxY = y - boxH / 2 + dy;
  return (
    <g>
      <circle cx={x} cy={y} r={3} fill="#8A5A28" />
      <line x1={x} y1={y} x2={x + lineDx} y2={y - 12} stroke="#8A5A28" strokeWidth={1.5} />
      <foreignObject x={boxX} y={boxY} width={boxW} height={boxH}>
        <div className="bg-white/95 backdrop-blur rounded-md px-2 py-1 ring-1 ring-black/10">
          <div className="text-[10px] font-semibold text-gray-900">{title}</div>
          <div className="text-[10px] text-gray-600 leading-tight">{desc}</div>
        </div>
      </foreignObject>
    </g>
  );
}

function JeansFlat({ variant = "front", tone = "#1a3350" }: { variant?: "front" | "back"; tone?: string }) {
  // SVG flat with stitch + pocket details
  return (
    <svg viewBox="0 0 320 540" className="w-full h-auto">
      {/* base */}
      <defs>
        <linearGradient id="dgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={tone} />
          <stop offset="100%" stopColor="#0f2134" />
        </linearGradient>
        <pattern id="denimTex" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="url(#dgrad)" />
          <rect x="0" y="0" width="6" height="1" fill="#ffffff10" />
          <rect x="0" y="3" width="6" height="1" fill="#00000012" />
        </pattern>
      </defs>
      <path d="M110 20 L210 20 L230 60 L240 500 L80 500 L90 60 Z" fill="url(#denimTex)" stroke="#0b1623" strokeWidth="2"/>
      {/* waistband */}
      <rect x="110" y="20" width="100" height="16" fill="#0e2134" stroke="#0b1623" />
      {/* fly */}
      {variant === 'front' && <path d="M160 36 L170 90 L160 160" stroke="#8A5A28" strokeDasharray="3 2" fill="none"/>}
      {/* side seams */}
      <path d="M90 60 L80 500" stroke="#8A5A28" strokeDasharray="3 2" />
      <path d="M230 60 L240 500" stroke="#8A5A28" strokeDasharray="3 2" />
      {/* hem chainstitch */}
      <path d="M80 500 L240 500" stroke="#8A5A28" strokeDasharray="2 2" />
      {/* pockets */}
      {variant === 'front' ? (
        <g>
          <rect x="102" y="72" width="44" height="32" rx="4" fill="#0f2540" stroke="#8A5A28" />
          <rect x="176" y="72" width="44" height="32" rx="4" fill="#0f2540" stroke="#8A5A28" />
          {/* coin pocket */}
          <rect x="186" y="78" width="24" height="18" rx="3" fill="#0d2238" stroke="#8A5A28" />
          {/* rivets */}
          {[{x:102,y:72},{x:146,y:72},{x:176,y:72},{x:220,y:72},{x:186,y:78},{x:210,y:78}].map((r,i)=>(<circle key={i} cx={r.x} cy={r.y} r={3} fill="#8A5A28" />))}
        </g>
      ) : (
        <g>
          {/* back yoke */}
          <path d="M110 60 L210 60 L200 90 L120 90 Z" fill="#0d2238" stroke="#8A5A28" />
          {/* back pockets */}
          <path d="M112 120 L156 120 L150 170 L118 170 Z" fill="#0f2540" stroke="#8A5A28" />
          <path d="M214 120 L170 120 L176 170 L208 170 Z" fill="#0f2540" stroke="#8A5A28" />
          {/* hidden rivets hint */}
          <circle cx="150" cy="170" r="2" fill="#8A5A28" />
          <circle cx="176" cy="170" r="2" fill="#8A5A28" />
          {/* patch */}
          <rect x="195" y="26" width="48" height="16" fill="#a97943" stroke="#6b4a2b" />
        </g>
      )}
    </svg>
  );
}

function ProductMockups() {
  return (
    <div className="grid xl:grid-cols-[1.3fr,1fr] gap-8">
      {/* Left: Detailed Flat with callouts */}
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs font-mono text-gray-500">IND-MJ-ST-101</div>
            <div className="text-lg font-semibold">Core Slim Taper — Rinse</div>
            <div className="text-sm text-gray-600">Sindhu Core Stretch 11.5 oz • Mid-rise • Hem 14–15 cm</div>
          </div>
          <div className="text-lg font-bold">₹2,999</div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <svg viewBox="0 0 320 540" className="w-full h-auto">
              {/* embed front flat */}
              <JeansFlat variant="front" />
              <Callout x={110} y={85} title="Rivet Reinforcement" desc="Aged‑copper rivets at stress points." side="right" dy={-14} />
              <Callout x={170} y={140} title="Secure Fly" desc="Lockstitch + bartack base for durability." side="right" dy={18} />
              <Callout x={205} y={86} title="Coin Pocket" desc="River‑line stitch ID; tight construction." side="right" dy={46} />
              <Callout x={160} y={500} title="Chainstitched Hem" desc="Union‑style chain for strong cuff fades." side="left" dy={0} />
            </svg>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <AttributeBadge label="Fabric" value="11.5 oz Core Stretch" />
              <AttributeBadge label="Composition" value="98% CO / 2% EL" />
              <AttributeBadge label="Stitch Density" value="12–14 SPI" />
              <AttributeBadge label="Hardware" value="Copper rivets, 3‑prong button" />
              <AttributeBadge label="Rise" value="Mid" />
              <AttributeBadge label="Hem" value="14–15 cm" />
              <AttributeBadge label="Care" value="Cold wash, line dry" />
              <AttributeBadge label="Warranty" value="6‑month workmanship" />
            </div>
            <div className="mt-6 text-sm text-gray-700">
              Lower‑impact <strong>Rinse Indigo</strong>: laser whiskers avoided; soft resin + enzyme for hand. Pocket bags in 100% cotton (double‑layer front).
            </div>
          </div>
        </div>
      </div>

      {/* Right: Back view + materials */}
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <div className="text-sm font-semibold mb-3">Back View & Materials</div>
        <div className="rounded-xl ring-1 ring-black/10 overflow-hidden">
          <svg viewBox="0 0 320 540" className="w-full h-auto bg-white">
            <JeansFlat variant="back" />
            <Callout x={205} y={40} title="Patch" desc="Veg‑tan / jacron with debossed river‑line." side="right" dy={0} />
            <Callout x={138} y={160} title="Hidden Rivets" desc="Back pocket durability without visible rivets." side="left" dy={-8} />
            <Callout x={200} y={94} title="Back Yoke" desc="Shaped yoke for seat contouring." side="right" dy={20} />
          </svg>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <AttributeBadge label="Pocket Bags" value="100% Cotton, double layer" />
          <AttributeBadge label="Thread" value="Core‑spun poly" />
          <AttributeBadge label="Zipper" value="YKK#5" />
          <AttributeBadge label="Labels" value="Oeko‑Tex substrates" />
        </div>
      </div>
    </div>
  );
}

function FeatureTiles() {
  const tiles = [
    { title: "India‑first Fit Blocks", desc: "Graded rises & hems for Indian morphology.", icon: "M4 12h16M4 6h16M4 18h16" },
    { title: "Responsible Washes", desc: "Laser where needed, ozone/air, mild enzyme.", icon: "M12 4v16M4 12h16" },
    { title: "Repair‑first", desc: "In‑house/partner darning, spare hardware in selvedge.", icon: "M5 13l4 4L19 7" },
    { title: "Durable Hardware", desc: "Copper rivets, 3‑prong button, salt‑spray tested.", icon: "M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6 20l2-7L2 9h7z" },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {tiles.map((t) => (
        <div key={t.title} className="p-4 rounded-xl bg-white ring-1 ring-black/10">
          <svg viewBox="0 0 24 24" className="w-6 h-6 mb-2" fill="none" stroke="#112B4A" strokeWidth="2"><path d={t.icon} /></svg>
          <div className="text-sm font-semibold">{t.title}</div>
          <div className="text-sm text-gray-700">{t.desc}</div>
        </div>
      ))}
    </div>
  );
}

// —— DEV TESTS (visual, non-blocking)
const __RUN_TESTS__ = true;

function AssertRow({ name, pass, expected, received }: { name: string; pass: boolean; expected: any; received: any }) {
  return (
    <div className={`flex items-center justify-between p-2 rounded border ${pass ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs font-mono">expected: {String(expected)} | got: {String(received)} | {pass ? 'PASS' : 'FAIL'}</div>
    </div>
  );
}

function luminanceFromHex(hex: string) {
  const c = hex.replace('#','');
  const r = parseInt(c.substring(0,2),16);
  const g = parseInt(c.substring(2,4),16);
  const b = parseInt(c.substring(4,6),16);
  return (0.2126*r + 0.7152*g + 0.0722*b)/255;
}

function DevTestSuite() {
  const peerNames = ["Snitch","Andamen","Bombay Shirt Co.","Pant Project","INDUS"];
  const cases = [
        { name: 'Palette count = 5', pass: Palette.length === 5, expected: 5, received: Palette.length },
    { name: 'Skus length ≥ 6', pass: Skus.length >= 6, expected: '≥ 6', received: Skus.length },
    { name: 'All SKUs start with IND-', pass: Skus.every(s=>s.sku.startsWith('IND-')), expected: true, received: Skus.every(s=>s.sku.startsWith('IND-')) },
    { name: 'Washes count ≥ 6', pass: Washes.length >= 6, expected: '≥ 6', received: Washes.length },
    { name: 'Peers include INDUS', pass: peerNames.includes('INDUS'), expected: true, received: peerNames.includes('INDUS') },
    { name: 'Ecru is light (luma>0.75)', pass: luminanceFromHex('#e9e2d8') > 0.75, expected: '>0.75', received: luminanceFromHex('#e9e2d8').toFixed(2) },
    { name: 'First SKU price numeric', pass: typeof Skus[0].price === 'number', expected: 'number', received: typeof Skus[0].price },
    { name: 'Color hexes valid', pass: Palette.every(p=>/^#[0-9a-fA-F]{6}$/.test(p.hex)), expected: true, received: Palette.every(p=>/^#[0-9a-fA-F]{6}$/.test(p.hex)) },
  ];
  return (
    <div className="p-4 rounded-xl bg-white ring-1 ring-black/10">
      <div className="text-sm font-semibold mb-2">DEV — Visual Test Cases</div>
      <div className="space-y-2">
        {cases.map(c => (
          <AssertRow key={c.name} name={c.name} pass={c.pass} expected={c.expected} received={c.received} />
        ))}
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
          <div className="text-xs text-gray-600 mb-1">Render sample — JeansFlat (front)</div>
          <JeansFlat variant="front" />
        </div>
        <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
          <div className="text-xs text-gray-600 mb-1">Render sample — JeansFlat (back)</div>
          <JeansFlat variant="back" />
        </div>
      </div>
    </div>
  );
}

function FooterBar() {
  return (
    <div className="mt-10 text-xs text-gray-500 flex items-center justify-between">
      <div>© 2025 Indus Apparels — Made in India. Worn everywhere.</div>
      <div className="flex items-center gap-3">
        <span>Materials subject to mill confirmations.</span>
        <span>AW ’25 — v1</span>
      </div>
    </div>
  );
}

// —— FIXED: Proper function signature (removed stray `()`)
export default function IndusBoardMockups() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Seal />
            <Wordmark fg="#112B4A" />
          </div>
          <div className="text-sm text-gray-600">Board Mockups • INDUS Apparels</div>
        </div>

        {/* Hero / Identity */}
        <LogoLockup />

        {/* Typography + Palette */}
        <div className="mt-10">
          <TypographySpecimen />
        </div>

        {/* Fit Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Fit System — India-first Blocks</h3>
            <div className="text-xs text-gray-500">Rise, hem, and seat graded for Indian morphology</div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Fits.map((f) => (
              <FitCard key={f.code} fit={f} />
            ))}
          </div>
        </div>

        {/* SKU Cards */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Core SKUs — AW ’25</h3>
            <div className="text-xs text-gray-500">Launch capsule aligned to MOQ and lead times</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Skus.map((s) => (
              <SkuCard key={s.sku} item={s} />
            ))}
          </div>
        </div>

        {/* Product Mockups & Feature Highlights */}
        <div className="mt-10">
          <div className="text-xl font-semibold mb-4">Product Mockups & Feature Highlights</div>
          <ProductMockups />
          <div className="mt-6">
            <FeatureTiles />
          </div>
        </div>

        {/* Wash Library */}
        <div className="mt-10">
          <WashLibrary />
        </div>

        {/* Packaging */}
        <div className="mt-10">
          <PackagingSystem />
        </div>

        {/* PDP */}
        <div className="mt-10">
          <div className="text-xl font-semibold mb-4">D2C PDP — Conversion-first Layout</div>
          <PDP />
        </div>

        {/* Wholesale Line Sheet */}
        <div className="mt-10">
          <WholesaleLineSheet />
        </div>

        {/* Competitive Map */}
        <div className="mt-10">
          <CompetitiveMap />
        </div>

        {/* DEV TESTS */}
        {__RUN_TESTS__ && (
          <div className="mt-10">
            <DevTestSuite />
          </div>
        )}

        <FooterBar />
      </div>
    </div>
  );
}
