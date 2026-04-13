import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import { SkuCard } from "@/components/product";
import { Container } from "@/components/ui";

export function FeaturedProducts() {
  const products = getAllProducts();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-monsoon-grey mb-2">
          The Collection
        </p>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900">
            New arrivals
          </h2>
          <Link
            href="/jeans"
            className="text-sm font-medium text-indus-deep hover:underline hidden sm:block"
          >
            View all &rarr;
          </Link>
        </div>

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
          {products.map((p) => (
            <Link
              key={p.sku}
              href={`/jeans/${p.slug}`}
              className="min-w-[280px] snap-start lg:min-w-0"
            >
              <SkuCard item={p} />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/jeans"
            className="inline-flex items-center justify-center rounded-lg font-medium transition-colors ring-1 ring-gray-300 hover:ring-gray-900 text-gray-900 px-6 py-3 text-base h-12 w-full"
          >
            Shop All Jeans
          </Link>
        </div>
      </Container>
    </section>
  );
}
