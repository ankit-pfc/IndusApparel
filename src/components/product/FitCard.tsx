import Image from "next/image";
import type { Fit } from "@/brand";

function fitImageSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function FitCard({ fit }: { fit: Fit }) {
  return (
    <div className="p-4 bg-white rounded-xl ring-1 ring-black/10">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-20 shrink-0 rounded-lg overflow-hidden bg-sand-selvedge">
          <Image
            src={`/images/fits/${fitImageSlug(fit.name)}.png`}
            alt={fit.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500">{fit.code}</div>
          <div className="text-lg font-semibold">{fit.name}</div>
          <div className="text-sm text-gray-600">
            Hem: {fit.hem} &bull; Rise: {fit.rise}
          </div>
          <p className="mt-1 text-sm text-gray-700">{fit.desc}</p>
        </div>
      </div>
    </div>
  );
}
