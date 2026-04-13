import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageGallery } from "./ImageGallery";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    fill: _fill,
    sizes: _sizes,
    priority: _priority,
    ...rest
  }: {
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...rest} />,
}));

describe("ImageGallery", () => {
  it("defaults to the front view", () => {
    render(<ImageGallery sku="CORE-SLIM-RINSE" alt="Test jeans" />);
    expect(
      screen.getByLabelText("Test jeans — front view")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /front view/i })
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("switches to back view when the back thumbnail is clicked", async () => {
    render(<ImageGallery sku="CORE-SLIM-RINSE" alt="Test jeans" />);
    await userEvent.click(screen.getByRole("button", { name: /back view/i }));
    expect(
      screen.getByLabelText("Test jeans — back view")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back view/i })
    ).toHaveAttribute("aria-pressed", "true");
  });
});
