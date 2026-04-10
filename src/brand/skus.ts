export interface Sku {
  sku: string;
  name: string;
  price: number;
  fabric: string;
  wash: string;
  color: string;
}

export const Skus: Sku[] = [
  { sku: "IND-MJ-ST-101", name: "Core Slim Taper — Rinse", price: 2999, fabric: "Core Stretch 11.5 oz", wash: "Rinse Indigo", color: "#1b3252" },
  { sku: "IND-MJ-ST-102", name: "Core Slim Taper — Mid Fade (Eco)", price: 3299, fabric: "Core Stretch 12 oz", wash: "Mid Indigo", color: "#2a4a77" },
  { sku: "IND-MJ-AT-111", name: "Athletic Taper — Dark Rinse", price: 3499, fabric: "Core Stretch 12.5 oz", wash: "Dark Rinse", color: "#132538" },
  { sku: "IND-MJ-SR-121", name: "Straight — Copper Rigid", price: 3299, fabric: "Rigid 12.5 oz", wash: "Copper Rinse", color: "#263f5f" },
  { sku: "IND-MJ-LT-141", name: "802 Summer Taper — Ecru", price: 2999, fabric: "Terracotta Ecru 11 oz", wash: "Undyed/Ecru", color: "#e9e2d8" },
  { sku: "IND-MJ-SV-171", name: "Dholavira Selvedge — Slim", price: 6999, fabric: "Selvedge 13.5 oz", wash: "Raw", color: "#0e2134" },
];
