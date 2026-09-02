import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Brand & Copyright */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold tracking-tight">
            PT TAMBANG INDONESIA
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            © 2024 PT Tambang Indonesia. All Rights Reserved. Industrial
            Excellence &amp; Environmental Stewardship.
          </p>
          <div className="flex gap-2 pt-2">
            <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded font-mono">
              ISO
            </span>
            <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded font-mono">
              ISO
            </span>
          </div>
        </div>

        {/* Kolom 2: Tata Kelola & Keberlanjutan */}
        <div>
          <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
            TATA KELOLA &amp; KEBERLANJUTAN
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                ISO 14001 Certification
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                GCG Framework
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Whistleblowing System
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Informasi Lainnya */}
        <div>
          <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
            INFORMASI LAINNYA
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
