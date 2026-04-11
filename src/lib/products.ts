import { Skus, Fits, Washes } from "@/brand";
import type { Product, FilterState } from "./types";

const SIZES = [28, 30, 32, 34, 36, 38, 40];
const LENGTHS = ["L30", "L32", "L34"];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractFitCode(sku: string): string {
  const parts = sku.split("-");
  return parts[2] ?? "";
}

function resolveProduct(sku: (typeof Skus)[number]): Product {
  const fitCode = extractFitCode(sku.sku);
  const fit = Fits.find((f) => f.code === fitCode) ?? Fits[0];
  const washInfo = Washes.find((w) => w.name === sku.wash);

  return {
    sku: sku.sku,
    slug: slugify(sku.name),
    name: sku.name,
    price: sku.price,
    fabric: sku.fabric,
    wash: sku.wash,
    color: sku.color,
    fitCode,
    fit,
    washInfo,
    sizes: SIZES,
    lengths: LENGTHS,
    images: { alt: sku.name, variant: "front" },
  };
}

let _cache: Product[] | null = null;

export function getAllProducts(): Product[] {
  if (!_cache) {
    _cache = Skus.map(resolveProduct);
  }
  return _cache;
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductsBySku(sku: string): Product | undefined {
  return getAllProducts().find((p) => p.sku === sku);
}

export function filterProducts(
  products: Product[],
  filters: FilterState
): Product[] {
  let result = [...products];

  if (filters.fit) {
    result = result.filter((p) => p.fitCode === filters.fit);
  }

  if (filters.wash) {
    result = result.filter((p) => p.wash === filters.wash);
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    result = result.filter((p) => p.price >= min && p.price <= max);
  }

  if (filters.sort) {
    result.sort((a, b) => {
      switch (filters.sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }

  return result;
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  return getAllProducts()
    .filter((p) => p.sku !== product.sku)
    .sort((a, b) => {
      if (a.fitCode === product.fitCode && b.fitCode !== product.fitCode)
        return -1;
      if (b.fitCode === product.fitCode && a.fitCode !== product.fitCode)
        return 1;
      return Math.abs(a.price - product.price) -
        Math.abs(b.price - product.price);
    })
    .slice(0, count);
}

export function getUniqueFits(): string[] {
  const fits = new Set(getAllProducts().map((p) => p.fitCode));
  return Array.from(fits);
}

export function getUniqueWashes(): string[] {
  const washes = new Set(getAllProducts().map((p) => p.wash));
  return Array.from(washes);
}

export function getPriceRange(): [number, number] {
  const prices = getAllProducts().map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}
