import { Washes } from "@/brand";
import { DenimSwatch } from "@/components/product";

export function WashLibrary() {
  return (
    <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
      <div className="text-lg font-semibold mb-4">
        Wash Library (Lower-impact Targets)
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Washes.map((w) => (
          <DenimSwatch key={w.name} name={w.name} stops={w.stops} />
        ))}
      </div>
    </div>
  );
}
