# Pusat Pengetahuan — KMS SiBakul Jogja

Prototipe front-end untuk Knowledge Management System pendukung pembinaan UMKM
SiBakul Jogja. Mengimplementasikan empat frame dari mockup Figma "Mockup KMS SiBakul Jogja".

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
npm test         # unit test (Vitest)
```

## Halaman

| Rute | Halaman |
|---|---|
| `/repositori` | Repositori & Pencarian (pencarian + filter kategori) |
| `/validasi` | Input & Validasi Pengetahuan (form + antrian validasi) |
| `/rekomendasi` | Rekomendasi |
| `/umpan-balik` | Umpan Balik & Diskusi |

Filter kategori repositori tersimpan di URL (`?kategori=`). Ganti peran
(Mitra UMKM / Admin Dinas Koperasi) lewat menu di kanan atas; aksi
`Setujui` / `Perlu Revisi` hanya aktif dalam mode Admin.

## Catatan

- Data adalah mock in-memory; memuat ulang halaman mengembalikan state awal.
- Tidak ada backend, autentikasi, atau unggah berkas sungguhan.
