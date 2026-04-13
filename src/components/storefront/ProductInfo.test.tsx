import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductInfo } from "./ProductInfo";
import { getProductBySlug } from "@/lib/products";

const product = getProductBySlug("core-slim-taper-rinse")!;

describe("ProductInfo", () => {
  it("renders SKU, name, and price", () => {
    render(<ProductInfo product={product} />);
    expect(screen.getByText(product.sku)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: product.name })).toBeInTheDocument();
    expect(screen.getByText(/2,999/)).toBeInTheDocument();
  });

  it("Add to Cart is disabled until size and length are chosen", async () => {
    render(<ProductInfo product={product} />);
    const cta = screen.getByRole("button", {
      name: /select size and length/i,
    });
    expect(cta).toBeDisabled();

    await userEvent.click(screen.getByRole("button", { name: "32" }));
    expect(
      screen.getByRole("button", { name: /select size and length/i })
    ).toBeDisabled();

    await userEvent.click(screen.getByRole("button", { name: "L32" }));
    const enabled = screen.getByRole("button", { name: /add to cart/i });
    expect(enabled).not.toBeDisabled();
  });

  it("links to the size guide", () => {
    render(<ProductInfo product={product} />);
    const link = screen.getByRole("link", { name: /size guide/i });
    expect(link).toHaveAttribute("href", "/size-guide");
  });
});
