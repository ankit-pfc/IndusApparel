export function Wordmark({ fg = "#111827" }: { fg?: string }) {
  return (
    <svg viewBox="0 0 420 64" className="w-72 h-12">
      <text
        x="0"
        y="48"
        fontFamily="serif"
        fontWeight="700"
        fontSize="56"
        fill={fg}
        letterSpacing="4"
      >
        INDUS
      </text>
    </svg>
  );
}
