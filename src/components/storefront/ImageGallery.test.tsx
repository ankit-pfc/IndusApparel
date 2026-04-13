import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageGallery } from "./ImageGallery";

describe("ImageGallery", () => {
  it("defaults to the front view", () => {
    render(<ImageGallery tone="#1a3350" alt="Test jeans" />);
    expect(
      screen.getByLabelText("Test jeans — front view")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "front view" })
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("switches to back view when the back thumbnail is clicked", async () => {
    render(<ImageGallery tone="#1a3350" alt="Test jeans" />);
    await userEvent.click(screen.getByRole("button", { name: "back view" }));
    expect(
      screen.getByLabelText("Test jeans — back view")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "back view" })
    ).toHaveAttribute("aria-pressed", "true");
  });
});
