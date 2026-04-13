import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductGrid } from "./ProductGrid";
import { getAllProducts } from "@/lib/products";

describe("ProductGrid", () => {
  it("renders an empty state when no products match", () => {
    render(<ProductGrid products={[]} />);
    expect(screen.getByText("No matches")).toBeInTheDocument();
    expect(
      screen.getByText(/Try clearing a filter/i)
    ).toBeInTheDocument();
  });

  it("renders a link to each product's PDP", () => {
    const products = getAllProducts().slice(0, 3);
    render(<ProductGrid products={products} />);
    for (const p of products) {
      const link = screen.getByRole("link", { name: new RegExp(p.sku) });
      expect(link).toHaveAttribute("href", `/jeans/${p.slug}`);
    }
  });

  it("shows product names for each product", () => {
    const products = getAllProducts().slice(0, 2);
    render(<ProductGrid products={products} />);
    for (const p of products) {
      expect(screen.getByText(p.name)).toBeInTheDocument();
    }
  });
});
