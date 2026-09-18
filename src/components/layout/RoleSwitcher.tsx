import { useEffect, useRef, useState } from "react";
import { useApp } from "../../store/AppContext";
import type { Role } from "../../types";

const ROLES: Role[] = ["Mitra UMKM", "Admin Dinas Koperasi"];

export function RoleSwitcher() {
  const { role, profile, setRole } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isAdmin = role === "Admin Dinas Koperasi";
  const subtitle = isAdmin ? "Mode Admin / Narasumber" : "Mitra UMKM";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="role-menu"
        aria-label="Ganti peran pengguna"
        className="flex items-center gap-2.5 rounded-lg px-1.5 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <span
          aria-hidden="true"
          className={`h-9 w-9 rounded-full ${isAdmin ? "bg-accent" : "bg-brand"}`}
        />
        <span className="hidden flex-col sm:flex">
          <span className="text-[12.5px] font-bold leading-tight text-ink">{profile.name}</span>
          <span className="text-[11px] leading-tight text-muted">{subtitle}</span>
        </span>
      </button>

      {open ? (
        <div
          id="role-menu"
          role="menu"
          className="absolute right-0 top-full z-20 mt-2 w-56 rounded-xl border border-line bg-surface p-1.5 shadow-lg"
        >
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              role="menuitemradio"
              aria-checked={r === role}
              onClick={() => {
                setRole(r);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] ${
                r === role ? "bg-brand-tint font-bold text-brand" : "text-ink hover:bg-canvas"
              }`}
            >
              {r}
              {r === role ? <span aria-hidden="true">✓</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
