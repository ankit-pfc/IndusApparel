import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductFilterSidebar } from "./ProductFilterSidebar";
import type { FilterState } from "@/lib/types";

const baseFilters: FilterState = {
  fit: null,
  wash: null,
  priceRange: null,
  sort: null,
};

const defaultProps = {
  filters: baseFilters,
  availableFits: ["ST", "AT", "SR"],
  availableWashes: ["Rinse Indigo", "Dark Rinse"],
  priceBounds: [2999, 6999] as [number, number],
};

describe("ProductFilterSidebar", () => {
  it("selecting a fit calls onChange with that fit code", async () => {
    const onChange = vi.fn();
    render(<ProductFilterSidebar {...defaultProps} onChange={onChange} />);
    const radios = screen.getAllByRole("radio", { name: "Slim Taper" });
    await userEvent.click(radios[0]);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ fit: "ST" })
    );
  });

  it("selecting a wash calls onChange with that wash name", async () => {
    const onChange = vi.fn();
    render(<ProductFilterSidebar {...defaultProps} onChange={onChange} />);
    const radios = screen.getAllByRole("radio", { name: "Dark Rinse" });
    await userEvent.click(radios[0]);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ wash: "Dark Rinse" })
    );
  });

  it("clear all resets fit, wash, and priceRange while preserving sort", async () => {
    const onChange = vi.fn();
    render(
      <ProductFilterSidebar
        {...defaultProps}
        filters={{
          fit: "ST",
          wash: "Dark Rinse",
          priceRange: [2999, 5000],
          sort: "price-asc",
        }}
        onChange={onChange}
      />
    );
    const clearButtons = screen.getAllByRole("button", { name: /clear all/i });
    await userEvent.click(clearButtons[0]);
    expect(onChange).toHaveBeenCalledWith({
      fit: null,
      wash: null,
      priceRange: null,
      sort: "price-asc",
    });
  });

  it("does not render clear all when no filters are active", () => {
    render(<ProductFilterSidebar {...defaultProps} onChange={() => {}} />);
    expect(
      screen.queryByRole("button", { name: /clear all/i })
    ).not.toBeInTheDocument();
  });

  it("updating the price slider emits a new priceRange", () => {
    const onChange = vi.fn();
    render(<ProductFilterSidebar {...defaultProps} onChange={onChange} />);
    const slider = screen.getAllByRole("slider")[0] as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "5000" } });
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ priceRange: [2999, 5000] })
    );
  });
});
