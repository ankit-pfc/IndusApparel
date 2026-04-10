import { Skus } from "@/brand";
import { Wordmark } from "@/components/brand";

export function WholesaleLineSheet() {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/10 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500 font-mono">AW &apos;25 Core</div>
          <div className="text-lg font-semibold">
            Indus — Wholesale Line Sheet (Men&apos;s)
          </div>
        </div>
        <Wordmark fg="#112B4A" />
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              {[
                "SKU",
                "Style",
                "Fit",
                "Fabric/Oz",
                "Wash",
                "Sizes",
                "MRP (INR)",
                "Wholesale (INR)",
                "MOQ",
                "Lead",
              ].map((h) => (
                <th key={h} className="px-4 py-2 text-left whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Skus.map((s) => (
              <tr key={s.sku} className="border-t">
                <td className="px-4 py-2 font-mono text-gray-700">{s.sku}</td>
                <td className="px-4 py-2">{s.name}</td>
                <td className="px-4 py-2">
                  {s.name.includes("Slim")
                    ? "Slim"
                    : s.name.includes("Taper")
                      ? "Taper"
                      : s.name.includes("Straight")
                        ? "Straight"
                        : "N/A"}
                </td>
                <td className="px-4 py-2">{s.fabric}</td>
                <td className="px-4 py-2">{s.wash}</td>
                <td className="px-4 py-2">28–40 / L30/32/34</td>
                <td className="px-4 py-2">
                  &#8377;{s.price.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  &#8377;{Math.round(s.price * 0.55).toLocaleString()}
                </td>
                <td className="px-4 py-2">300</td>
                <td className="px-4 py-2">60–75 days</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
