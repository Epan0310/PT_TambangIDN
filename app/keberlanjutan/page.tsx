"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, Cloud, Droplets, Sun, Leaf, ArrowRight } from "lucide-react";
import { useLanguage, dictionary } from "@/context/LanguageContext";

export default function KeberlanjutanPage() {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Cloud,
      titleKey: "esg_m1_title",
      value: "1.2M",
      unit: "tCO2e",
      progress: 65,
      subtitleKey: "esg_m1_sub",
    },
    {
      icon: Droplets,
      titleKey: "esg_m2_title",
      value: "88%",
      unit: "",
      progress: 88,
      subtitleKey: "esg_m2_sub",
    },
    {
      icon: Sun,
      titleKey: "esg_m3_title",
      value: "45",
      unit: "MWp",
      progress: 45,
      subtitleKey: "esg_m3_sub",
    },
    {
      icon: Leaf,
      titleKey: "esg_m4_title",
      value: "0.85",
      unit: "/ 1.0",
      progress: 85,
      subtitleKey: "esg_m4_sub",
    },
  ] as const;

  const csrPrograms = [
    {
      titleKey: "esg_csr1_title",
      descKey: "esg_csr1_desc",
      image: "/images/csr-pendidikan.png",
    },
    {
      titleKey: "esg_csr2_title",
      descKey: "esg_csr2_desc",
      image: "/images/csr-kesehatan.png",
    },
    {
      titleKey: "esg_csr3_title",
      descKey: "esg_csr3_desc",
      image: "/images/csr-umkm.png",
    },
  ] as const;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full text-white pt-28 pb-16 min-h-[85vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-2.jpg"
            alt="Transparansi Keberlanjutan"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            {t("esg_hero_title")}
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            {t("esg_hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-8 py-3 rounded transition shadow-lg"
            >
              <Download className="w-4 h-4" />
              {t("esg_btn_report")}
            </a>
          </div>
        </div>
      </section>

      {/* 2. METRIK KEBERLANJUTAN */}
      <section className="w-full bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center md:text-left mb-8">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              {t("esg_perf_badge")}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mt-1">
              {t("esg_perf_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <div className="flex items-center gap-2 text-emerald-600 mb-3">
                      <IconComponent className="w-5 h-5 shrink-0" />
                      <span className="text-xs font-bold tracking-wider text-gray-600 uppercase">
                        {t(item.titleKey as keyof typeof dictionary)}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-extrabold text-gray-950">
                        {item.value}
                      </span>
                      {item.unit && (
                        <span className="text-base font-semibold text-gray-500">
                          {item.unit}
                        </span>
                      )}
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 font-medium border-t border-gray-200 pt-3 mt-2">
                    {t(item.subtitleKey as keyof typeof dictionary)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CSR SECTION */}
      <section className="w-full bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center md:text-left mb-8">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              {t("esg_csr_badge")}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
              {t("esg_csr_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {csrPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:border-emerald-500/50 transition"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-950">
                    <Image
                      src={program.image}
                      alt={t(program.titleKey as keyof typeof dictionary)}
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2">
                      {t(program.titleKey as keyof typeof dictionary)}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t(program.descKey as keyof typeof dictionary)}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                  >
                    {t("esg_btn_learn_more")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
