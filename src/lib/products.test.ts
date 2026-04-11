import { describe, it, expect } from "vitest";
import {
  slugify,
  getAllProducts,
  getProductBySlug,
  getProductsBySku,
  filterProducts,
  getRelatedProducts,
  getUniqueFits,
  getUniqueWashes,
  getPriceRange,
} from "./products";
import type { FilterState } from "./types";

describe("slugify", () => {
  it("converts names to url-safe slugs", () => {
    expect(slugify("Core Slim Taper — Rinse")).toBe("core-slim-taper-rinse");
  });

  it("strips leading and trailing dashes", () => {
    expect(slugify("— Test —")).toBe("test");
  });

  it("handles multiple special characters", () => {
    expect(slugify("802 Summer Taper — Ecru")).toBe("802-summer-taper-ecru");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });
});

describe("getAllProducts", () => {
  it("returns all 6 products", () => {
    expect(getAllProducts()).toHaveLength(6);
  });

  it("each product has required fields", () => {
    for (const p of getAllProducts()) {
      expect(p.sku).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.price).toBeGreaterThan(0);
      expect(p.fitCode).toBeTruthy();
      expect(p.fit).toBeDefined();
      expect(p.sizes).toHaveLength(7);
      expect(p.lengths).toHaveLength(3);
    }
  });

  it("generates correct slugs matching the plan", () => {
    const slugs = getAllProducts().map((p) => p.slug);
    expect(slugs).toContain("core-slim-taper-rinse");
    expect(slugs).toContain("core-slim-taper-mid-fade-eco");
    expect(slugs).toContain("athletic-taper-dark-rinse");
    expect(slugs).toContain("straight-copper-rigid");
    expect(slugs).toContain("802-summer-taper-ecru");
    expect(slugs).toContain("dholavira-selvedge-slim");
  });
});

describe("getProductBySlug", () => {
  it("finds a product by slug", () => {
    const p = getProductBySlug("core-slim-taper-rinse");
    expect(p).toBeDefined();
    expect(p!.sku).toBe("IND-MJ-ST-101");
  });

  it("returns undefined for unknown slug", () => {
    expect(getProductBySlug("does-not-exist")).toBeUndefined();
  });
});

describe("getProductsBySku", () => {
  it("finds a product by SKU code", () => {
    const p = getProductsBySku("IND-MJ-SV-171");
    expect(p).toBeDefined();
    expect(p!.name).toContain("Dholavira");
  });

  it("returns undefined for unknown SKU", () => {
    expect(getProductsBySku("FAKE-SKU")).toBeUndefined();
  });
});

describe("filterProducts", () => {
  const all = getAllProducts();
  const emptyFilter: FilterState = {
    fit: null,
    wash: null,
    priceRange: null,
    sort: null,
  };

  it("returns all products with empty filters", () => {
    expect(filterProducts(all, emptyFilter)).toHaveLength(6);
  });

  it("filters by fit code", () => {
    const result = filterProducts(all, { ...emptyFilter, fit: "ST" });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.fitCode === "ST")).toBe(true);
  });

  it("filters by wash", () => {
    const result = filterProducts(all, { ...emptyFilter, wash: "Raw" });
    expect(result).toHaveLength(1);
    expect(result[0].sku).toBe("IND-MJ-SV-171");
  });

  it("filters by price range", () => {
    const result = filterProducts(all, {
      ...emptyFilter,
      priceRange: [3000, 4000],
    });
    expect(result.every((p) => p.price >= 3000 && p.price <= 4000)).toBe(true);
  });

  it("sorts by price ascending", () => {
    const result = filterProducts(all, { ...emptyFilter, sort: "price-asc" });
    for (let i = 1; i < result.length; i++) {
      expect(result[i].price).toBeGreaterThanOrEqual(result[i - 1].price);
    }
  });

  it("sorts by name descending", () => {
    const result = filterProducts(all, { ...emptyFilter, sort: "name-desc" });
    for (let i = 1; i < result.length; i++) {
      expect(result[i].name.localeCompare(result[i - 1].name)).toBeLessThanOrEqual(0);
    }
  });

  it("combines fit filter and price sort", () => {
    const result = filterProducts(all, {
      ...emptyFilter,
      fit: "ST",
      sort: "price-asc",
    });
    expect(result.every((p) => p.fitCode === "ST")).toBe(true);
    for (let i = 1; i < result.length; i++) {
      expect(result[i].price).toBeGreaterThanOrEqual(result[i - 1].price);
    }
  });
});

describe("getRelatedProducts", () => {
  it("returns products excluding the given one", () => {
    const product = getAllProducts()[0];
    const related = getRelatedProducts(product);
    expect(related.every((p) => p.sku !== product.sku)).toBe(true);
  });

  it("returns at most `count` products", () => {
    const product = getAllProducts()[0];
    expect(getRelatedProducts(product, 2)).toHaveLength(2);
  });

  it("prioritizes same fit code", () => {
    const product = getProductBySlug("core-slim-taper-rinse")!;
    const related = getRelatedProducts(product, 1);
    expect(related[0].fitCode).toBe(product.fitCode);
  });
});

describe("aggregation helpers", () => {
  it("getUniqueFits returns distinct fit codes", () => {
    const fits = getUniqueFits();
    expect(fits.length).toBeGreaterThan(0);
    expect(new Set(fits).size).toBe(fits.length);
  });

  it("getUniqueWashes returns distinct washes", () => {
    const washes = getUniqueWashes();
    expect(washes.length).toBeGreaterThan(0);
    expect(new Set(washes).size).toBe(washes.length);
  });

  it("getPriceRange returns valid min/max", () => {
    const [min, max] = getPriceRange();
    expect(min).toBe(2999);
    expect(max).toBe(6999);
  });
});
