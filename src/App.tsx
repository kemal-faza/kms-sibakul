import { Navigate, Route, Routes } from "react-router";
import { TopNav } from "./components/layout/TopNav";
import { RepositoriPage } from "./pages/RepositoriPage";
import { ValidasiPage } from "./pages/ValidasiPage";
import { RekomendasiPage } from "./pages/RekomendasiPage";
import { UmpanBalikPage } from "./pages/UmpanBalikPage";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/repositori" replace />} />
        <Route path="/repositori" element={<RepositoriPage />} />
        <Route path="/validasi" element={<ValidasiPage />} />
        <Route path="/rekomendasi" element={<RekomendasiPage />} />
        <Route path="/umpan-balik" element={<UmpanBalikPage />} />
        <Route path="*" element={<Navigate to="/repositori" replace />} />
      </Routes>
    </div>
  );
}
