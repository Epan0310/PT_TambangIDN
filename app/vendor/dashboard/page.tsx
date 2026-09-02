"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  LogOut,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  TrendingUp,
  Download,
  Bell,
} from "lucide-react";

export default function VendorDashboardPage() {
  const router = useRouter();

  // Mock data status penawaran vendor
  const [bids] = useState([
    {
      id: "BID-8902",
      tenderCode: "TDR-2024-AB-041",
      tenderTitle: "Suku Cadang Dump Truck Kelas 400 Ton",
      submitDate: "20 Okt 2026",
      bidValue: "Rp 4.200.000.000",
      status: "Verifikasi Berkas",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: "BID-7710",
      tenderCode: "TDR-2024-LG-088",
      tenderTitle: "Layanan Transportasi Batubara Rute Blok Selatan",
      submitDate: "15 Okt 2026",
      bidValue: "Rp 1.750.000.000",
      status: "Evaluasi Teknis",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
  ]);

  const handleLogout = () => {
    router.push("/pengadaan");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      {/* Top Bar Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black text-white rounded-lg">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-sm text-gray-900 leading-tight">
                Portal Rekanan Mitra
              </h1>
              <p className="text-[11px] text-gray-500">PT Tambang Indonesia</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-black hover:bg-slate-100 rounded-lg transition relative"
              title="Notifikasi"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
            </button>

            <div className="h-6 w-px bg-gray-200" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Banner Welcome & Company Summary */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">
                PT Berkah Mining Utama
              </h2>
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                Terverifikasi
              </span>
            </div>
            <p className="text-xs text-gray-500">
              ID Vendor:{" "}
              <span className="font-mono font-bold text-gray-700">
                VND-2026-9901
              </span>{" "}
              • Kategori: Alat Berat & Transportasi
            </p>
          </div>

          <button
            onClick={() => router.push("/pengadaan")}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition flex items-center justify-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            Cari Tender Baru
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-semibold">Tender Diikuti</span>
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-2xl font-extrabold text-gray-900">2</p>
            <span className="text-[10px] text-gray-400">
              Aktif dalam proses
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-semibold">Penawaran Menunggu</span>
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-2xl font-extrabold text-gray-900">1</p>
            <span className="text-[10px] text-amber-600 font-medium">
              Tahap verifikasi berkas
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-semibold">Proyek Dimenangkan</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-extrabold text-gray-900">0</p>
            <span className="text-[10px] text-gray-400">Tahun 2026</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-semibold">Masa Berluku K3LH</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-extrabold text-emerald-700">140 Hari</p>
            <span className="text-[10px] text-gray-400">Sertifikat aktif</span>
          </div>
        </div>

        {/* Tabel Penawaran Aktif */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Status Penawaran Saya
              </h3>
              <p className="text-xs text-gray-500">
                Daftar tender yang sedang diikuti oleh perusahaan Anda.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider text-[10px] font-bold">
                  <th className="py-3.5 px-4">No. Penawaran</th>
                  <th className="py-3.5 px-4">Nama Tender</th>
                  <th className="py-3.5 px-4">Nilai Penawaran</th>
                  <th className="py-3.5 px-4">Tanggal Kirim</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {bids.map((bid) => (
                  <tr key={bid.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-4 font-mono font-bold text-gray-900">
                      {bid.id}
                    </td>
                    <td className="py-4 px-4 max-w-xs">
                      <span className="font-bold text-gray-900 block truncate">
                        {bid.tenderTitle}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400">
                        {bid.tenderCode}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-700">
                      {bid.bidValue}
                    </td>
                    <td className="py-4 px-4 text-gray-500">
                      {bid.submitDate}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-md border inline-block ${bid.badgeColor}`}
                      >
                        {bid.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          alert(`Membuka dokumen penawaran ${bid.id}`)
                        }
                        className="border border-gray-300 hover:bg-black hover:text-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" /> Berkasp
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Status Dokumen Legalitas Notice */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-amber-950">
              Pembaruan Dokumen K3LH Berkala
            </h4>
            <p className="text-amber-800/90 leading-relaxed">
              Pastikan Anda mengunggah laporan audit K3LH semester terbaru
              sebelum melakukan penawaran pada tender kategori High-Risk (Alat
              Berat & Tambang Dalam).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
