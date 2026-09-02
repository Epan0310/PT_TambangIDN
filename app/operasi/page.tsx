"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowDown, MapPin, ShieldCheck } from "lucide-react";

// Load komponen peta secara dinamis dengan ssr: false (aman karena sudah "use client")
const OperasiMap = dynamic(() => import("@/components/OperasiMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] bg-slate-100 border border-gray-200 rounded-2xl animate-pulse flex flex-col items-center justify-center text-gray-400 gap-2">
      <MapPin className="w-8 h-8 text-gray-300 animate-bounce" />
      <span className="text-xs font-semibold">Memuat Peta Interaktif...</span>
    </div>
  ),
});

export default function OperasiPage() {
  const commodities = [
    {
      name: "Nikel (Nickel Ore)",
      grade: "High-Grade 1.8% Fe",
      location: "Halmahera & Sulawesi",
      desc: "Bahan baku utama industri baterai kendaraan listrik (EV) dan pemrosesan stainless steel.",
      tag: "Baterai & EV",
    },
    {
      name: "Batubara (Thermal Coal)",
      grade: "GAR 5800 - 6200 kcal/kg",
      location: "Kalimantan Timur",
      desc: "Batubara kualitas tinggi dengan kadar sulfur rendah untuk pembangkit listrik industri.",
      tag: "Energi Global",
    },
    {
      name: "Konsentrat Tembaga",
      grade: "Cu 25% + Au Grade",
      location: "Nusa Tenggara & Papua",
      desc: "Komoditas esensial pendukung transmisi listrik, energi terbarukan, dan infrastruktur.",
      tag: "Infrastruktur",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      {/* Container Utama: max-w-4xl agar layout memanjang ke bawah & seimbang */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* 1. HERO CARD */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Operasi Pertambangan Terintegrasi &amp; Komoditas Unggulan
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Memastikan efisiensi rantai pasok global dengan standar kualitas
                material kelas dunia, didukung infrastruktur logistik mutakhir
                dari pit hingga port.
              </p>
              <div className="pt-2">
                <a
                  href="#katalog-komoditas"
                  className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg transition shadow-sm"
                >
                  Lihat Katalog Komoditas <ArrowDown className="w-4 h-4" />
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
              Katalog Komoditas Utama
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Produk tambang berkualitas tinggi dengan sertifikasi standar
              internasional.
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
                      {item.tag}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-950">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-0.5">
                      {item.grade}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" /> {item.location}
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
