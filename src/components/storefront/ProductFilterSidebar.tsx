"use client";

import { useState } from "react";
import type { FilterState } from "@/lib/types";
import { Fits } from "@/brand";

export interface ProductFilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  availableFits: string[];
  availableWashes: string[];
  priceBounds: [number, number];
}

export function ProductFilterSidebar({
  filters,
  onChange,
  availableFits,
  availableWashes,
  priceBounds,
}: ProductFilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [min, max] = priceBounds;
  const currentMax = filters.priceRange?.[1] ?? max;

  const fitNameFor = (code: string) =>
    Fits.find((f) => f.code === code)?.name ?? code;

  const update = (patch: Partial<FilterState>) => {
    onChange({ ...filters, ...patch });
  };

  const clearAll = () => {
    onChange({ fit: null, wash: null, priceRange: null, sort: filters.sort });
  };

  const hasActive =
    filters.fit !== null ||
    filters.wash !== null ||
    filters.priceRange !== null;

  const panel = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.2em] text-monsoon-grey">
          Filters
        </div>
        {hasActive && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-indus-deep underline hover:no-underline"
          >
            Clear all
          </button>
        )}
      </div>

      <div>
        <div className="text-sm font-semibold text-gray-900 mb-3">Fit</div>
        <div className="space-y-2">
          {availableFits.map((code) => (
            <label
              key={code}
              className="flex items-center gap-3 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="fit"
                checked={filters.fit === code}
                onChange={() => update({ fit: code })}
                className="accent-indus-deep"
              />
              {fitNameFor(code)}
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer text-sm text-monsoon-grey">
            <input
              type="radio"
              name="fit"
              checked={filters.fit === null}
              onChange={() => update({ fit: null })}
              className="accent-indus-deep"
            />
            All fits
          </label>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-gray-900 mb-3">Wash</div>
        <div className="space-y-2">
          {availableWashes.map((wash) => (
            <label
              key={wash}
              className="flex items-center gap-3 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="wash"
                checked={filters.wash === wash}
                onChange={() => update({ wash })}
                className="accent-indus-deep"
              />
              {wash}
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer text-sm text-monsoon-grey">
            <input
              type="radio"
              name="wash"
              checked={filters.wash === null}
              onChange={() => update({ wash: null })}
              className="accent-indus-deep"
            />
            All washes
          </label>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-gray-900 mb-3">
          Max price
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={100}
          value={currentMax}
          onChange={(e) =>
            update({ priceRange: [min, Number(e.target.value)] })
          }
          className="w-full accent-indus-deep"
        />
        <div className="mt-2 flex items-center justify-between text-xs font-mono text-monsoon-grey">
          <span>&#8377;{min.toLocaleString()}</span>
          <span className="font-semibold text-gray-900">
            &#8377;{currentMax.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg ring-1 ring-gray-300 bg-white text-sm font-medium"
          aria-expanded={mobileOpen}
        >
          <span>Filters {hasActive && "(active)"}</span>
          <span aria-hidden>{mobileOpen ? "−" : "+"}</span>
        </button>
        {mobileOpen && (
          <div className="mt-4 p-5 rounded-lg ring-1 ring-gray-200 bg-white">
            {panel}
          </div>
        )}
      </div>

      <aside className="hidden lg:block sticky top-24 self-start">
        {panel}
      </aside>
    </>
  );
}
