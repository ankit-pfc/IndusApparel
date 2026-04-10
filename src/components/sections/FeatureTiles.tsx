const tiles = [
  {
    title: "India-first Fit Blocks",
    desc: "Graded rises & hems for Indian morphology.",
    icon: "M4 12h16M4 6h16M4 18h16",
  },
  {
    title: "Responsible Washes",
    desc: "Laser where needed, ozone/air, mild enzyme.",
    icon: "M12 4v16M4 12h16",
  },
  {
    title: "Repair-first",
    desc: "In-house/partner darning, spare hardware in selvedge.",
    icon: "M5 13l4 4L19 7",
  },
  {
    title: "Durable Hardware",
    desc: "Copper rivets, 3-prong button, salt-spray tested.",
    icon: "M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6 20l2-7L2 9h7z",
  },
];

export function FeatureTiles() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {tiles.map((t) => (
        <div key={t.title} className="p-4 rounded-xl bg-white ring-1 ring-black/10">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 mb-2"
            fill="none"
            stroke="#112B4A"
            strokeWidth="2"
          >
            <path d={t.icon} />
          </svg>
          <div className="text-sm font-semibold">{t.title}</div>
          <div className="text-sm text-gray-700">{t.desc}</div>
        </div>
      ))}
    </div>
  );
}
