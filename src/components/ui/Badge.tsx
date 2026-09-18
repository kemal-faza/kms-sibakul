import type { ReactNode } from "react";

export type BadgeVariant = "category" | "pending" | "approved" | "revision";

const styles: Record<BadgeVariant, string> = {
  category: "bg-accent-tint text-accent",
  pending: "bg-accent-tint text-accent",
  approved: "bg-brand-tint text-brand",
  revision: "bg-danger-tint text-danger",
};

export function Badge({
  variant = "category",
  children,
}: {
  variant?: BadgeVariant;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[10.5px] font-bold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
