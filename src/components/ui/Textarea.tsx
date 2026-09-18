import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function Textarea({ invalid = false, className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`min-h-[68px] w-full resize-none rounded-lg border bg-surface px-3 py-3.5 text-[13.5px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand ${
        invalid ? "border-danger" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
