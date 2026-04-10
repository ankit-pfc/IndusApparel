import type { Sku } from "@/brand";

function luminanceFromHex(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

export function SkuCard({ item }: { item: Sku }) {
  const isLight = luminanceFromHex(item.color) > 0.75;
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
      <div className="h-40 relative" style={{ background: item.color }}>
        <div
          className={`absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded ${
            isLight ? "bg-black/60 text-white" : "bg-white/80 text-gray-900"
          }`}
        >
          {item.wash}
        </div>
        <div className="absolute right-3 top-3 bottom-3 w-1.5 bg-white/90" />
        <div className="absolute right-3 top-3 bottom-3 w-0.5 bg-red-500" />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 font-mono">{item.sku}</div>
        <div className="text-base font-semibold">{item.name}</div>
        <div className="text-sm text-gray-700">{item.fabric}</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">
            &#8377;{item.price.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">28–40 &bull; L30/32/34</div>
        </div>
      </div>
    </div>
  );
}
