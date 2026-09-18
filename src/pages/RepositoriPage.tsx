import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { PageShell } from "../components/layout/PageShell";
import { Chip } from "../components/ui/Chip";
import { SearchBar } from "../components/ui/SearchBar";
import { MaterialCard } from "../features/MaterialCard";
import { materials } from "../data/mock";
import { filterMaterials } from "../lib/filter";
import type { Category } from "../types";

const CATEGORIES: Category[] = [
  "Pemasaran",
  "Legalitas & Perizinan",
  "Pembukuan Keuangan",
  "Produksi & Kemasan",
  "Akses Permodalan",
];

export function RepositoriPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const raw = params.get("kategori");
  const category: Category | "Semua" =
    raw && (CATEGORIES as string[]).includes(raw) ? (raw as Category) : "Semua";

  const results = useMemo(
    () => filterMaterials(materials, query, category),
    [query, category]
  );

  function selectCategory(next: Category | "Semua") {
    const nextParams = new URLSearchParams(params);
    if (next === "Semua") nextParams.delete("kategori");
    else nextParams.set("kategori", next);
    setParams(nextParams, { replace: true });
  }

  function reset() {
    setQuery("");
    selectCategory("Semua");
  }

  return (
    <PageShell
      title="Repositori Pengetahuan"
      description="Materi hasil pembinaan yang bisa Anda pelajari dan terapkan kapan saja, tanpa menunggu jadwal pendampingan."
    >
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Cari materi, mis. pemasaran digital, perizinan usaha..."
      />

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        <Chip active={category === "Semua"} onClick={() => selectCategory("Semua")}>
          Semua
        </Chip>
        {CATEGORIES.map((c) => (
          <Chip key={c} active={category === c} onClick={() => selectCategory(c)}>
            {c}
          </Chip>
        ))}
      </div>

      <p className="text-[13px] text-muted">Menampilkan {results.length} materi</p>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-line bg-surface p-10 text-center">
          <p className="text-sm text-muted">Tidak ada materi yang cocok dengan pencarian Anda.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 text-[13px] font-bold text-brand hover:underline"
          >
            Reset filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((m) => (
            <MaterialCard key={m.id} material={m} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
