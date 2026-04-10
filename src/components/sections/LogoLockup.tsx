import { Palette } from "@/brand";
import { Badge, Wordmark, Seal, RiverLines } from "@/components/brand";

export function LogoLockup() {
  return (
    <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
      <div className="p-6 rounded-2xl bg-[#112B4A] text-white relative overflow-hidden">
        <RiverLines />
        <div className="relative z-10">
          <div className="text-sm tracking-[0.35em] uppercase opacity-80">
            India &bull; Origin &bull; Denim
          </div>
          <h1 className="mt-2 text-5xl font-semibold tracking-wide">INDUS</h1>
          <p className="mt-2 text-lg opacity-90 max-w-xl">
            Born by the river. Built for the road. Modern denim from India for
            India—and the world.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Badge text="Est. 2025" />
            <Badge text="Indigo, from India" />
            <Badge text="Responsible Washes" />
          </div>
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
        <h3 className="text-xl font-semibold">Primary Mark</h3>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Wordmark fg="#112B4A" />
            <span className="text-sm text-gray-600">
              Wordmark (Serif) on Sand Selvedge
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Seal />
            <span className="text-sm text-gray-600">
              Seal Monogram (River-Line) for patches, rivets, and buttons
            </span>
          </div>
        </div>
        <hr className="my-6" />
        <h4 className="text-sm font-medium text-gray-700">Color System</h4>
        <div className="mt-3 grid grid-cols-5 gap-3">
          {Palette.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-12 rounded-md shadow-sm"
                style={{ backgroundColor: c.hex }}
              />
              <div className="text-[10px] text-center leading-tight">
                <div className="font-medium">{c.name}</div>
                <div className="font-mono">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
