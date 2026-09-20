import { Link } from "react-router";
import type { Material } from "../types";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { formatViews } from "../lib/format";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <Card className="flex flex-col gap-3.5 p-[22px]">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-brand-tint text-sm font-bold text-brand"
        >
          {material.icon}
        </span>
        <Badge variant="category">{material.category}</Badge>
      </div>
      <h3 className="text-base font-bold text-ink">{material.title}</h3>
      <p className="text-[13px] text-muted">{material.summary}</p>
      <div className="border-t border-line" />
      <div className="flex items-center justify-between">
        <span className="text-[11.5px] text-muted">
          {material.length} • {formatViews(material.views)} dilihat
        </span>
        <Link
          to={`/repositori?kategori=${encodeURIComponent(material.category)}`}
          aria-label={`Lihat materi terkait kategori ${material.category}`}
          className="text-[13px] font-bold text-brand hover:underline"
        >
          Lihat kategori →
        </Link>
      </div>
    </Card>
  );
}
