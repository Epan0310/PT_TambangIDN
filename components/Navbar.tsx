"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === "ID" ? "EN" : "ID");
  };

  const navItems = [
    { href: "/", key: "nav_beranda" },
    { href: "/operasi", key: "nav_operasi" },
    { href: "/keberlanjutan", key: "nav_esg" },
    { href: "/investor", key: "nav_investor" },
    { href: "/pengadaan", key: "nav_procurement" },
  ] as const;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-extrabold text-lg text-gray-950 tracking-tight"
          >
            PT TAMBANG INDONESIA
          </Link>

          {/* Navigasi Dinamis */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-black font-bold border-b-2 border-black pb-0.5"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Tombol Akses & Switch Bahasa */}
          <div className="flex items-center space-x-3">
            <Link
              href="/pengadaan#login"
              className="bg-black hover:bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
            >
              {t("nav_mitra")}
            </Link>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 border border-gray-300 hover:bg-slate-50 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg transition shadow-sm cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-gray-600" />
              <span>{lang === "ID" ? "EN" : "ID"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
