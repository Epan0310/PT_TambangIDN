import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const stats = [
    { value: "25M", label: "TOTAL PRODUKSI TON/TAHUN" },
    { value: "12 Juta", label: "JAM KERJA AMAN" },
    { value: "95%", label: "EFISIENSI OPERASIONAL", color: "emerald" },
  ];

  return (
    <div className="flex flex-col bg-slate-950 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full text-white pt-28 pb-16 min-h-[85vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container with Gradient Masking and Opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-homepage.png"
            alt="Tambang Indonesia"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-950" />
        </div>

        {/* Konten Text & Button */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Menambang untuk Masa Depan Berkelanjutan
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Berkomitmen pada keunggulan operasional and tanggung jawab
            lingkungan dalam mengelola sumber daya alam Indonesia untuk generasi
            mendatang.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/operasi"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-8 py-3 rounded transition shadow-lg text-center"
            >
              Eksplorasi Peta 3D
            </Link>
            <Link
              href="/keberlanjutan"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-8 py-3 rounded transition shadow-lg text-center"
            >
              Laporan ESG Mitra
            </Link>
          </div>
        </div>
      </section>

      {/* 2. KINERJA UTAMA SECTION */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center md:text-left">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Kinerja Utama
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 md:gap-0 md:divide-x md:divide-gray-100">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center py-6 md:py-0 md:px-6 ${
                  idx === 0 ? "md:pl-0" : ""
                } ${idx === stats.length - 1 ? "md:pr-0" : ""}`}
              >
                <span
                  className={`text-5xl md:text-6xl font-extrabold tracking-tight ${
                    stat.color === "emerald"
                      ? "text-emerald-600"
                      : "text-gray-950"
                  }`}
                >
                  {stat.value}
                </span>
                <p className="mt-3 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest leading-snug max-w-[200px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
