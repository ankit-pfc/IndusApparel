import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("renders label and input", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("generates id from label", () => {
    render(<Input label="Full Name" />);
    expect(screen.getByLabelText("Full Name")).toHaveAttribute("id", "full-name");
  });

  it("uses custom id when provided", () => {
    render(<Input label="Email" id="custom-id" />);
    expect(screen.getByLabelText("Email")).toHaveAttribute("id", "custom-id");
  });

  it("shows error message", () => {
    render(<Input label="Email" error="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
  });

  it("accepts user input", async () => {
    render(<Input label="Email" />);
    const input = screen.getByLabelText("Email");
    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });
});
