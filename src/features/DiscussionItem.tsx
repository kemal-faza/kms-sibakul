import type { Discussion } from "../types";
import { Stars } from "../components/ui/Stars";

export function DiscussionItem({ discussion }: { discussion: Discussion }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13.5px] font-bold text-ink">
          {discussion.author} — {discussion.business}
        </span>
        <span className="text-[11.5px] text-muted">{discussion.createdAt}</span>
      </div>
      <Stars value={discussion.rating} readOnly size={13} />
      <p className="text-[13px] text-muted">{discussion.body}</p>
    </div>
  );
}
