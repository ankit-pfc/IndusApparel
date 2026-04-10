import type { Fit } from "@/brand";

function FitIllustration() {
  return (
    <svg viewBox="0 0 90 120" className="w-16 h-20">
      <path
        d="M20 10 L35 10 L40 50 L50 50 L55 10 L70 10 L62 115 L28 115 Z"
        fill="#e5e7eb"
        stroke="#9ca3af"
      />
      <path d="M45 50 L45 115" stroke="#8A5A28" strokeDasharray="3 2" />
      <path d="M28 85 L62 85" stroke="#8A5A28" strokeDasharray="3 2" />
      <circle cx="30" cy="60" r="1.5" fill="#8A5A28" />
      <circle cx="60" cy="60" r="1.5" fill="#8A5A28" />
    </svg>
  );
}

export function FitCard({ fit }: { fit: Fit }) {
  return (
    <div className="p-4 bg-white rounded-xl ring-1 ring-black/10">
      <div className="flex items-start gap-4">
        <FitIllustration />
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500">{fit.code}</div>
          <div className="text-lg font-semibold">{fit.name}</div>
          <div className="text-sm text-gray-600">
            Hem: {fit.hem} &bull; Rise: {fit.rise}
          </div>
          <p className="mt-1 text-sm text-gray-700">{fit.desc}</p>
        </div>
      </div>
    </div>
  );
}
