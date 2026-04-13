import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SortDropdown } from "./SortDropdown";

describe("SortDropdown", () => {
  it("reflects the current value", () => {
    render(<SortDropdown value="price-asc" onChange={() => {}} />);
    const select = screen.getByLabelText("Sort by") as HTMLSelectElement;
    expect(select.value).toBe("price-asc");
  });

  it("renders as empty string when value is null", () => {
    render(<SortDropdown value={null} onChange={() => {}} />);
    const select = screen.getByLabelText("Sort by") as HTMLSelectElement;
    expect(select.value).toBe("");
  });

  it("emits null when Featured is selected", async () => {
    const onChange = vi.fn();
    render(<SortDropdown value="price-asc" onChange={onChange} />);
    await userEvent.selectOptions(screen.getByLabelText("Sort by"), "");
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it("emits the sort value for named options", async () => {
    const onChange = vi.fn();
    render(<SortDropdown value={null} onChange={onChange} />);
    await userEvent.selectOptions(screen.getByLabelText("Sort by"), "price-desc");
    expect(onChange).toHaveBeenCalledWith("price-desc");
  });
});
