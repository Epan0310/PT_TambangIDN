"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowDown, MapPin, ShieldCheck } from "lucide-react";
import { useLanguage, dictionary } from "@/context/LanguageContext";

// Component loader terpisah agar bisa memakai hook `useLanguage`
function MapLoader() {
  const { t } = useLanguage();
  return (
    <div className="w-full h-[450px] bg-slate-100 border border-gray-200 rounded-2xl animate-pulse flex flex-col items-center justify-center text-gray-400 gap-2">
      <MapPin className="w-8 h-8 text-gray-300 animate-bounce" />
      <span className="text-xs font-semibold">{t("op_map_loading")}</span>
    </div>
  );
}

// Load komponen peta secara dinamis dengan ssr: false
const OperasiMap = dynamic(() => import("@/components/OperasiMap"), {
  ssr: false,
  loading: () => <MapLoader />,
});

export default function OperasiPage() {
  const { t } = useLanguage();

  const commodities = [
    {
      nameKey: "op_c1_name",
      gradeKey: "op_c1_grade",
      locKey: "op_c1_loc",
      descKey: "op_c1_desc",
      tagKey: "op_c1_tag",
    },
    {
      nameKey: "op_c2_name",
      gradeKey: "op_c2_grade",
      locKey: "op_c2_loc",
      descKey: "op_c2_desc",
      tagKey: "op_c2_tag",
    },
    {
      nameKey: "op_c3_name",
      gradeKey: "op_c3_grade",
      locKey: "op_c3_loc",
      descKey: "op_c3_desc",
      tagKey: "op_c3_tag",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      {/* Container Utama */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* 1. HERO CARD */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-tight tracking-tight">
                {t("op_hero_title")}
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("op_hero_desc")}
              </p>
              <div className="pt-2">
                <a
                  href="#katalog-komoditas"
                  className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg transition shadow-sm"
                >
                  {t("op_btn_catalog")} <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/hero-operasi.png"
                alt="Operasi Pertambangan"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. PETA OPERASIONAL INTERAKTIF */}
        <section>
          <OperasiMap />
        </section>

        {/* 3. KATALOG KOMODITAS UNGGULAN */}
        <section id="katalog-komoditas" className="space-y-4 pt-4">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
              {t("op_catalog_title")}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              {t("op_catalog_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {commodities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {t(item.tagKey as keyof typeof dictionary)}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-950">
                      {t(item.nameKey as keyof typeof dictionary)}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-0.5">
                      {t(item.gradeKey as keyof typeof dictionary)}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t(item.descKey as keyof typeof dictionary)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />{" "}
                    {t(item.locKey as keyof typeof dictionary)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
