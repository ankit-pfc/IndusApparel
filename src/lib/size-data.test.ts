import { describe, it, expect } from "vitest";
import { SIZE_CHART, MEASUREMENT_GUIDE } from "./size-data";
import { Fits } from "@/brand";

describe("SIZE_CHART", () => {
  it("has an entry for every fit code", () => {
    for (const fit of Fits) {
      expect(SIZE_CHART[fit.code]).toBeDefined();
      expect(SIZE_CHART[fit.code].length).toBeGreaterThan(0);
    }
  });

  it("rows are sorted by size ascending within each fit", () => {
    for (const code of Object.keys(SIZE_CHART)) {
      const rows = SIZE_CHART[code];
      for (let i = 1; i < rows.length; i++) {
        expect(rows[i].size).toBeGreaterThan(rows[i - 1].size);
      }
    }
  });

  it("each row has all measurement fields populated", () => {
    for (const code of Object.keys(SIZE_CHART)) {
      for (const row of SIZE_CHART[code]) {
        expect(row.waist).toMatch(/\d+\s*cm/);
        expect(row.hip).toMatch(/\d+\s*cm/);
        expect(row.thigh).toMatch(/\d+\s*cm/);
        expect(row.inseam).toMatch(/\d+\s*cm/);
      }
    }
  });

  it("AT thigh is larger than ST at the same size", () => {
    const stThigh = parseInt(SIZE_CHART.ST[2].thigh, 10);
    const atThigh = parseInt(SIZE_CHART.AT[2].thigh, 10);
    expect(atThigh).toBeGreaterThan(stThigh);
  });
});

describe("MEASUREMENT_GUIDE", () => {
  it("has 4 numbered steps in order", () => {
    expect(MEASUREMENT_GUIDE).toHaveLength(4);
    MEASUREMENT_GUIDE.forEach((step, i) => {
      expect(step.step).toBe(i + 1);
      expect(step.title).toBeTruthy();
      expect(step.body.length).toBeGreaterThan(20);
    });
  });
});
