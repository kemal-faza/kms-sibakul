import { describe, it, expect } from "vitest";
import { formatViews } from "./format";

describe("formatViews", () => {
  it("groups thousands with a dot per id-ID", () => {
    expect(formatViews(1240)).toBe("1.240");
    expect(formatViews(2010)).toBe("2.010");
  });

  it("leaves sub-thousand values unchanged", () => {
    expect(formatViews(890)).toBe("890");
    expect(formatViews(734)).toBe("734");
  });
});
