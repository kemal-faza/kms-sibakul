import { PageShell } from "../components/layout/PageShell";
import { Card } from "../components/ui/Card";
import { DiscussionItem } from "../features/DiscussionItem";
import { FeedbackForm } from "../features/FeedbackForm";
import { materials } from "../data/mock";
import { useApp } from "../store/AppContext";

const PINNED_TITLE = "Mengurus NIB dan Sertifikasi Halal";

export function UmpanBalikPage() {
  const { discussions } = useApp();
  const material = materials.find((m) => m.title === PINNED_TITLE);

  return (
    <PageShell eyebrow="MATERI SELESAI DIPELAJARI" title={material?.title ?? PINNED_TITLE}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="flex flex-col gap-[18px] p-[26px]">
          <h2 className="text-base font-bold text-ink">Beri Umpan Balik</h2>
          <FeedbackForm />
        </Card>

        <Card className="flex flex-col gap-4 p-[26px]">
          <h2 className="text-base font-bold text-ink">Diskusi dari UMKM Lain</h2>
          <div className="flex flex-col divide-y divide-line">
            {discussions.map((d) => (
              <div key={d.id} className="py-4 first:pt-0 last:pb-0">
                <DiscussionItem discussion={d} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
