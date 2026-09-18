import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid = false, className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border bg-surface px-3 py-2.5 text-[13.5px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand ${
        invalid ? "border-danger" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
