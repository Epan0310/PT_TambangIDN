import Link from "next/link";
import {
  Download,
  Calendar,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileText,
  PieChart,
  BarChart2,
  Lock,
} from "lucide-react";

export default function HubunganInvestorPage() {
  const stockMetrics = [
    {
      code: "TMBG.JK",
      val: "Rp 4,520",
      change: "+2.4%",
      isPositive: true,
    },
    {
      label: "MARKET CAP",
      val: "Rp 45.2T",
    },
    {
      label: "Q2 REVENUE",
      val: "Rp 12.8T",
    },
    {
      label: "EBITDA MARGIN",
      val: "32.4%",
    },
  ];

  const reports = [
    {
      title: "Laporan Keuangan Konsolidasian",
      year: "2023",
      quarter: "Q2",
      size: "2.4 MB",
      icon: FileText,
    },
    {
      title: "Corporate Presentation",
      year: "2023",
      quarter: "Q2",
      size: "5.1 MB",
      icon: PieChart,
    },
    {
      title: "Annual Report (Laporan Tahunan)",
      year: "2022",
      quarter: "FY",
      size: "15.8 MB",
      icon: BarChart2,
    },
    {
      title: "Sustainability Report",
      year: "2022",
      quarter: "FY",
      size: "12.2 MB",
      icon: FileText,
    },
  ];

  const calendarEvents = [
    {
      month: "NOV",
      day: "15",
      isDark: true,
      title: "Q3 2023 Earnings Call",
      desc: "Webcast presentation of Q3 financial results.",
      action: "ADD TO CALENDAR",
      icon: Calendar,
    },
    {
      month: "DEC",
      day: "05",
      isDark: false,
      title: "Interim Dividend Payment",
      desc: "Ex-date: Nov 20, Record date: Nov 22.",
      action: "VIEW DETAILS",
      icon: Clock,
    },
  ];

  const leadership = [
    {
      name: "Budi Santoso",
      role: "President Commissioner",
      bgColor: "bg-slate-900 text-amber-400",
    },
    {
      name: "Siti Rahman",
      role: "President Director / CEO",
      bgColor: "bg-amber-600 text-white",
    },
  ];

  // Helper fungsi untuk generate 2 huruf inisial dari nama
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 1. TOP METRICS BAR */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-left">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {stockMetrics[0].code}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-gray-950">
                  {stockMetrics[0].val}
                </span>
                <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {stockMetrics[0].change}
                </span>
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:pl-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {stockMetrics[1].label}
              </span>
              <span className="text-2xl font-extrabold text-gray-950">
                {stockMetrics[1].val}
              </span>
            </div>

            <div className="pt-2 md:pt-0 md:pl-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {stockMetrics[2].label}
              </span>
              <span className="text-2xl font-extrabold text-gray-950">
                {stockMetrics[2].val}
              </span>
            </div>

            <div className="pt-2 md:pt-0 md:pl-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {stockMetrics[3].label}
              </span>
              <span className="text-2xl font-extrabold text-gray-950">
                {stockMetrics[3].val}
              </span>
            </div>
          </div>
        </section>

        {/* 2. GRID KONTEN UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* KOLOM KIRI */}
          <div className="lg:col-span-2 space-y-8">
            {/* FINANCIAL REPORTS CENTER */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-950">
                    Financial Reports Center
                  </h2>
                  <p className="text-xs text-gray-500 mt-1 max-w-sm">
                    Access comprehensive financial disclosures, annual reports,
                    and investor presentations.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 self-start">
                  <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded transition">
                    Annual Reports
                  </button>
                  <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded transition">
                    Financials
                  </button>
                  <button className="bg-black text-white text-[11px] font-semibold px-3 py-1.5 rounded transition shadow-sm">
                    All Documents
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-wider text-[10px] font-bold">
                      <th className="pb-3 font-semibold">Dokumen</th>
                      <th className="pb-3 font-semibold">Tahun</th>
                      <th className="pb-3 font-semibold">Kuartal</th>
                      <th className="pb-3 font-semibold">Ukuran File</th>
                      <th className="pb-3 font-semibold text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {reports.map((doc, idx) => {
                      const IconComp = doc.icon;
                      return (
                        <tr key={idx} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 font-semibold text-gray-900 flex items-center gap-2 pr-4">
                            <IconComp className="w-4 h-4 text-gray-400 shrink-0" />
                            <span>{doc.title}</span>
                          </td>
                          <td className="py-3.5 text-gray-600">{doc.year}</td>
                          <td className="py-3.5 text-gray-600">
                            {doc.quarter}
                          </td>
                          <td className="py-3.5 text-gray-500">{doc.size}</td>
                          <td className="py-3.5 text-right">
                            <button className="text-gray-900 hover:text-black transition p-1">
                              <Download className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* INVESTOR CALENDAR */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-950">
                Investor Calendar
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {calendarEvents.map((evt, idx) => {
                  const ActionIcon = evt.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 shadow-sm"
                    >
                      <div
                        className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 ${
                          evt.isDark
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-900 border border-gray-200"
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                          {evt.month}
                        </span>
                        <span className="text-lg font-extrabold leading-none mt-0.5">
                          {evt.day}
                        </span>
                      </div>

                      <div className="flex flex-col justify-between text-left space-y-2">
                        <div>
                          <h3 className="text-xs font-bold text-gray-950">
                            {evt.title}
                          </h3>
                          <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                            {evt.desc}
                          </p>
                        </div>
                        <div>
                          <button className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-900 hover:text-black transition">
                            <ActionIcon className="w-3 h-3" />
                            {evt.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* KOLOM KANAN */}
          <div className="space-y-8">
            {/* WHISTLEBLOWING CARD */}
            <section className="bg-slate-100 border border-gray-200 rounded-xl p-6 relative overflow-hidden space-y-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-600 text-[10px] font-bold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ISO 37001 Certified</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-gray-950">
                  Whistleblowing System
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  PT Tambang Indonesia is committed to Good Corporate Governance
                  (GCG). Report any violations safely and anonymously.
                </p>
              </div>

              <div className="pt-2">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white text-xs font-semibold px-4 py-3 rounded-lg transition shadow-sm">
                  <Lock className="w-3.5 h-3.5" />
                  Kirim Laporan Pengaduan Anonim
                </button>
              </div>
            </section>

            {/* LEADERSHIP SECTION WITH INITIALS AVATAR */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <h2 className="text-xl font-bold text-gray-950">Leadership</h2>
                <Link
                  href="#"
                  className="text-[11px] font-bold text-gray-500 hover:text-gray-900 uppercase tracking-wider"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {leadership.map((person, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md transition"
                  >
                    {/* Placeholder Inisial Nama */}
                    <div
                      className={`w-11 h-11 rounded-lg ${person.bgColor} font-extrabold text-sm flex items-center justify-center shrink-0 tracking-wider shadow-inner`}
                    >
                      {getInitials(person.name)}
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-gray-950">
                        {person.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                        {person.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
