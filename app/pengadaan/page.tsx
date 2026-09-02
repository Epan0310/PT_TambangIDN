"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, LogIn, ShieldAlert, Grid2X2 } from "lucide-react";

export default function EProcurementPage() {
  const [activeTab, setActiveTab] = useState("Semua Kategori");

  const categories = [
    "Semua Kategori",
    "Alat Berat",
    "Logistik",
    "Katering",
    "Safety (K3)",
  ];

  const tenders = [
    {
      title: "Pengadaan Suku Cadang Dump Truck Kelas 400 Ton",
      code: "TDR-2024-AB-041",
      deadline: "25 Okt 2024",
      status: "Pendaftaran Buka",
      statusType: "open",
      category: "Alat Berat",
    },
    {
      title: "Layanan Transportasi Batubara Rute Blok Selatan",
      code: "TDR-2024-LG-088",
      deadline: "28 Okt 2024",
      status: "Pendaftaran Buka",
      statusType: "open",
      category: "Logistik",
    },
    {
      title: "Penyediaan APD (Alat Pelindung Diri) Area Smelter",
      code: "TDR-2024-SF-102",
      deadline: "02 Nov 2024",
      status: "Persiapan Dokumen",
      statusType: "prep",
      category: "Safety (K3)",
    },
  ];

  const filteredTenders =
    activeTab === "Semua Kategori"
      ? tenders
      : tenders.filter((t) => t.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      {/* Container disamakan lebarnya dengan Navbar (max-w-6xl) */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* 1. HERO SECTION (Overlay Foto & Box Teks Disesuaikan) */}
        <section className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center border border-gray-200 shadow-sm">
          <Image
            src="/images/hero-procurement.png"
            alt="Operasi Tambang E-Procurement"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay Gradient Gelap pada Foto Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />

          {/* Overlay Box Teks Transparan (Glassmorphism) */}
          <div className="relative z-10 p-6 sm:p-10 max-w-xl">
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/15 rounded-xl p-6 sm:p-8 text-white space-y-4 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Portal Pengadaan &amp; Pendaftaran Rekanan Vendor Resmi
              </h1>
              <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed font-normal">
                Sistem terintegrasi untuk pendaftaran rekanan, manajemen tender,
                dan pengadaan barang/jasa di lingkungan operasional PT Tambang
                Indonesia. Mengedepankan transparansi, efisiensi, dan
                keselamatan kerja.
              </p>
            </div>
          </div>
        </section>

        {/* 2. DAFTAR TENDER TERBUKA */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-950">
                Daftar Tender Terbuka
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Kesempatan pengadaan barang dan jasa terkini.
              </p>
            </div>

            {/* Filter Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === cat
                      ? "bg-black text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Table Tender */}
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider text-[10px] font-bold">
                  <th className="py-3.5 px-4 font-bold">NAMA TENDER</th>
                  <th className="py-3.5 px-4 font-bold">KODE TENDER</th>
                  <th className="py-3.5 px-4 font-bold">BATAS AKHIR</th>
                  <th className="py-3.5 px-4 font-bold">STATUS</th>
                  <th className="py-3.5 px-4 font-bold text-right">AKSI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredTenders.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-4 font-bold text-gray-900 max-w-xs sm:max-w-md">
                      {item.title}
                    </td>
                    <td className="py-4 px-4 text-gray-500 font-mono text-[11px]">
                      {item.code}
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-medium">
                      {item.deadline}
                    </td>
                    <td className="py-4 px-4">
                      {item.statusType === "open" ? (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-md border border-emerald-200 inline-block">
                          {item.status}
                        </span>
                      ) : (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-md border border-amber-200 inline-block">
                          {item.status}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="border border-gray-300 hover:bg-black hover:text-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-lg transition">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. SPLIT SECTION (Pendaftaran Rekanan Baru & Masuk Portal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* KIRI: Pendaftaran Rekanan Baru (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Grid2X2 className="w-5 h-5 text-gray-950 shrink-0" />
                <h3 className="text-xl font-bold text-gray-950">
                  Pendaftaran Rekanan Baru
                </h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-lg">
                Ikuti panduan registrasi tiga langkah untuk menjadi vendor resmi
                yang terverifikasi di sistem e-procurement kami.
              </p>
            </div>

            {/* Stepper Steps */}
            <div className="py-6 px-2">
              <div className="relative flex items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-gray-200 -z-0" />

                {/* Step 1 */}
                <div className="relative z-10 bg-white px-2 flex flex-col items-center text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-black text-white font-bold text-xs flex items-center justify-center shadow">
                    1
                  </div>
                  <span className="text-[11px] font-bold text-gray-900 max-w-[90px] leading-tight">
                    Legalitas &amp; Administrasi
                  </span>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 bg-white px-2 flex flex-col items-center text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-300 text-gray-600 font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <span className="text-[11px] font-medium text-gray-500 max-w-[90px] leading-tight">
                    Sertifikasi K3LH
                  </span>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 bg-white px-2 flex flex-col items-center text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-300 text-gray-600 font-bold text-xs flex items-center justify-center">
                    3
                  </div>
                  <span className="text-[11px] font-medium text-gray-500 max-w-[90px] leading-tight">
                    Portofolio &amp; Kapasitas
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button Orange */}
            <div className="pt-2 flex justify-end">
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition">
                Mulai Pendaftaran
              </button>
            </div>
          </div>

          {/* KANAN: Masuk Portal (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-950">Masuk Portal</h3>
              <p className="text-xs text-gray-500 mt-1">
                Akses khusus untuk vendor terdaftar.
              </p>

              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1 tracking-wider">
                    ID Rekanan / Email
                  </label>
                  <input
                    type="text"
                    placeholder="VND-XXXX-XXXX"
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1 tracking-wider">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-600 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span>Ingat Saya</span>
                  </label>
                  <a
                    href="#"
                    className="font-bold text-gray-900 hover:underline"
                  >
                    Lupa Sandi?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-xs py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-sm mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  Masuk Sistem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BANNER (Kepatuhan & Etika Bisnis) */}
        <section className="bg-slate-100/80 border border-gray-200 border-l-4 border-l-amber-500 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-950">
                Kepatuhan &amp; Etika Bisnis (Anti-Korupsi)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-2xl">
                PT Tambang Indonesia menerapkan kebijakan Zero Tolerance
                terhadap suap dan korupsi. Seluruh rekanan wajib mematuhi
                standar integritas tertinggi selama proses pengadaan dan
                operasional.
              </p>
            </div>
          </div>

          <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition flex items-center justify-center gap-2 shrink-0 shadow-sm whitespace-nowrap">
            <Download className="w-4 h-4 text-gray-600" />
            Unduh Vendor Code of Conduct
          </button>
        </section>
      </div>
    </div>
  );
}
