import { Link } from "react-router";
import type { ContinueLearning, Material } from "../types";

export function ContinueCard({
  entry,
  material,
}: {
  entry: ContinueLearning;
  material: Material;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-[26px] md:flex-row md:items-center">
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-brand-tint text-xl font-bold text-brand"
      >
        {material.icon}
      </span>

      <div className="flex flex-1 flex-col gap-2">
        <p className="text-xs font-bold tracking-wide text-accent">LANJUTKAN BELAJAR</p>
        <h3 className="text-[17px] font-bold text-ink">{material.title}</h3>
        <div className="flex items-center gap-3">
          <div className="h-2 w-[220px] max-w-full overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-brand" style={{ width: `${entry.progress}%` }} />
          </div>
          <span className="text-xs text-muted">{entry.progress}% selesai</span>
        </div>
        <p className="max-w-[520px] text-[12.5px] text-muted">{entry.reason}</p>
      </div>

      <Link
        to={`/repositori?kategori=${encodeURIComponent(material.category)}`}
        aria-label={`Lihat materi terkait kategori ${material.category}`}
        className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-[13.5px] font-bold text-white hover:bg-[#0c4d44]"
      >
        Lihat kategori
      </Link>
    </div>
  );
}
