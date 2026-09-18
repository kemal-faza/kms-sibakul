export type Category =
  | "Pemasaran"
  | "Legalitas & Perizinan"
  | "Pembukuan Keuangan"
  | "Produksi & Kemasan"
  | "Akses Permodalan";

export type MaterialFormat = "Artikel" | "Dokumen" | "Video";

export interface Material {
  id: string;
  title: string;
  summary: string;
  category: Category;
  format: MaterialFormat;
  views: number;
  length: string;
  icon: string;
  discussionCount?: number;
}

export type SubmissionStatus = "Menunggu Validasi" | "Disetujui" | "Perlu Revisi";

export interface Submission {
  id: string;
  title: string;
  submitter: string;
  submitterRole?: string;
  category: Category;
  format: MaterialFormat;
  status: SubmissionStatus;
}

export interface Discussion {
  id: string;
  author: string;
  business: string;
  rating: number;
  createdAt: string;
  body: string;
}

export type Role = "Mitra UMKM" | "Admin Dinas Koperasi";

export interface Profile {
  name: string;
  role: Role;
  industry: string;
}

export interface ContinueLearning {
  materialId: string;
  progress: number;
  reason: string;
}
