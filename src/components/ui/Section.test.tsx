import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Section } from "./Section";

describe("Section", () => {
  it("renders children inside a container", () => {
    render(<Section>Hello</Section>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies white background by default", () => {
    render(<Section data-testid="s">Content</Section>);
    expect(screen.getByTestId("s").className).toContain("bg-white");
  });

  it("applies sand background", () => {
    render(<Section bg="sand" data-testid="s">Content</Section>);
    expect(screen.getByTestId("s").className).toContain("bg-sand-selvedge");
  });

  it("applies dark background with white text", () => {
    render(<Section bg="dark" data-testid="s">Content</Section>);
    const el = screen.getByTestId("s");
    expect(el.className).toContain("bg-indus-deep");
    expect(el.className).toContain("text-white");
  });

  it("applies section spacing", () => {
    render(<Section data-testid="s">Content</Section>);
    expect(screen.getByTestId("s").className).toContain("py-16");
  });
});
