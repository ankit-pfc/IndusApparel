export function AttributeBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-2 rounded-lg bg-white ring-1 ring-black/10 text-xs">
      <div className="text-[10px] uppercase tracking-widest text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  );
}
