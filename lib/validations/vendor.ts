import { z } from "zod";

// Step 1: Legalitas & Administrasi
export const Step1Schema = z.object({
  companyName: z.string().min(3, "Nama perusahaan minimal 3 karakter"),
  npwp: z.string().min(15, "Format NPWP tidak valid"),
  nib: z.string().min(13, "NIB harus 13 digit"),
  email: z.string().email("Format email tidak valid"),
});

// Step 2: Sertifikasi K3LH
export const Step2Schema = z.object({
  hseCertNumber: z.string().min(5, "Nomor sertifikat K3LH wajib diisi"),
  hseExpiry: z.string().min(1, "Masa berlaku wajib diisi"),
  hasPolicyDoc: z.boolean().refine((val) => val === true, {
    message: "Anda wajib menyetujui kebijakan K3LH",
  }),
});

// Step 3: Portofolio & Kapasitas
export const Step3Schema = z.object({
  experienceYears: z.number().min(1, "Pengalaman minimal 1 tahun"),
  projectValue: z.string().min(1, "Pilih skala nilai proyek"),
  category: z.string().min(1, "Pilih kategori bidang usaha"),
});

// Combined Schema
export const VendorRegistrationSchema =
  Step1Schema.merge(Step2Schema).merge(Step3Schema);

export type VendorRegistrationData = z.infer<typeof VendorRegistrationSchema>;
