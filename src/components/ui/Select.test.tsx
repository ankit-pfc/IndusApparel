import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const options = [
  { value: "st", label: "Slim Taper" },
  { value: "at", label: "Athletic Taper" },
  { value: "sr", label: "Straight" },
];

describe("Select", () => {
  it("renders label and select", () => {
    render(<Select label="Fit" options={options} />);
    expect(screen.getByLabelText("Fit")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(<Select label="Fit" options={options} />);
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("renders placeholder option when provided", () => {
    render(<Select label="Fit" options={options} placeholder="Choose a fit" />);
    expect(screen.getAllByRole("option")).toHaveLength(4);
    expect(screen.getByText("Choose a fit")).toBeInTheDocument();
  });

  it("allows selecting an option", async () => {
    render(<Select label="Fit" options={options} defaultValue="st" />);
    const select = screen.getByLabelText("Fit");
    await userEvent.selectOptions(select, "at");
    expect(select).toHaveValue("at");
  });

  it("generates id from label", () => {
    render(<Select label="Fit Type" options={options} />);
    expect(screen.getByLabelText("Fit Type")).toHaveAttribute("id", "fit-type");
  });
});
