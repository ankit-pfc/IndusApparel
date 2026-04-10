export function Callout({
  x,
  y,
  title,
  desc,
  side = "right",
  dy = 0,
}: {
  x: number;
  y: number;
  title: string;
  desc: string;
  side?: "left" | "right";
  dy?: number;
}) {
  const boxW = 180;
  const boxH = 48;
  const lineDx = side === "right" ? 18 : -18;
  const boxX = side === "right" ? x + lineDx + 4 : x + lineDx - boxW - 4;
  const boxY = y - boxH / 2 + dy;
  return (
    <g>
      <circle cx={x} cy={y} r={3} fill="#8A5A28" />
      <line
        x1={x}
        y1={y}
        x2={x + lineDx}
        y2={y - 12}
        stroke="#8A5A28"
        strokeWidth={1.5}
      />
      <foreignObject x={boxX} y={boxY} width={boxW} height={boxH}>
        <div className="bg-white/95 backdrop-blur rounded-md px-2 py-1 ring-1 ring-black/10">
          <div className="text-[10px] font-semibold text-gray-900">{title}</div>
          <div className="text-[10px] text-gray-600 leading-tight">{desc}</div>
        </div>
      </foreignObject>
    </g>
  );
}
