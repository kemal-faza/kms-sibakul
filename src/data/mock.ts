import type { ContinueLearning, Discussion, Material, Submission } from "../types";

export const materials: Material[] = [
  {
    id: "m1",
    title: "Dasar Pemasaran di Marketplace",
    summary:
      "Mengenal cara membuka toko dan mengunggah produk pertama di marketplace.",
    category: "Pemasaran",
    format: "Video",
    views: 1240,
    length: "18 menit",
    icon: "V",
  },
  {
    id: "m2",
    title: "Menyusun Laporan Keuangan Sederhana",
    summary:
      "Template pencatatan pemasukan dan pengeluaran harian untuk usaha kecil.",
    category: "Pembukuan Keuangan",
    format: "Dokumen",
    views: 890,
    length: "12 halaman",
    icon: "D",
  },
  {
    id: "m3",
    title: "Mengurus NIB dan Sertifikasi Halal",
    summary:
      "Langkah pengajuan Nomor Induk Berusaha dan sertifikasi halal bagi UMKM pangan.",
    category: "Legalitas & Perizinan",
    format: "Artikel",
    views: 2010,
    length: "8 menit baca",
    icon: "A",
    discussionCount: 84,
  },
  {
    id: "m4",
    title: "Fotografi Produk dengan Ponsel",
    summary:
      "Teknik pencahayaan dan sudut pengambilan gambar produk untuk katalog daring.",
    category: "Produksi & Kemasan",
    format: "Video",
    views: 1560,
    length: "22 menit",
    icon: "V",
  },
  {
    id: "m5",
    title: "Strategi Harga dan Margin Usaha",
    summary:
      "Cara menghitung harga jual yang tetap kompetitif tanpa mengorbankan margin.",
    category: "Pemasaran",
    format: "Artikel",
    views: 734,
    length: "6 menit baca",
    icon: "A",
    discussionCount: 61,
  },
  {
    id: "m6",
    title: "Mengajukan Pembiayaan lewat KUR",
    summary:
      "Syarat dan alur pengajuan Kredit Usaha Rakyat bagi UMKM yang telah terdaftar.",
    category: "Akses Permodalan",
    format: "Dokumen",
    views: 1102,
    length: "10 halaman",
    icon: "D",
    discussionCount: 47,
  },
];

export const submissions: Submission[] = [
  {
    id: "s1",
    title: "Teknik Negosiasi dengan Supplier",
    submitter: "Ibu Sri Wahyuni",
    submitterRole: "(Narasumber)",
    category: "Pemasaran",
    format: "Artikel",
    status: "Menunggu Validasi",
  },
  {
    id: "s2",
    title: "Panduan Pengemasan Produk Ekspor",
    submitter: "Bapak Andi Prasetyo",
    submitterRole: "(Pendamping)",
    category: "Produksi & Kemasan",
    format: "Dokumen",
    status: "Menunggu Validasi",
  },
  {
    id: "s3",
    title: "Simulasi Pengajuan KUR Daring",
    submitter: "Tim Bank BPD DIY",
    category: "Akses Permodalan",
    format: "Video",
    status: "Disetujui",
  },
  {
    id: "s4",
    title: "Etika Melayani Pelanggan Daring",
    submitter: "Ibu Sri Wahyuni",
    submitterRole: "(Narasumber)",
    category: "Pemasaran",
    format: "Artikel",
    status: "Perlu Revisi",
  },
];

export const discussions: Discussion[] = [
  {
    id: "d1",
    author: "Bu Marlina",
    business: "Batik Kencana",
    rating: 5,
    createdAt: "3 hari lalu",
    body: "Alur pengajuan jadi jelas, dokumen saya lengkap hanya dalam sehari.",
  },
  {
    id: "d2",
    author: "Pak Yudi",
    business: "Kerajinan Kayu Sentosa",
    rating: 4,
    createdAt: "1 minggu lalu",
    body: "Sangat membantu, hanya perlu contoh dokumen yang lebih lengkap.",
  },
  {
    id: "d3",
    author: "Bu Retno",
    business: "Kopi Girli",
    rating: 5,
    createdAt: "2 minggu lalu",
    body: "Sertifikasi halal usaha saya terbit setelah mengikuti langkah di sini.",
  },
];

export const continueLearning: ContinueLearning = {
  materialId: "m2",
  progress: 60,
  reason:
    'Direkomendasikan karena Anda menyelesaikan "Pemasaran Digital Dasar" dan usaha Anda terdaftar pada kategori Kuliner.',
};

export const recommendedIds: string[] = ["m7", "m8", "m9"];

export const popularIds: string[] = ["m3", "m5", "m6"];

// Recommendation-only materials (spec Appendix A, screen 3). Kept OUT of `materials`
// so the repository still shows exactly the six specified items.
export const recommendedMaterials: Material[] = [
  {
    id: "m7",
    title: "Menghitung Harga Pokok Produksi Makanan",
    summary: "Menghitung harga pokok produksi untuk usaha kuliner.",
    category: "Pembukuan Keuangan",
    format: "Artikel",
    views: 0,
    length: "7 menit baca",
    icon: "A",
  },
  {
    id: "m8",
    title: "Standar Keamanan Pangan untuk UMKM Kuliner",
    summary: "Standar keamanan pangan yang wajib dipenuhi UMKM kuliner.",
    category: "Legalitas & Perizinan",
    format: "Dokumen",
    views: 0,
    length: "9 halaman",
    icon: "D",
  },
  {
    id: "m9",
    title: "Foto Menu yang Menjual di Media Sosial",
    summary: "Teknik memotret menu agar menarik di media sosial.",
    category: "Pemasaran",
    format: "Video",
    views: 0,
    length: "15 menit",
    icon: "V",
  },
];

// All materials, for id lookups that must also resolve recommendation items.
export const allMaterials: Material[] = [...materials, ...recommendedMaterials];
