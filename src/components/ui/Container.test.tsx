import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies max-width and padding classes", () => {
    render(<Container data-testid="c">Content</Container>);
    const el = screen.getByTestId("c");
    expect(el.className).toContain("max-w-7xl");
    expect(el.className).toContain("mx-auto");
  });

  it("renders as custom element", () => {
    render(<Container as="section" data-testid="s">Content</Container>);
    expect(screen.getByTestId("s").tagName).toBe("SECTION");
  });

  it("merges custom className", () => {
    render(<Container className="mt-8" data-testid="c">Content</Container>);
    expect(screen.getByTestId("c").className).toContain("mt-8");
  });
});
