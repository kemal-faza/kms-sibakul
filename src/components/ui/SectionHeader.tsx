import type { ReactNode } from "react";

export function SectionHeader({ children }: { children: ReactNode }) {
  return <h2 className="text-base font-bold text-ink">{children}</h2>;
}
