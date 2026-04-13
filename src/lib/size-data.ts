import type { SizeChartRow } from "./types";

const SIZES = [28, 30, 32, 34, 36] as const;

function row(
  size: number,
  waist: string,
  hip: string,
  thigh: string,
  inseam: string
): SizeChartRow {
  return { size, waist, hip, thigh, inseam };
}

export const SIZE_CHART: Record<string, SizeChartRow[]> = {
  ST: [
    row(28, "71 cm", "92 cm", "54 cm", "81 cm"),
    row(30, "76 cm", "97 cm", "56 cm", "81 cm"),
    row(32, "81 cm", "102 cm", "58 cm", "81 cm"),
    row(34, "86 cm", "107 cm", "60 cm", "81 cm"),
    row(36, "91 cm", "112 cm", "62 cm", "81 cm"),
  ],
  AT: [
    row(28, "71 cm", "94 cm", "57 cm", "81 cm"),
    row(30, "76 cm", "99 cm", "59 cm", "81 cm"),
    row(32, "81 cm", "104 cm", "61 cm", "81 cm"),
    row(34, "86 cm", "109 cm", "63 cm", "81 cm"),
    row(36, "91 cm", "114 cm", "65 cm", "81 cm"),
  ],
  SR: [
    row(28, "71 cm", "93 cm", "55 cm", "81 cm"),
    row(30, "76 cm", "98 cm", "57 cm", "81 cm"),
    row(32, "81 cm", "103 cm", "59 cm", "81 cm"),
    row(34, "86 cm", "108 cm", "61 cm", "81 cm"),
    row(36, "91 cm", "113 cm", "63 cm", "81 cm"),
  ],
  RS: [
    row(28, "72 cm", "95 cm", "58 cm", "81 cm"),
    row(30, "77 cm", "100 cm", "60 cm", "81 cm"),
    row(32, "82 cm", "105 cm", "62 cm", "81 cm"),
    row(34, "87 cm", "110 cm", "64 cm", "81 cm"),
    row(36, "92 cm", "115 cm", "66 cm", "81 cm"),
  ],
  SV: [
    row(28, "70 cm", "91 cm", "53 cm", "81 cm"),
    row(30, "75 cm", "96 cm", "55 cm", "81 cm"),
    row(32, "80 cm", "101 cm", "57 cm", "81 cm"),
    row(34, "85 cm", "106 cm", "59 cm", "81 cm"),
    row(36, "90 cm", "111 cm", "61 cm", "81 cm"),
  ],
  CU: [
    row(28, "72 cm", "95 cm", "58 cm", "81 cm"),
    row(30, "77 cm", "100 cm", "60 cm", "81 cm"),
    row(32, "82 cm", "105 cm", "62 cm", "81 cm"),
    row(34, "87 cm", "110 cm", "64 cm", "81 cm"),
    row(36, "92 cm", "115 cm", "66 cm", "81 cm"),
  ],
};

export const MEASUREMENT_GUIDE = [
  {
    step: 1,
    title: "Waist",
    body: "Measure around your natural waist — roughly at the belly button. Keep the tape snug but not tight.",
  },
  {
    step: 2,
    title: "Hip",
    body: "Stand with your feet together. Measure around the widest part of your hips, keeping the tape level.",
  },
  {
    step: 3,
    title: "Thigh",
    body: "Measure around the fullest part of your upper leg, about 2.5 cm below the crotch.",
  },
  {
    step: 4,
    title: "Inseam",
    body: "Measure from the crotch seam straight down to the ankle on a well-fitting pair of jeans.",
  },
];

export const ALL_SIZES = SIZES;
