import { describe, it, expect } from "vitest";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "./navigation";

describe("navigation constants", () => {
  it("has 3 nav links", () => {
    expect(NAV_LINKS).toHaveLength(3);
  });

  it("each link has label and href", () => {
    for (const link of NAV_LINKS) {
      expect(link.label).toBeTruthy();
      expect(link.href).toMatch(/^\//);
    }
  });

  it("includes jeans, about, and size-guide routes", () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(hrefs).toContain("/jeans");
    expect(hrefs).toContain("/about");
    expect(hrefs).toContain("/size-guide");
  });

  it("exports site name and tagline", () => {
    expect(SITE_NAME).toBe("INDUS");
    expect(SITE_TAGLINE).toBeTruthy();
  });
});
