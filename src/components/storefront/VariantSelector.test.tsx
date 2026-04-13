import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VariantSelector } from "./VariantSelector";

const SIZES = [28, 30, 32, 34];
const LENGTHS = ["L30", "L32", "L34"];

describe("VariantSelector", () => {
  it("renders every size and length as a button", () => {
    render(
      <VariantSelector
        sizes={SIZES}
        lengths={LENGTHS}
        selectedSize={null}
        selectedLength={null}
        onSizeChange={() => {}}
        onLengthChange={() => {}}
      />
    );
    for (const s of SIZES) {
      expect(screen.getByRole("button", { name: String(s) })).toBeInTheDocument();
    }
    for (const l of LENGTHS) {
      expect(screen.getByRole("button", { name: l })).toBeInTheDocument();
    }
  });

  it("calls onSizeChange with the clicked size", async () => {
    const onSizeChange = vi.fn();
    render(
      <VariantSelector
        sizes={SIZES}
        lengths={LENGTHS}
        selectedSize={null}
        selectedLength={null}
        onSizeChange={onSizeChange}
        onLengthChange={() => {}}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: "32" }));
    expect(onSizeChange).toHaveBeenCalledWith(32);
  });

  it("calls onLengthChange with the clicked length", async () => {
    const onLengthChange = vi.fn();
    render(
      <VariantSelector
        sizes={SIZES}
        lengths={LENGTHS}
        selectedSize={null}
        selectedLength={null}
        onSizeChange={() => {}}
        onLengthChange={onLengthChange}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: "L32" }));
    expect(onLengthChange).toHaveBeenCalledWith("L32");
  });

  it("marks the selected size as pressed", () => {
    render(
      <VariantSelector
        sizes={SIZES}
        lengths={LENGTHS}
        selectedSize={30}
        selectedLength="L32"
        onSizeChange={() => {}}
        onLengthChange={() => {}}
      />
    );
    expect(screen.getByRole("button", { name: "30" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByRole("button", { name: "28" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
    expect(screen.getByRole("button", { name: "L32" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });
});
