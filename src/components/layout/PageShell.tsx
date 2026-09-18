import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-10 md:py-12">
      <header className="flex flex-col gap-1.5">
        {eyebrow ? (
          <p className="text-xs font-bold tracking-wide text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="text-2xl font-bold leading-tight text-ink md:text-[26px]">{title}</h1>
        {description ? <p className="max-w-2xl text-sm text-muted">{description}</p> : null}
      </header>
      <div className="mt-7 flex flex-col gap-6">{children}</div>
    </main>
  );
}
