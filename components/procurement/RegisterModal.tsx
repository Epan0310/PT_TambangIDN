"use client";

import { useState } from "react";
import {
  X,
  Check,
  FileText,
  ShieldCheck,
  UploadCloud,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Copy,
} from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regId, setRegId] = useState("");
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    companyName: "",
    nib: "",
    email: "",
    k3sCertificate: "",
    portfolioLink: "",
  });

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate ID Registrasi acak untuk simulasi
    const generatedCode = `REG-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000,
    )}`;
    setRegId(generatedCode);
    setIsSubmitted(true);
  };

  const handleCloseAndReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      companyName: "",
      nib: "",
      email: "",
      k3sCertificate: "",
      portfolioLink: "",
    });
    setCopied(false);
    onClose();
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(regId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-gray-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Pendaftaran Rekanan Baru
            </h3>
            <p className="text-xs text-gray-500">
              {isSubmitted ? "Status Pendaftaran" : `Langkah ${step} dari 3`}
            </p>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TAMPILAN SUKSES (SETELAH SUBMIT) */}
        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-900">
                Pendaftaran Berhasil Dikirim!
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
                Terima kasih, data perusahaan{" "}
                <strong className="text-gray-900">
                  {formData.companyName || "Anda"}
                </strong>{" "}
                telah kami terima. Tim E-Procurement akan melakukan verifikasi
                berkas.
              </p>
            </div>

            {/* Box Nomor Tiket Registrasi */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 max-w-sm mx-auto space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                Nomor Tiket Registrasi
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="font-mono text-lg font-extrabold text-gray-900">
                  {regId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  title="Salin Nomor Tiket"
                  className="p-1 text-gray-500 hover:text-black transition"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              {copied && (
                <span className="text-[10px] font-semibold text-emerald-600 block">
                  ✓ Berhasil disalin!
                </span>
              )}
            </div>

            {/* Information Notice */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 text-left text-xs text-blue-900 leading-relaxed">
              <strong>Langkah Selanjutnya:</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-blue-800 text-[11px]">
                <li>Proses verifikasi membutuhkan 1–3 hari kerja.</li>
                <li>
                  Kredensial login portal akan dikirim ke{" "}
                  <u className="font-medium">
                    {formData.email || "email Anda"}
                  </u>{" "}
                  setelah disetujui.
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleCloseAndReset}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-xs py-3 rounded-lg transition shadow-sm"
              >
                Selesai & Tutup
              </button>
            </div>
          </div>
        ) : (
          /* TAMPILAN FORM (3 STEP) */
          <>
            {/* Progress Bar Steps */}
            <div className="px-6 pt-4">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
                <span className={step >= 1 ? "text-black font-bold" : ""}>
                  1. Legalitas
                </span>
                <span className={step >= 2 ? "text-black font-bold" : ""}>
                  2. K3LH
                </span>
                <span className={step >= 3 ? "text-black font-bold" : ""}>
                  3. Portofolio
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-300 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Body Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* STEP 1: LEGALITAS */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-800 pb-2 border-b border-gray-100">
                    <FileText className="w-4 h-4 text-orange-500" />
                    <span>Informasi Legalitas Perusahaan</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Nama Perusahaan / PT / CV
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="PT Berkah Mining Utama"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Nomor Induk Berusaha (NIB)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="1234000xxxxxx"
                      value={formData.nib}
                      onChange={(e) =>
                        setFormData({ ...formData, nib: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Perusahaan
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@ptberkah.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: K3LH */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-800 pb-2 border-b border-gray-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Sertifikasi K3LH Tambang</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Nomor Sertifikat K3 / SMK3 / ISO 45001
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="CERT-K3-2026-XXXX"
                      value={formData.k3sCertificate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          k3sCertificate: e.target.value,
                        })
                      }
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 leading-relaxed">
                    Pastikan sertifikat Keselamatan Kerja dan Lingkungan Hidup
                    perusahaan Anda masih berlaku minimal 6 bulan ke depan.
                  </div>
                </div>
              )}

              {/* STEP 3: PORTOFOLIO */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-800 pb-2 border-b border-gray-100">
                    <UploadCloud className="w-4 h-4 text-blue-600" />
                    <span>Portofolio & Pengalaman Kerja</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Link Dokumen Profil / Portofolio (Drive/Cloud)
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://drive.google.com/file/d/..."
                      value={formData.portfolioLink}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          portfolioLink: e.target.value,
                        })
                      }
                      className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              )}

              {/* Footer Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 px-4 py-2 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Kembali
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-xs font-semibold transition ml-auto"
                  >
                    Lanjut <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-5 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg text-xs font-bold transition ml-auto shadow-sm"
                  >
                    Kirim Pendaftaran <Check className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
