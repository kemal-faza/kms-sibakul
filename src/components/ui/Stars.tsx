import { useState } from "react";

interface StarsProps {
  value: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: number;
}

export function Stars({ value, onChange, readOnly = false, size = 22 }: StarsProps) {
  const [hover, setHover] = useState<number | null>(null);

  function step(delta: number) {
    if (!onChange) return;
    onChange(Math.min(5, Math.max(1, value + delta)));
  }

  if (readOnly) {
    return (
      <span
        role="img"
        aria-label={`${value} dari 5 bintang`}
        className="flex items-center gap-1 leading-none"
        style={{ fontSize: size }}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            aria-hidden="true"
            className={n <= value ? "text-accent" : "text-inactive"}
          >
            ★
          </span>
        ))}
      </span>
    );
  }

  const shown = hover ?? value;

  return (
    <div
      role="radiogroup"
      aria-label="Penilaian bintang"
      className="flex items-center gap-1"
      onMouseLeave={() => setHover(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          e.preventDefault();
          step(1);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          e.preventDefault();
          step(-1);
        }
      }}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} bintang`}
          onMouseEnter={() => setHover(n)}
          onClick={() => onChange?.(n)}
          className={`cursor-pointer rounded p-1 leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
            n <= shown ? "text-accent" : "text-inactive"
          }`}
          style={{ fontSize: size }}
        >
          ★
        </button>
      ))}
    </div>
  );
}
