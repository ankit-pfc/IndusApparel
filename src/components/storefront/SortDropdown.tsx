"use client";

import { Select } from "@/components/ui";
import type { FilterState } from "@/lib/types";

export interface SortDropdownProps {
  value: FilterState["sort"];
  onChange: (value: FilterState["sort"]) => void;
}

const SORT_OPTIONS = [
  { value: "", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A → Z" },
  { value: "name-desc", label: "Name: Z → A" },
];

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <Select
      label="Sort by"
      options={SORT_OPTIONS}
      value={value ?? ""}
      onChange={(e) => {
        const v = e.target.value;
        onChange(v === "" ? null : (v as FilterState["sort"]));
      }}
      className="w-full sm:w-56"
    />
  );
}
