import Link from "next/link";
import { SkuCard } from "@/components/product";
import type { Product } from "@/lib/types";

export interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div>
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-monsoon-grey mb-2">
          More from INDUS
        </div>
        <h2 className="font-serif text-3xl font-semibold text-gray-900">
          You may also like
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.sku}
            href={`/jeans/${p.slug}`}
            className="block hover:opacity-90 transition-opacity"
          >
            <SkuCard item={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
