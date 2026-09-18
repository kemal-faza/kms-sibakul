import { Link } from "react-router";
import { PageShell } from "../components/layout/PageShell";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ContinueCard } from "../features/ContinueCard";
import { allMaterials, continueLearning, popularIds, recommendedIds } from "../data/mock";

export function RekomendasiPage() {
  const byId = (id: string) => allMaterials.find((m) => m.id === id);
  const continueMaterial = byId(continueLearning.materialId);
  const recommended = recommendedIds.map(byId).filter((m) => m !== undefined);
  const popular = popularIds.map(byId).filter((m) => m !== undefined);

  return (
    <PageShell
      title="Rekomendasi untuk Anda"
      description="Disusun dari kategori usaha dan riwayat belajar Anda, bukan daftar acak."
    >
      {continueMaterial ? (
        <ContinueCard entry={continueLearning} material={continueMaterial} />
      ) : null}

      <section className="flex flex-col gap-4">
        <SectionHeader>Direkomendasikan untuk kategori Kuliner</SectionHeader>
        {recommended.length === 0 ? (
          <p className="text-sm text-muted">Belum ada rekomendasi.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommended.map((m) => (
              <Card key={m.id} className="flex flex-col gap-3 p-[22px]">
                <Badge variant="category">{m.category}</Badge>
                <h3 className="text-[15.5px] font-bold text-ink">{m.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] text-muted">
                    {m.format} • {m.length}
                  </span>
                  <Link
                    to={`/repositori?kategori=${encodeURIComponent(m.category)}`}
                    className="text-[12.5px] font-bold text-brand hover:underline"
                  >
                    Pelajari →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeader>Sedang Populer di Komunitas</SectionHeader>
        {popular.length === 0 ? (
          <p className="text-sm text-muted">Belum ada diskusi populer.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((m) => (
              <Card key={m.id} className="flex flex-col gap-2.5 p-[22px]">
                <h3 className="text-[15.5px] font-bold text-ink">{m.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-muted" />
                  {m.discussionCount ?? 0} diskusi UMKM lain
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
