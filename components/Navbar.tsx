"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Operasi & Komoditas", href: "/operasi" },
    { name: "ESG & Keberlanjutan", href: "/keberlanjutan" },
    { name: "Hubungan Investor", href: "/investor" },
    { name: "E-Procurement", href: "/pengadaan" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          PT TAMBANG INDONESIA
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors relative py-2 ${
                  isActive
                    ? "text-gray-900 border-b-2 border-amber-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/pengadaan"
            className="bg-black text-white text-xs font-semibold px-4 py-2.5 rounded hover:bg-gray-800 transition"
          >
            Portal Mitra
          </Link>
          <button
            aria-label="Ganti Bahasa"
            className="p-2 text-gray-600 hover:text-gray-900 transition"
          >
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
