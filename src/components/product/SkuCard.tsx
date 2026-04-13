import Image from "next/image";
import type { Sku } from "@/brand";

export function SkuCard({ item }: { item: Sku }) {
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
      <div className="relative aspect-[4/5] bg-sand-selvedge">
        <Image
          src={`/images/products/${item.sku.toLowerCase()}/front.png`}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, 33vw"
        />
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
