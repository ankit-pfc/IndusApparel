import { Fits, Skus } from "@/brand";
import { Seal, Wordmark } from "@/components/brand";
import { FitCard, SkuCard } from "@/components/product";
import {
  LogoLockup,
  TypographySpecimen,
  PackagingSystem,
  PDP,
  WholesaleLineSheet,
  CompetitiveMap,
  WashLibrary,
  ProductMockups,
  FeatureTiles,
} from "@/components/sections";

export default function BrandBookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Seal />
            <Wordmark fg="#112B4A" />
          </div>
          <div className="text-sm text-gray-600">
            Board Mockups &bull; INDUS Apparels
          </div>
        </div>

        {/* Hero / Identity */}
        <LogoLockup />

        {/* Typography + Palette */}
        <div className="mt-10">
          <TypographySpecimen />
        </div>

        {/* Fit Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">
              Fit System — India-first Blocks
            </h3>
            <div className="text-xs text-gray-500">
              Rise, hem, and seat graded for Indian morphology
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Fits.map((f) => (
              <FitCard key={f.code} fit={f} />
            ))}
          </div>
        </div>

        {/* SKU Cards */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Core SKUs — AW &apos;25</h3>
            <div className="text-xs text-gray-500">
              Launch capsule aligned to MOQ and lead times
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Skus.map((s) => (
              <SkuCard key={s.sku} item={s} />
            ))}
          </div>
        </div>

        {/* Product Mockups & Feature Highlights */}
        <div className="mt-10">
          <div className="text-xl font-semibold mb-4">
            Product Mockups &amp; Feature Highlights
          </div>
          <ProductMockups />
          <div className="mt-6">
            <FeatureTiles />
          </div>
        </div>

        {/* Wash Library */}
        <div className="mt-10">
          <WashLibrary />
        </div>

        {/* Packaging */}
        <div className="mt-10">
          <PackagingSystem />
        </div>

        {/* PDP */}
        <div className="mt-10">
          <div className="text-xl font-semibold mb-4">
            D2C PDP — Conversion-first Layout
          </div>
          <PDP />
        </div>

        {/* Wholesale Line Sheet */}
        <div className="mt-10">
          <WholesaleLineSheet />
        </div>

        {/* Competitive Map */}
        <div className="mt-10">
          <CompetitiveMap />
        </div>

        {/* Footer */}
        <div className="mt-10 text-xs text-gray-500 flex items-center justify-between">
          <div>&copy; 2025 Indus Apparels — Made in India. Worn everywhere.</div>
          <div className="flex items-center gap-3">
            <span>Materials subject to mill confirmations.</span>
            <span>AW &apos;25 — v1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
