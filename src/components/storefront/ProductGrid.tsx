import Link from "next/link";
import { SkuCard } from "@/components/product";
import type { Product } from "@/lib/types";

export interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="font-serif text-2xl text-gray-900 mb-2">
          No matches
        </div>
        <p className="text-monsoon-grey">
          Try clearing a filter or broadening your price range.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
  );
}
