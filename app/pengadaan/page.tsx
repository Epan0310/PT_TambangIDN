"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, LogIn, ShieldAlert, Grid2X2 } from "lucide-react";
import { useLanguage, dictionary } from "@/context/LanguageContext";
import RegisterModal from "@/components/procurement/RegisterModal";
import TenderDetailModal, {
  TenderData,
} from "@/components/procurement/TenderDetailModal";

export default function EProcurementPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("ALL");

  // State Modal Pendaftaran
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // State Modal Detail Tender
  const [selectedTender, setSelectedTender] = useState<TenderData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // State Login Form
  const [vendorId, setVendorId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendorId || !password) {
      alert("Harap isi ID Rekanan dan Kata Sandi!");
      return;
    }
    alert(`Login berhasil untuk ID Vendor: ${vendorId}`);
  };

  const categories = [
    { id: "ALL", labelKey: "cat_all" },
    { id: "HEAVY", labelKey: "cat_heavy" },
    { id: "LOGISTICS", labelKey: "cat_logistics" },
    { id: "CATERING", labelKey: "cat_catering" },
    { id: "SAFETY", labelKey: "cat_safety" },
  ] as const;

  const tenders = [
    {
      titleKey: "t1_title",
      code: "TDR-2024-AB-041",
      deadline: "25 Okt 2024",
      statusKey: "status_open",
      statusType: "open" as const,
      categoryId: "HEAVY",
      categoryName: "Alat Berat",
      location: "Site Tambang Sumbawa",
      estimatedValue: "Rp 4.5 Milyar",
      scopeOfWork: [
        "Penyediaan 5 unit Dump Truck Kelas 400 Ton operasional pertambangan.",
        "Penyediaan driver & tim maintenance tersertifikasi K3LH.",
        "Jaminan garansi ketersediaan armada (availability rate >= 92%).",
      ],
    },
    {
      titleKey: "t2_title",
      code: "TDR-2024-LG-088",
      deadline: "28 Okt 2024",
      statusKey: "status_open",
      statusType: "open" as const,
      categoryId: "LOGISTICS",
      categoryName: "Logistik",
      location: "Rute Blok Selatan - Smelter",
      estimatedValue: "Rp 1.8 Milyar",
      scopeOfWork: [
        "Layanan pengangkutan konsentrat batubara & mineral rutin.",
        "Penyediaan armada truk trailer berstandar keamanan tinggi.",
        "Monitoring GPS real-time dan sistem tracking rute pengiriman.",
      ],
    },
    {
      titleKey: "t3_title",
      code: "TDR-2024-SF-102",
      deadline: "02 Nov 2024",
      statusKey: "status_prep",
      statusType: "prep" as const,
      categoryId: "SAFETY",
      categoryName: "Keselamatan / APD",
      location: "Area Smelter Utama",
      estimatedValue: "Rp 850 Juta",
      scopeOfWork: [
        "Pengadaan APD lengkap (Helm, Sepatu Safety, Baju Tahan Panas).",
        "Sertifikasi SNI dan standar keselamatan pertambangan internasional.",
      ],
    },
  ];

  const filteredTenders =
    activeTab === "ALL"
      ? tenders
      : tenders.filter((item) => item.categoryId === activeTab);

  const handleOpenDetail = (item: (typeof tenders)[0]) => {
    const tenderTitle = t(item.titleKey as keyof typeof dictionary);
    const tenderStatusLabel = t(item.statusKey as keyof typeof dictionary);

    setSelectedTender({
      title: tenderTitle,
      code: item.code,
      deadline: item.deadline,
      statusType: item.statusType,
      statusLabel: tenderStatusLabel,
      category: item.categoryName,
      location: item.location,
      estimatedValue: item.estimatedValue,
      scopeOfWork: item.scopeOfWork,
    });
    setIsDetailOpen(true);
  };

  const handleApplyBidFromDetail = () => {
    // Arahkan user ke Form Login portal
    const loginSection = document.getElementById("login");
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* 1. HERO SECTION */}
        <section className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center border border-gray-200 shadow-sm">
          <Image
            src="/images/hero-procurement.png"
            alt="Operasi Tambang E-Procurement"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />

          <div className="relative z-10 p-6 sm:p-10 max-w-xl">
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/15 rounded-xl p-6 sm:p-8 text-white space-y-4 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {t("hero_title")}
              </h1>
              <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed font-normal">
                {t("hero_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* 2. DAFTAR TENDER TERBUKA */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-950">
                {t("tender_title")}
              </h2>
              <p className="text-xs text-gray-500 mt-1">{t("tender_desc")}</p>
            </div>

            {/* Filter Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === cat.id
                      ? "bg-black text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {t(cat.labelKey as keyof typeof dictionary)}
                </button>
              ))}
            </div>
          </div>

          {/* Table Tender */}
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider text-[10px] font-bold">
                  <th className="py-3.5 px-4 font-bold">{t("th_nama")}</th>
                  <th className="py-3.5 px-4 font-bold">{t("th_kode")}</th>
                  <th className="py-3.5 px-4 font-bold">{t("th_batas")}</th>
                  <th className="py-3.5 px-4 font-bold">{t("th_status")}</th>
                  <th className="py-3.5 px-4 font-bold text-right">
                    {t("th_aksi")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredTenders.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-4 font-bold text-gray-900 max-w-xs sm:max-w-md">
                      {t(item.titleKey as keyof typeof dictionary)}
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
                          {t(item.statusKey as keyof typeof dictionary)}
                        </span>
                      ) : (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-md border border-amber-200 inline-block">
                          {t(item.statusKey as keyof typeof dictionary)}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleOpenDetail(item)}
                        className="border border-gray-300 hover:bg-black hover:text-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-lg transition"
                      >
                        {t("btn_detail")}
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
          {/* KIRI: Pendaftaran Rekanan Baru */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Grid2X2 className="w-5 h-5 text-gray-950 shrink-0" />
                <h3 className="text-xl font-bold text-gray-950">
                  {t("reg_title")}
                </h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-lg">
                {t("reg_desc")}
              </p>
            </div>

            {/* Stepper Steps */}
            <div className="py-6 px-2">
              <div className="relative flex items-center justify-between">
                <div className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-gray-200 -z-0" />

                {/* Step 1 */}
                <div className="relative z-10 bg-white px-2 flex flex-col items-center text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-black text-white font-bold text-xs flex items-center justify-center shadow">
                    1
                  </div>
                  <span className="text-[11px] font-bold text-gray-900 max-w-[90px] leading-tight">
                    {t("step_1")}
                  </span>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 bg-white px-2 flex flex-col items-center text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-300 text-gray-600 font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <span className="text-[11px] font-medium text-gray-500 max-w-[90px] leading-tight">
                    {t("step_2")}
                  </span>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 bg-white px-2 flex flex-col items-center text-center space-y-2">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-300 text-gray-600 font-bold text-xs flex items-center justify-center">
                    3
                  </div>
                  <span className="text-[11px] font-medium text-gray-500 max-w-[90px] leading-tight">
                    {t("step_3")}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button Orange (Membuka Modal) */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsRegisterOpen(true)}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition"
              >
                {t("btn_start_reg")}
              </button>
            </div>
          </div>

          {/* KANAN: Masuk Portal */}
          <div
            id="login"
            className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-950">
                {t("login_title")}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{t("login_desc")}</p>

              <form className="mt-5 space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1 tracking-wider">
                    {t("lbl_vendor_id")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VND-XXXX-XXXX"
                    value={vendorId}
                    onChange={(e) => setVendorId(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1 tracking-wider">
                    {t("lbl_password")}
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-600 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span>{t("lbl_remember")}</span>
                  </label>
                  <a
                    href="#"
                    className="font-bold text-gray-900 hover:underline"
                  >
                    {t("lbl_forgot")}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-xs py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-sm mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  {t("btn_login")}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BANNER */}
        <section className="bg-slate-100/80 border border-gray-200 border-l-4 border-l-amber-500 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-950">
                {t("compliance_title")}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-2xl">
                {t("compliance_desc")}
              </p>
            </div>
          </div>

          <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition flex items-center justify-center gap-2 shrink-0 shadow-sm whitespace-nowrap">
            <Download className="w-4 h-4 text-gray-600" />
            {t("btn_download_coc")}
          </button>
        </section>
      </div>

      {/* MODAL POPUP REGISTRASI */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* MODAL DETAIL TENDER */}
      <TenderDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        tender={selectedTender}
        onApplyBid={handleApplyBidFromDetail}
      />
    </div>
  );
}
