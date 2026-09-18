import { describe, it, expect } from "vitest";
import { filterMaterials } from "./filter";
import type { Material } from "../types";

const sample: Material[] = [
  {
    id: "1",
    title: "Dasar Pemasaran di Marketplace",
    summary: "Toko daring",
    category: "Pemasaran",
    format: "Artikel",
    views: 1240,
    length: "18 menit",
    icon: "A",
  },
  {
    id: "2",
    title: "Menyusun Laporan Keuangan Sederhana",
    summary: "Catatan pemasukan harian",
    category: "Pembukuan Keuangan",
    format: "Dokumen",
    views: 890,
    length: "12 halaman",
    icon: "D",
  },
];

describe("filterMaterials", () => {
  it("returns everything for an empty query and Semua category", () => {
    expect(filterMaterials(sample, "", "Semua")).toHaveLength(2);
  });

  it("filters by category", () => {
    expect(filterMaterials(sample, "", "Pemasaran").map((m) => m.id)).toEqual(["1"]);
  });

  it("matches the query against the title, case-insensitively", () => {
    expect(filterMaterials(sample, "laporan", "Semua").map((m) => m.id)).toEqual(["2"]);
  });

  it("matches the query against the summary", () => {
    expect(filterMaterials(sample, "daring", "Semua").map((m) => m.id)).toEqual(["1"]);
  });

  it("combines query and category with AND", () => {
    expect(filterMaterials(sample, "daring", "Pembukuan Keuangan")).toHaveLength(0);
  });
});
