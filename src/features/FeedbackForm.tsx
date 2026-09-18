import { useState, type FormEvent } from "react";
import { Button } from "../components/ui/Button";
import { Stars } from "../components/ui/Stars";
import { Textarea } from "../components/ui/Textarea";
import { useApp } from "../store/AppContext";

const OPTIONS = ["Sudah diterapkan", "Sedang direncanakan", "Belum diterapkan"];

export function FeedbackForm() {
  const { profile, addFeedback } = useApp();
  const [rating, setRating] = useState(0);
  const [applied, setApplied] = useState(OPTIONS[0]);
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function touch() {
    if (success) setSuccess(false);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (rating === 0) {
      setError("Pilih penilaian bintang.");
      setSuccess(false);
      return;
    }
    addFeedback({
      id: `d-${Date.now()}`,
      author: profile.name,
      business: profile.industry,
      rating,
      createdAt: "Baru saja",
      body: story.trim() || "Sudah diterapkan.",
    });
    setRating(0);
    setApplied(OPTIONS[0]);
    setStory("");
    setError("");
    setSuccess(true);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-[18px]">
      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-bold text-ink">Seberapa membantu materi ini?</span>
        <Stars
          value={rating}
          onChange={(v) => {
            setRating(v);
            if (error) setError("");
            touch();
          }}
        />
        {error ? <span className="text-xs text-danger">{error}</span> : null}
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-[13px] font-bold text-ink">
          Apakah sudah diterapkan dalam usaha Anda?
        </legend>
        {OPTIONS.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-2 text-[13.5px] text-ink">
            <input
              type="radio"
              name="applied"
              value={option}
              checked={applied === option}
              onChange={() => {
                setApplied(option);
                touch();
              }}
              className="h-4 w-4 accent-brand"
            />
            {option}
          </label>
        ))}
      </fieldset>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-bold text-ink">
          Ceritakan penerapan atau kendala Anda
        </span>
        <Textarea
          value={story}
          onChange={(e) => {
            setStory(e.target.value);
            touch();
          }}
          placeholder="mis. Dokumen usaha saya belum lengkap sehingga proses NIB tertunda..."
        />
      </label>

      <Button type="submit" className="w-full py-2.5">
        Kirim Umpan Balik
      </Button>

      {success ? (
        <p className="text-xs font-semibold text-brand" role="status">
          Terima kasih, umpan balik Anda terkirim.
        </p>
      ) : null}
    </form>
  );
}
