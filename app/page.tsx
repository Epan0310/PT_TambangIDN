"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Globe,
  Award,
  Users,
  Building2,
  Leaf,
  FileText,
  CheckCircle2,
  Search,
  Activity,
  HardHat,
  Anchor,
  Zap,
  Filter,
} from "lucide-react";
import { useLanguage, dictionary } from "@/context/LanguageContext";

type StatItem = {
  valueKey: keyof typeof dictionary;
  labelKey: keyof typeof dictionary;
  color?: "emerald" | "default";
};

export default function Home() {
  const { t } = useLanguage();

  // --- 1. HERO SLIDER LOGIC ---
  const slides = [
    {
      id: 1,
      image: "/images/hero-1.jpg",
      badge: "Eksplorasi & Operasi Utama",
      titleKey: "home_hero_title",
      titleFallback: "Menambang untuk Masa Depan Berkelanjutan",
      descKey: "home_hero_desc",
      descFallback:
        "Berkomitmen pada keunggulan operasional dan tanggung jawab lingkungan dalam mengelola sumber daya alam Indonesia.",
      primaryBtnText: "Eksplorasi Operasi",
      primaryBtnLink: "/operasi",
    },
    {
      id: 2,
      image: "/images/hero-2.jpg",
      badge: "Komitmen ESG & Reklamasi",
      titleFallback: "Inovasi Pertambangan Ramah Lingkungan & K3LH",
      descFallback:
        "Penerapan teknologi ramah lingkungan, target Net-Zero Emission, dan program rehabilitasi lahan tambang secara berkelanjutan.",
      primaryBtnText: "Laporan Keberlanjutan",
      primaryBtnLink: "/keberlanjutan",
    },
    {
      id: 3,
      image: "/images/hero-3.jpg",
      badge: "Tata Kelola & Kemitraan",
      titleFallback: "Portal E-Procurement Transparan & Terintegrasi",
      descFallback:
        "Membangun rantai pasok tangguh bersama ribuan vendor dan mitra kerja dengan tata kelola bisnis yang akuntabel.",
      primaryBtnText: "Portal Pengadaan",
      primaryBtnLink: "/pengadaan",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // --- 2. STATS DATA ---
  const stats: StatItem[] = [
    {
      valueKey: "home_stat1_val",
      labelKey: "home_stat1_label",
      color: "default",
    },
    {
      valueKey: "home_stat2_val",
      labelKey: "home_stat2_label",
      color: "default",
    },
    {
      valueKey: "home_stat3_val",
      labelKey: "home_stat3_label",
      color: "emerald",
    },
  ];

  // --- 3. INTERACTIVE BUSINESS UNITS SHOWCASE ---
  const [activeTab, setActiveTab] = useState(0);
  const businessTabs = [
    {
      id: 0,
      name: "Eksplorasi & Tambang",
      icon: HardHat,
      title: "Penambangan Batubara & Mineral Terpadu",
      desc: "Pengoperasian blok tambang modern berbasis Good Mining Practice dengan tingkat efisiensi tinggi dan koordinasi K3 ketat.",
      location: "Sumbawa & Kalimantan Timur",
      capacity: "12.5 Juta Ton / Tahun",
      image: "/images/hero-1.jpg",
      stats: "99.8% Operational Uptime",
    },
    {
      id: 1,
      name: "Pengolahan & Smelter",
      icon: Building2,
      title: "Hilirisasi Mineral & Pengolahan Smelter",
      desc: "Meningkatkan nilai tambah komoditas nasional dengan pemrosesan konsentrat tinggi standar ekspor internasional.",
      location: "Kawasan Industri Morowali",
      capacity: "2.4 Juta Ton Konsentrat",
      image: "/images/hero-2.jpg",
      stats: "ISO 9001 & 14001 Certified",
    },
    {
      id: 2,
      name: "Logistik & Maritim",
      icon: Anchor,
      title: "Rantai Pasok & Angkutan Pelabuhan",
      desc: "Jaringan logistik terintegrasi melingkupi armada Hauling, Conveyor Belt, Port Terminal, hingga pengapalan transshipment.",
      location: "Pelabuhan Khusus Tambang",
      capacity: "45 Unit Fleet Active",
      image: "/images/hero-3.jpg",
      stats: "Zero Freight Delay",
    },
    {
      id: 3,
      name: "Energi & Dekarbonisasi",
      icon: Zap,
      title: "Transisi Energi & Solar Farm Site",
      desc: "Pemasangan panel surya skala industri di operasional site guna menekan emisi karbon operasional menuju Net Zero.",
      location: "All Active Mining Sites",
      capacity: "15 MWp Solar Capacity",
      image: "/images/hero-2.jpg",
      stats: "-24% Carbon Footprint",
    },
  ];

  // --- 4. INTERACTIVE TENDER SEARCH ---
  const [tenderCategory, setTenderCategory] = useState("Semua");
  const tenderCategories = [
    "Semua",
    "Alat Berat",
    "Logistik",
    "K3LH & Safety",
    "Fasilitas Site",
  ];
  const dummyTenders = [
    {
      id: "TND-2026-081",
      title: "Pengadaan Unit Dump Truck 100 Ton",
      cat: "Alat Berat",
      status: "Buka",
      deadline: "28 Sep 2026",
    },
    {
      id: "TND-2026-082",
      title: "Jasa Angkut Hauling & Transshipment",
      cat: "Logistik",
      status: "Buka",
      deadline: "02 Okt 2026",
    },
    {
      id: "TND-2026-083",
      title: "Supply APD & Perlengkapan K3 Tambang",
      cat: "K3LH & Safety",
      status: "Buka",
      deadline: "15 Okt 2026",
    },
    {
      id: "TND-2026-084",
      title: "Maintenance Solar Panel & Power Grid Site Sumbawa",
      cat: "Fasilitas Site",
      status: "Buka",
      deadline: "20 Okt 2026",
    },
  ];

  const filteredTenders =
    tenderCategory === "Semua"
      ? dummyTenders
      : dummyTenders.filter((t) => t.cat === tenderCategory);

  // --- 5. ESG INTERACTIVE TAB ---
  const [activeEsgPillar, setActiveEsgPillar] = useState<"env" | "soc" | "gov">(
    "env",
  );

  return (
    <div className="flex flex-col bg-slate-950 font-sans text-slate-100 overflow-x-hidden">
      {/* REAL-TIME OPERATIONAL TICKER BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-2 px-4 text-[11px] font-bold uppercase tracking-wider flex items-center justify-between shadow-inner">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span className="font-extrabold">
              STATUS OPERASIONAL REAL-TIME:
            </span>
          </div>
          <div className="flex items-center gap-6 text-[10px] overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-slate-900" /> Site Sumbawa:
              Normal (100%)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-slate-900" /> Smelter Morowali:
              Optimal
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-slate-900" /> K3LH Safety
              Streak: 1,420 Days Safe
            </span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION WITH SLIDER */}
      <section
        className="relative w-full min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="PT Tambang Indonesia"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-linear"
            />
            {/* Soft Dark Gradients (Optimized for Mobile Contrast) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 z-10" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-start space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {slides[currentSlide].badge}
          </span>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl text-white drop-shadow-md">
            {slides[currentSlide].titleKey
              ? t(slides[currentSlide].titleKey as keyof typeof dictionary)
              : slides[currentSlide].titleFallback}
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow">
            {slides[currentSlide].descKey
              ? t(slides[currentSlide].descKey as keyof typeof dictionary)
              : slides[currentSlide].descFallback}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <Link
              href={slides[currentSlide].primaryBtnLink}
              className="w-full sm:w-auto min-h-[48px] bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition shadow-xl flex items-center justify-center gap-2"
            >
              {slides[currentSlide].primaryBtnText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pengadaan"
              className="w-full sm:w-auto min-h-[48px] bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition flex items-center justify-center text-center"
            >
              Portal Rekanan Vendor
            </Link>
          </div>
        </div>

        {/* Slide Navigation Controls */}
        <div className="absolute z-30 bottom-4 sm:bottom-8 left-4 right-4 sm:left-6 sm:right-6 max-w-6xl mx-auto flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto bg-slate-950/40 p-2 rounded-full backdrop-blur-md border border-white/10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-6 sm:w-8 bg-amber-400"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-amber-500 border border-white/20 text-white hover:text-slate-950 transition backdrop-blur-md active:scale-90"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-amber-500 border border-white/20 text-white hover:text-slate-950 transition backdrop-blur-md active:scale-90"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS & KINERJA UTAMA (MOBILE OPTIMIZED CARDS) */}
      <section className="w-full bg-slate-900 text-white py-12 sm:py-16 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center sm:text-left mb-6 sm:mb-8">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-500/30">
              {t("home_stats_tag")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg"
              >
                <span
                  className={`text-4xl sm:text-5xl font-black tracking-tight ${
                    stat.color === "emerald"
                      ? "text-emerald-400"
                      : "text-amber-400"
                  }`}
                >
                  {t(stat.valueKey as keyof typeof dictionary)}
                </span>
                <p className="mt-2 text-xs font-bold text-slate-300 uppercase tracking-wider leading-relaxed">
                  {t(stat.labelKey as keyof typeof dictionary)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE INTERAKTIF LINI BISNIS & OPERASI */}
      <section className="w-full bg-slate-950 py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              PORTOFOLIO OPERASIONAL
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Eksplorasi Lini Bisnis Interaktif
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Pilih pilar operasional di bawah untuk melihat rincian lokasi,
              kapasitas produksi, dan standar operasional kami.
            </p>
          </div>

          {/* Tab Selection Buttons (Mobile Horizontal Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-slate-800">
            {businessTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                {businessTabs[activeTab].location}
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-snug">
                {businessTabs[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {businessTabs[activeTab].desc}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Kapasitas Operasi
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-amber-400 mt-1">
                    {businessTabs[activeTab].capacity}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Pencapaian Mutu
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-400 mt-1">
                    {businessTabs[activeTab].stats}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/operasi"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition duration-300"
                >
                  Lihat Detail Peta Operasi
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
              <Image
                src={businessTabs[activeTab].image}
                alt={businessTabs[activeTab].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESG & SUSTAINABILITY INTERACTIVE SECTION */}
      <section className="w-full bg-slate-900 py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> PILAR KEBERLANJUTAN (ESG)
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tanggung Jawab Lingkungan & Tata Kelola Berkualitas
            </h2>

            {/* Interactive Pillar Switches */}
            <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveEsgPillar("env")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition ${
                  activeEsgPillar === "env"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Lingkungan
              </button>
              <button
                onClick={() => setActiveEsgPillar("soc")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition ${
                  activeEsgPillar === "soc"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sosial & CSR
              </button>
              <button
                onClick={() => setActiveEsgPillar("gov")}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition ${
                  activeEsgPillar === "gov"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Tata Kelola
              </button>
            </div>

            {/* Dynamic Content based on selected pillar */}
            {activeEsgPillar === "env" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Program reklamasi lahan progresif & reboisasi lebih dari 1.200
                  hektar area paska tambang, didukung target transisi energi
                  terbarukan di lokasi site.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold block">
                      REKLAMASI LAHAN
                    </span>
                    <span className="text-sm font-extrabold text-emerald-400">
                      1,250 Hektar Hutan
                    </span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold block">
                      TARGET EMISI
                    </span>
                    <span className="text-sm font-extrabold text-emerald-400">
                      Net-Zero 2050
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeEsgPillar === "soc" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pemberdayaan ekonomi masyarakat sekitar tambang melalui
                  pembinaan UMKM lokal, fasilitas kesehatan gratis, dan beasiswa
                  pendidikan berkala.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold block">
                      TENAGA KERJA LOKAL
                    </span>
                    <span className="text-sm font-extrabold text-amber-400">
                      78% Putra Daerah
                    </span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold block">
                      UMKM BINAAN
                    </span>
                    <span className="text-sm font-extrabold text-amber-400">
                      140+ Mitra Usaha
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeEsgPillar === "gov" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Penerapan Good Corporate Governance (GCG) dengan sistem audit
                  independen, portal pengadaan vendor transparan, dan Zero
                  Tolerance pada gratifikasi.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold block">
                      SKOR GCG
                    </span>
                    <span className="text-sm font-extrabold text-blue-400">
                      Sangat Baik (94.2)
                    </span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold block">
                      ISO AKREDITASI
                    </span>
                    <span className="text-sm font-extrabold text-blue-400">
                      ISO 37001 (SMAP)
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2">
              <Link
                href="/keberlanjutan"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-md"
              >
                Unduh Laporan Keberlanjutan Full
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="/images/hero-2.jpg"
              alt="ESG Mining"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <h5 className="text-xs font-bold text-white">
                  Sertifikasi Proper Hijau KemenLHK
                </h5>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Penghargaan ketaatan pengelolaan lingkungan hidup secara
                  berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE VENDOR TENDER BOARD */}
      <section className="w-full bg-white text-slate-900 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-md">
                PORTAL REKANAN & PENGADAAN
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-2">
                Daftar Tender Aktif PT Tambang Indonesia
              </h3>
            </div>
            <Link
              href="/pengadaan"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition text-center"
            >
              <FileText className="w-4 h-4" /> Masuk Portal E-Procurement
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Kategori:
            </span>
            {tenderCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setTenderCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                  tenderCategory === cat
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tender List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTenders.map((tender) => (
              <div
                key={tender.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/60 transition flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-slate-500">
                      {tender.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                      {tender.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 line-clamp-2">
                    {tender.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    Batas:{" "}
                    <strong className="text-slate-800">
                      {tender.deadline}
                    </strong>
                  </span>
                  <Link
                    href="/pengadaan"
                    className="text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1"
                  >
                    Ikut Tender <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="w-full bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Dapatkan informasi lengkap seputar laporan keuangan, operasional,
            serta peluang investasi bersama PT Tambang Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/investor"
              className="w-full sm:w-auto min-h-[44px] bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs px-8 py-3 rounded-xl transition shadow-md flex items-center justify-center"
            >
              Hubungan Investor
            </Link>
            <Link
              href="/operasi"
              className="w-full sm:w-auto min-h-[44px] bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-8 py-3 rounded-xl border border-slate-700 transition flex items-center justify-center"
            >
              Peta Operasi Tambang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
