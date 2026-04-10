export function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs ring-1 ring-white/20">
      {text}
    </span>
  );
}
