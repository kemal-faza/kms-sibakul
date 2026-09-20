import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { RoleSwitcher } from "./RoleSwitcher";

const LINKS = [
  { to: "/repositori", label: "Repositori" },
  { to: "/rekomendasi", label: "Rekomendasi" },
  { to: "/validasi", label: "Validasi" },
  { to: "/umpan-balik", label: "Umpan Balik" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface">
      <nav className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-2 px-4 md:px-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-8 w-8 rounded-full border border-brand bg-brand-tint" />
          <span className="flex flex-col">
            <span className="text-[15px] font-bold leading-tight text-ink">
              Knowledge Management System
            </span>
            <span className="text-[11px] leading-tight text-muted">
              Pendukung Pembinaan SiBakul Jogja
            </span>
          </span>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-[13.5px] ${
                  isActive
                    ? "bg-brand-tint font-bold text-brand"
                    : "font-medium text-muted hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <RoleSwitcher />
          <button
            type="button"
            className="rounded-lg border border-line px-3 py-2 text-sm text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Buka menu navigasi"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-surface px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm ${
                    isActive ? "bg-brand-tint font-bold text-brand" : "font-medium text-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
