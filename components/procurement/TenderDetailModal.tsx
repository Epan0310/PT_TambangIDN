"use client";

import {
  X,
  Calendar,
  MapPin,
  DollarSign,
  FileText,
  CheckCircle2,
  Download,
  Building2,
  Send,
} from "lucide-react";

export interface TenderData {
  title: string;
  code: string;
  deadline: string;
  statusType: "open" | "prep";
  statusLabel: string;
  category: string;
  location?: string;
  estimatedValue?: string;
  description?: string;
  requirements?: string[];
  scopeOfWork?: string[];
}

interface TenderDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tender: TenderData | null;
  onApplyBid?: () => void;
}

export default function TenderDetailModal({
  isOpen,
  onClose,
  tender,
  onApplyBid,
}: TenderDetailModalProps) {
  if (!isOpen || !tender) return null;

  const defaultScope = [
    "Pengadaan dan pemeliharaan unit armada pendukung operasional.",
    "Mobilisasi peralatan dan personel sesuai standar keselamatan K3LH tambang.",
    "Penyediaan suku cadang resmi dan layanan perawatan berkala onsite.",
  ];

  const defaultRequirements = [
    "Memiliki NIB & SIUP yang masih berlaku di bidang usaha terkait.",
    "Sertifikasi K3LH / SMK3 Tambang yang aktif.",
    "Pengalaman minimal 3 tahun menangani proyek skala industri tambang/energi.",
    "Laporan Keuangan yang telah diaudit oleh Akuntan Publik 2 tahun terakhir.",
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-gray-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header Modal */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-slate-50">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[11px] font-bold bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded">
                {tender.code}
              </span>
              {tender.statusType === "open" ? (
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded border border-emerald-200">
                  {tender.statusLabel}
                </span>
              ) : (
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded border border-amber-200">
                  {tender.statusLabel}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-950 leading-snug">
              {tender.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs text-gray-700">
          {/* Key Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                Batas Akhir
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-gray-900">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>{tender.deadline}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                Kategori
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-gray-900">
                <Building2 className="w-3.5 h-3.5 text-gray-500" />
                <span>{tender.category}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                Lokasi Site
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-gray-900">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{tender.location || "Area Tambang Utama"}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                Estimasi HPS
              </span>
              <div className="flex items-center gap-1.5 font-semibold text-emerald-700">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                <span>{tender.estimatedValue || "Rp 1.5 - 3.0 M"}</span>
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-gray-700" />
              Lingkup Pekerjaan
            </h4>
            <ul className="space-y-1.5 bg-white border border-gray-100 rounded-xl p-3.5 text-gray-600">
              {(tender.scopeOfWork || defaultScope).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Persyaratan Rekanan & Kualifikasi
            </h4>
            <div className="space-y-1.5 bg-emerald-50/50 border border-emerald-100 rounded-xl p-3.5 text-gray-700">
              {(tender.requirements || defaultRequirements).map((req, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Document Attachment */}
          <div className="p-3.5 border border-dashed border-gray-300 rounded-xl bg-slate-50/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm text-gray-700">
                <FileText className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="font-bold text-gray-900 block text-xs">
                  Dokumen Kerangka Acuan Kerja (KAK / TOR)
                </span>
                <span className="text-[10px] text-gray-500">
                  PDF • 2.4 MB • Versi Terbaru
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => alert("Mengunduh dokumen spesifikasi tender...")}
              className="px-3.5 py-1.5 border border-gray-300 hover:bg-black hover:text-white hover:border-black text-gray-800 font-semibold text-xs rounded-lg transition flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Unduh
            </button>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-gray-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-lg transition"
          >
            Tutup
          </button>

          {tender.statusType === "open" ? (
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onApplyBid) onApplyBid();
              }}
              className="px-5 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs rounded-lg shadow-sm transition flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Ajukan Penawaran
            </button>
          ) : (
            <button
              disabled
              className="px-5 py-2 bg-gray-200 text-gray-400 font-bold text-xs rounded-lg cursor-not-allowed"
            >
              Tahap Persiapan Dokumen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
