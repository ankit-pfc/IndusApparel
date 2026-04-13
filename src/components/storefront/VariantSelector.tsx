"use client";

export interface VariantSelectorProps {
  sizes: number[];
  lengths: string[];
  selectedSize: number | null;
  selectedLength: string | null;
  onSizeChange: (size: number) => void;
  onLengthChange: (length: string) => void;
}

export function VariantSelector({
  sizes,
  lengths,
  selectedSize,
  selectedLength,
  onSizeChange,
  onLengthChange,
}: VariantSelectorProps) {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold text-gray-900">
            Select waist
          </div>
          <div className="text-xs text-monsoon-grey">inches</div>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {sizes.map((s) => {
            const active = selectedSize === s;
            return (
              <button
                key={s}
                type="button"
                aria-pressed={active}
                onClick={() => onSizeChange(s)}
                className={`py-2.5 rounded-md text-sm font-medium ring-1 transition ${
                  active
                    ? "bg-indus-deep text-white ring-indus-deep"
                    : "ring-gray-300 hover:ring-gray-900 text-gray-900"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold text-gray-900">Length</div>
          <div className="text-xs text-monsoon-grey">inseam</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {lengths.map((l) => {
            const active = selectedLength === l;
            return (
              <button
                key={l}
                type="button"
                aria-pressed={active}
                onClick={() => onLengthChange(l)}
                className={`px-4 py-2 rounded-md text-sm font-medium ring-1 transition ${
                  active
                    ? "bg-indus-deep text-white ring-indus-deep"
                    : "ring-gray-300 hover:ring-gray-900 text-gray-900"
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
