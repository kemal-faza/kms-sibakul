import type { Category, Material } from "../types";

export function filterMaterials(
  materials: Material[],
  query: string,
  category: Category | "Semua"
): Material[] {
  const q = query.trim().toLowerCase();
  return materials.filter((m) => {
    const matchesCategory = category === "Semua" || m.category === category;
    const matchesQuery =
      q === "" ||
      m.title.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}
