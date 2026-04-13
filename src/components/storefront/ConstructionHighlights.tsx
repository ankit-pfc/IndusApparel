import { AttributeBadge, JeansFlat } from "@/components/product";
import type { Product } from "@/lib/types";

export interface ConstructionHighlightsProps {
  product: Product;
}

export function ConstructionHighlights({
  product,
}: ConstructionHighlightsProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
          Construction
        </div>
        <h2 className="font-serif text-3xl font-semibold text-indus-deep">
          Built at the seams.
        </h2>
        <p className="mt-4 text-monsoon-grey leading-relaxed">
          Every pair is chainstitched, rivet-reinforced, and finished by hand
          at our Ahmedabad atelier. Hardware is salt-spray tested. Pocket bags
          are bartacked.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <AttributeBadge label="Fabric" value={product.fabric} />
          <AttributeBadge label="Fit" value={product.fit.name} />
          <AttributeBadge label="Rise" value={product.fit.rise} />
          <AttributeBadge label="Hem" value={product.fit.hem} />
          <AttributeBadge label="Wash" value={product.wash} />
          <AttributeBadge label="Hardware" value="Copper rivet" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-64">
          <JeansFlat variant="back" tone={product.color} />
        </div>
      </div>
    </div>
  );
}
