import type { Submission } from "../types";
import { Badge, type BadgeVariant } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const statusVariant: Record<Submission["status"], BadgeVariant> = {
  "Menunggu Validasi": "pending",
  Disetujui: "approved",
  "Perlu Revisi": "revision",
};

export function SubmissionItem({
  submission,
  canAction,
  onApprove,
  onRevision,
}: {
  submission: Submission;
  canAction: boolean;
  onApprove: () => void;
  onRevision: () => void;
}) {
  const pending = submission.status === "Menunggu Validasi";

  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-line p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14.5px] font-bold text-ink">{submission.title}</h3>
          <p className="text-xs text-muted">
            Diajukan oleh {submission.submitter}
            {submission.submitterRole ? ` ${submission.submitterRole}` : ""} •{" "}
            {submission.category} • {submission.format}
          </p>
        </div>
        <Badge variant={statusVariant[submission.status]}>{submission.status}</Badge>
      </div>

      {pending ? (
        <div className="flex items-center gap-2">
          <Button onClick={onApprove} disabled={!canAction}>
            Setujui
          </Button>
          <Button variant="secondary" onClick={onRevision} disabled={!canAction}>
            Perlu Revisi
          </Button>
        </div>
      ) : null}
    </div>
  );
}
