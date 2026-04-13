"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui";
import {
  CollectionHero,
  ProductFilterSidebar,
  ProductGrid,
  SortDropdown,
} from "@/components/storefront";
import {
  filterProducts,
  getAllProducts,
  getPriceRange,
  getUniqueFits,
  getUniqueWashes,
} from "@/lib/products";
import type { FilterState } from "@/lib/types";

const INITIAL_FILTERS: FilterState = {
  fit: null,
  wash: null,
  priceRange: null,
  sort: null,
};

export default function JeansCollectionPage() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  const allProducts = useMemo(() => getAllProducts(), []);
  const availableFits = useMemo(() => getUniqueFits(), []);
  const availableWashes = useMemo(() => getUniqueWashes(), []);
  const priceBounds = useMemo(() => getPriceRange(), []);

  const visibleProducts = useMemo(
    () => filterProducts(allProducts, filters),
    [allProducts, filters]
  );

  return (
    <>
      <CollectionHero
        title="Jeans"
        description="Six fits, one block. India-first grading with chainstitched hems and copper rivets on every pair."
        productCount={allProducts.length}
      />

      <Container>
        <div className="py-10 lg:py-14 grid gap-10 lg:grid-cols-[256px_1fr]">
          <ProductFilterSidebar
            filters={filters}
            onChange={setFilters}
            availableFits={availableFits}
            availableWashes={availableWashes}
            priceBounds={priceBounds}
          />

          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="text-sm text-monsoon-grey">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {visibleProducts.length}
                </span>{" "}
                of {allProducts.length}
              </div>
              <SortDropdown
                value={filters.sort}
                onChange={(sort) => setFilters((f) => ({ ...f, sort }))}
              />
            </div>

            <ProductGrid products={visibleProducts} />
          </div>
        </div>
      </Container>
    </>
  );
}
