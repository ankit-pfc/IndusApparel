import type { Sku, Fit, Wash } from "@/brand";

export interface Product {
  sku: string;
  slug: string;
  name: string;
  price: number;
  fabric: string;
  wash: string;
  color: string;
  fitCode: string;
  fit: Fit;
  washInfo: Wash | undefined;
  sizes: number[];
  lengths: string[];
  images: { alt: string; variant: "front" | "back" };
}

export interface FilterState {
  fit: string | null;
  wash: string | null;
  priceRange: [number, number] | null;
  sort: "price-asc" | "price-desc" | "name-asc" | "name-desc" | null;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SizeChartRow {
  size: number;
  waist: string;
  hip: string;
  thigh: string;
  inseam: string;
}

export type { Sku, Fit, Wash };
