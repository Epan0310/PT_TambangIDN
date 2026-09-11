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
      image: "/images/hero-3.jpeg",
      badge: "Tata Kelola & Kemitraan",
      titleFallback: "Portal E-Procurement Transparan & Terintegrasi",
      descFallback:
        "Membangun rantai pasok tangguh bersama ribuan vendor dan mitra kerja dengan tata kelola bisnis yang akuntabel.",
      primaryBtnText: "Portal Pengadaan",
      primaryBtnLink: "/pengadaan",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide interval 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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

  // --- 3. CORE BUSINESSES DATA ---
  const businessUnits = [
    {
      title: "Pertambangan Batubara & Mineral",
      desc: "Pengelolaan site tambang modern dengan efisiensi tinggi, berfokus pada kualitas komoditas kelas dunia.",
      icon: Building2,
      tag: "Operasi Utama",
    },
    {
      title: "Pengolahan & Smelter",
      desc: "Fasilitas pengolahan hasil tambang untuk meningkatkan nilai tambah komoditas mineral dalam negeri.",
      icon: TrendingUp,
      tag: "Hilirisasi",
    },
    {
      title: "Logistik & Transportasi Terpadu",
      desc: "Rantai pasok terintegrasi dari area tambang, jalur darat, hingga pelabuhan pengapalan ekspor.",
      icon: Globe,
      tag: "Infrastruktur",
    },
  ];

  return (
    <div className="flex flex-col bg-slate-950 font-sans text-slate-100">
      {/* 1. HERO SECTION WITH AUTO-SLIDER */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
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

            {/* Soft Overlay Gradients (Foto Tetap Jernih & Terang) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20 z-10" />
          </div>
        ))}

        {/* Hero Dynamic Content */}
        <div className="relative z-20 max-w-6xl w-full mx-auto px-6 py-24 flex flex-col items-start space-y-6">
          {/* Badge Active Slide */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {slides[currentSlide].badge}
          </span>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-3xl text-white drop-shadow-md">
            {slides[currentSlide].titleKey
              ? t(slides[currentSlide].titleKey as keyof typeof dictionary)
              : slides[currentSlide].titleFallback}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow">
            {slides[currentSlide].descKey
              ? t(slides[currentSlide].descKey as keyof typeof dictionary)
              : slides[currentSlide].descFallback}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href={slides[currentSlide].primaryBtnLink}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl transition shadow-xl flex items-center justify-center gap-2"
            >
              {slides[currentSlide].primaryBtnText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pengadaan"
              className="w-full sm:w-auto bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md font-semibold text-sm px-8 py-3.5 rounded-xl transition text-center"
            >
              Portal Rekanan
            </Link>
          </div>
        </div>

        {/* Slide Controls (Arrows & Indicators) */}
        <div className="absolute z-30 bottom-8 left-6 right-6 max-w-6xl mx-auto flex items-center justify-between pointer-events-none">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-amber-400"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-slate-900/50 hover:bg-amber-500 border border-white/20 text-white hover:text-slate-950 transition backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-slate-900/50 hover:bg-amber-500 border border-white/20 text-white hover:text-slate-950 transition backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS & KINERJA UTAMA */}
      <section className="w-full bg-white text-slate-900 py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center md:text-left mb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              {t("home_stats_tag")}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-gray-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center py-4 md:py-0 md:px-8 ${
                  idx === 0 ? "md:pl-0" : ""
                } ${idx === stats.length - 1 ? "md:pr-0" : ""}`}
              >
                <span
                  className={`text-5xl md:text-6xl font-black tracking-tight ${
                    stat.color === "emerald"
                      ? "text-emerald-600"
                      : "text-slate-950"
                  }`}
                >
                  {t(stat.valueKey as keyof typeof dictionary)}
                </span>
                <p className="mt-3 text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest leading-snug max-w-[220px] mx-auto">
                  {t(stat.labelKey as keyof typeof dictionary)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LINI BISNIS UTAMA */}
      <section className="w-full bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Portofolio Operasional
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Lini Bisnis & Komoditas
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Mengintegrasikan seluruh rantai nilai pertambangan dari hulu ke
              hilir secara profesional dan tepercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessUnits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/operasi"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                    >
                      Jelajahi Operasi
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ESG & SUSTAINABILITY HIGHLIGHT BANNER */}
      <section className="w-full bg-slate-950 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> ESG & Tanggung Jawab Sosial
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Komitmen Terhadap Lingkungan & Masyarakat Sekitar
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Kami memprioritaskan keselamatan kerja (K3LH), rehabilitasi lahan
              paska tambang, serta pemberdayaan ekonomi masyarakat lokal di
              sekitar area operasional kami.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Zero Accident Target
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Standar keselamatan kerja internasional secara menyeluruh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Sertifikasi K3LH & ISO
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Terakreditasi lengkap dalam manajemen mutu dan lingkungan.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/keberlanjutan"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-md"
              >
                Lihat Laporan ESG & Reklamasi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="/images/hero-2.jpg"
              alt="ESG Tambang"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-amber-400" />
                <div>
                  <h5 className="text-xs font-bold text-white">
                    Program Pemberdayaan Masyarakat
                  </h5>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Mendukung UMKM lokal di Sumbawa & area tambang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEASER PORTAL E-PROCUREMENT */}
      <section className="w-full bg-white text-slate-900 py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-50 border border-gray-200 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-md">
                Kemitraan Vendor
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Bergabung Menjadi Rekanan PT Tambang Indonesia
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Akses tender terbuka untuk kategori Alat Berat, Logistik,
                APD/Safety, hingga katering tambang secara transparan melalui
                portal E-Procurement kami.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 font-medium pt-2">
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Proses
                  verifikasi berkas cepat & digital
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />{" "}
                  Pengajuan penawaran harga online
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/pengadaan"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-8 py-3.5 rounded-xl transition shadow-md text-center flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Daftar Sebagai Vendor
              </Link>
              <Link
                href="/pengadaan#login"
                className="bg-white hover:bg-gray-100 border border-gray-300 text-slate-900 font-bold text-xs px-8 py-3.5 rounded-xl transition text-center"
              >
                Masuk Portal Rekanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="w-full bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Dapatkan informasi lengkap seputar laporan keuangan, operasional,
            serta peluang investasi bersama PT Tambang Indonesia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/investor"
              className="bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition shadow-md"
            >
              Hubungan Investor
            </Link>
            <Link
              href="/operasi"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-3 rounded-xl border border-slate-700 transition"
            >
              Peta Operasi Tambang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
