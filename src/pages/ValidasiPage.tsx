import { useState, type FormEvent } from "react";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { SubmissionItem } from "../features/SubmissionItem";
import { useApp } from "../store/AppContext";
import type { Category, MaterialFormat } from "../types";

const CATEGORIES: Category[] = [
  "Pemasaran",
  "Legalitas & Perizinan",
  "Pembukuan Keuangan",
  "Produksi & Kemasan",
  "Akses Permodalan",
];

const FORMATS: MaterialFormat[] = ["Artikel", "Dokumen", "Video"];

const selectClass =
  "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-[13.5px] text-ink focus:outline-none focus:ring-2 focus:ring-brand";

export function ValidasiPage() {
  const { role, profile, submissions, addSubmission, setStatus } = useApp();
  const isAdmin = role === "Admin Dinas Koperasi";

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Pemasaran");
  const [format, setFormat] = useState<MaterialFormat>("Artikel");
  const [summary, setSummary] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const pendingCount = submissions.filter((s) => s.status === "Menunggu Validasi").length;

  function submit(e: FormEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (trimmed.length < 3) {
      setError("Judul materi wajib diisi (min. 3 karakter).");
      return;
    }
    addSubmission({
      id: `s-${Date.now()}`,
      title: trimmed,
      submitter: profile.name,
      submitterRole: "(Pendamping)",
      category,
      format,
      status: "Menunggu Validasi",
    });
    setTitle("");
    setSummary("");
    setFileName("");
    setError("");
    setCategory("Pemasaran");
    setFormat("Artikel");
  }

  return (
    <PageShell
      title="Input & Validasi Pengetahuan"
      description="Narasumber dan pendamping mengajukan materi baru; admin memeriksa sebelum masuk ke repositori."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="flex flex-col gap-4 p-[26px]">
          <h2 className="text-base font-bold text-ink">Tambah Pengetahuan Baru</h2>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-bold text-ink">Judul Materi</span>
              <Input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (error) setError("");
                }}
                placeholder="mis. Teknik Negosiasi dengan Supplier"
                invalid={Boolean(error)}
              />
              {error ? <span className="text-xs text-danger">{error}</span> : null}
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-bold text-ink">Kategori</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className={selectClass}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-bold text-ink">Format</span>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as MaterialFormat)}
                  className={selectClass}
                >
                  {FORMATS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-bold text-ink">Ringkasan Singkat</span>
              <Input
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Jelaskan inti materi dalam 1–2 kalimat"
              />
            </label>

            <div className="flex flex-col items-center gap-2 rounded-[10px] border border-dashed border-line p-[22px] text-center">
              <span className="text-[12.5px] font-bold text-ink">Berkas Materi</span>
              <span className="text-[12.5px] text-muted">
                {fileName || "Seret berkas ke sini, atau"}
              </span>
              <label className="cursor-pointer rounded-lg border border-line bg-surface px-3.5 py-1.5 text-[12.5px] font-bold text-ink">
                Pilih Berkas
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
            </div>

            <Button type="submit" className="w-full py-2.5">
              Ajukan untuk Validasi
            </Button>
          </form>
        </Card>

        <Card className="flex flex-col gap-3.5 p-[26px]">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-bold text-ink">Antrian Validasi</h2>
            <span className="text-xs text-muted">{pendingCount} menunggu tinjauan</span>
          </div>

          {!isAdmin ? (
            <p className="text-xs text-muted">
              Ganti ke mode Admin untuk meninjau pengajuan.
            </p>
          ) : null}

          {submissions.length === 0 ? (
            <p className="text-sm text-muted">Tidak ada antrian validasi.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {submissions.map((s) => (
                <SubmissionItem
                  key={s.id}
                  submission={s}
                  canAction={isAdmin}
                  onApprove={() => setStatus(s.id, "Disetujui")}
                  onRevision={() => setStatus(s.id, "Perlu Revisi")}
                />
              ))}
            </div>
          )}
        </Card>
      </div>
    </PageShell>
  );
}
