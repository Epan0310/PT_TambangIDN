"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "ID" | "EN";

export const dictionary = {
  // =========================================================================
  // 1. NAVIGATION & GENERAL
  // =========================================================================
  nav_beranda: { ID: "Beranda", EN: "Home" },
  nav_operasi: { ID: "Operasi & Komoditas", EN: "Operations & Commodities" },
  nav_esg: { ID: "ESG & Keberlanjutan", EN: "ESG & Sustainability" },
  nav_investor: { ID: "Hubungan Investor", EN: "Investor Relations" },
  nav_procurement: { ID: "E-Procurement", EN: "E-Procurement" },
  nav_mitra: { ID: "Portal Mitra", EN: "Partner Portal" },

  // =========================================================================
  // 2. BERANDA (HOME PAGE)
  // =========================================================================
  home_hero_badge: {
    ID: "Pelopor Pertambangan Berkelanjutan & Terintegrasi",
    EN: "Pioneering Sustainable & Integrated Mining",
  },
  home_hero_title: {
    ID: "Menambang untuk Masa Depan Berkelanjutan",
    EN: "Mining for a Sustainable Future",
  },
  home_hero_desc: {
    ID: "Berkomitmen pada keunggulan operasional dan tanggung jawab lingkungan dalam mengelola sumber daya alam Indonesia untuk generasi mendatang.",
    EN: "Committed to operational excellence and environmental responsibility in managing Indonesia's natural resources for future generations.",
  },
  home_btn_explore: { ID: "Eksplorasi Peta 3D", EN: "Explore 3D Map" },
  home_btn_esg: { ID: "Laporan ESG Mitra", EN: "Partner ESG Report" },
  home_btn_procurement: { ID: "Portal Pengadaan", EN: "Procurement Portal" },
  home_stats_tag: { ID: "Kinerja Utama", EN: "Key Performance" },

  // Home Stats
  home_stat1_val: { ID: "25 Jt", EN: "25M" },
  home_stat1_label: {
    ID: "TOTAL PRODUKSI TON/TAHUN",
    EN: "TOTAL PRODUCTION TONS/YEAR",
  },
  home_stat2_val: { ID: "12 Juta", EN: "12 Million" },
  home_stat2_label: { ID: "JAM KERJA AMAN", EN: "SAFE WORKING HOURS" },
  home_stat3_val: { ID: "95%", EN: "95%" },
  home_stat3_label: {
    ID: "EFISIENSI OPERASIONAL",
    EN: "OPERATIONAL EFFICIENCY",
  },
  home_stat4_val: { ID: "88%", EN: "88%" },
  home_stat4_label: {
    ID: "Tingkat Daur Ulang Air",
    EN: "Water Recycling Rate",
  },

  // Home - Section Operasi
  home_op_badge: { ID: "Lini Bisnis Utama", EN: "Core Business Lines" },
  home_op_title: {
    ID: "Operasi & Komoditas Unggulan",
    EN: "Featured Operations & Commodities",
  },
  home_op_coal_title: { ID: "Batubara Kalori Tinggi", EN: "High-Calorie Coal" },
  home_op_coal_desc: {
    ID: "Pemasok energi terpercaya untuk kebutuhan domestik dan pasar ekspor Asia dengan efisiensi rantai pasok tinggi.",
    EN: "Trusted energy provider for domestic and Asian export markets with a highly efficient supply chain.",
  },
  home_op_nickel_title: {
    ID: "Nikel Kadar Tinggi (Smelter)",
    EN: "High-Grade Nickel (Smelter)",
  },
  home_op_nickel_desc: {
    ID: "Mendukung ekosistem baterai kendaraan listrik global melalui proses pengolahan hilirisasi yang ramah lingkungan.",
    EN: "Supporting the global EV battery ecosystem through environmentally conscious downstream processing.",
  },
  home_op_gold_title: { ID: "Emas & Tembaga", EN: "Gold & Copper" },
  home_op_gold_desc: {
    ID: "Eksplorasi dan penambangan mineral berharga dengan teknologi modern dan kepatuhan keselamatan kerja tingkat tinggi.",
    EN: "Precious mineral exploration and mining utilizing modern technology and rigorous safety standards.",
  },

  // Home - Section Berita & Sorotan
  home_news_badge: { ID: "Kabar Perusahaan", EN: "Corporate News" },
  home_news_title: {
    ID: "Berita & Pengumuman Terbaru",
    EN: "Latest News & Announcements",
  },
  home_news1_date: { ID: "12 Agustus 2026", EN: "August 12, 2026" },
  home_news1_title: {
    ID: "PT Tambang Indonesia Raih Penghargaan Penerapan K3 Terbaik Kategori Tambang Terbuka",
    EN: "PT Tambang Indonesia Wins Best HSE Implementation Award for Open-Pit Category",
  },
  home_news1_desc: {
    ID: "Pemerintah memberikan apresiasi atas pencapaian 15 juta jam kerja tanpa kecelakaan fatal (Zero Harm).",
    EN: "Government recognizes the achievement of 15 million man-hours without fatal accidents (Zero Harm).",
  },
  home_news2_date: { ID: "28 Juli 2026", EN: "July 28, 2026" },
  home_news2_title: {
    ID: "Pembangkit Listrik Tenaga Surya (PLTS) 45 MWp Resmi Beroperasi di Site Kalimantan",
    EN: "45 MWp Solar Power Plant Officially Commenced Operation at Kalimantan Site",
  },
  home_news2_desc: {
    ID: "Langkah konkrit perusahaan dalam mereduksi intensitas emisi karbon operasional hingga 20%.",
    EN: "A concrete step by the company to reduce operational carbon emission intensity by up to 20%.",
  },
  home_news3_date: { ID: "05 Juni 2026", EN: "June 05, 2026" },
  home_news3_title: {
    ID: "Laporan Keuangan Kuartal II 2026 Menunjukkan Pertumbuhan Pendapatan Positif",
    EN: "Q2 2026 Financial Report Shows Positive Revenue Growth",
  },
  home_news3_desc: {
    ID: "Efisiensi operasional dan optimalisasi harga komoditas menopang kinerja finansial yang kuat.",
    EN: "Operational efficiency and commodity price optimization bolster strong financial performance.",
  },

  // =========================================================================
  // 3. OPERASI & KOMODITAS PAGE
  // =========================================================================
  op_hero_title: {
    ID: "Operasi Pertambangan Terintegrasi & Komoditas Unggulan",
    EN: "Integrated Mining Operations & Featured Commodities",
  },
  op_hero_desc: {
    ID: "Memastikan efisiensi rantai pasok global dengan standar kualitas material kelas dunia, didukung infrastruktur logistik mutakhir dari pit hingga port.",
    EN: "Ensuring global supply chain efficiency with world-class material quality standards, backed by cutting-edge logistics infrastructure from pit to port.",
  },
  op_map_loading: {
    ID: "Memuat Peta Interaktif...",
    EN: "Loading Interactive Map...",
  },
  op_btn_catalog: {
    ID: "Lihat Katalog Komoditas",
    EN: "View Commodity Catalog",
  },
  op_catalog_title: {
    ID: "Katalog Komoditas Utama",
    EN: "Main Commodity Catalog",
  },
  op_catalog_desc: {
    ID: "Produk tambang berkualitas tinggi dengan sertifikasi standar internasional.",
    EN: "High-quality mining products certified to international standards.",
  },

  // Commodities List
  op_c1_name: { ID: "Nikel (Nickel Ore)", EN: "Nickel (Nickel Ore)" },
  op_c1_grade: { ID: "High-Grade 1.8% Fe", EN: "High-Grade 1.8% Fe" },
  op_c1_loc: { ID: "Halmahera & Sulawesi", EN: "Halmahera & Sulawesi" },
  op_c1_desc: {
    ID: "Bahan baku utama industri baterai kendaraan listrik (EV) dan pemrosesan stainless steel.",
    EN: "Essential raw material for electric vehicle (EV) batteries and stainless steel processing.",
  },
  op_c1_tag: { ID: "Baterai & EV", EN: "Batteries & EV" },

  op_c2_name: { ID: "Batubara (Thermal Coal)", EN: "Coal (Thermal Coal)" },
  op_c2_grade: { ID: "GAR 5800 - 6200 kcal/kg", EN: "GAR 5800 - 6200 kcal/kg" },
  op_c2_loc: { ID: "Kalimantan Timur", EN: "East Kalimantan" },
  op_c2_desc: {
    ID: "Batubara kualitas tinggi dengan kadar sulfur rendah untuk pembangkit listrik industri.",
    EN: "High-quality coal with low sulfur content for industrial power generation.",
  },
  op_c2_tag: { ID: "Energi Global", EN: "Global Energy" },

  op_c3_name: { ID: "Konsentrat Tembaga", EN: "Copper Concentrate" },
  op_c3_grade: { ID: "Cu 25% + Au Grade", EN: "Cu 25% + Au Grade" },
  op_c3_loc: { ID: "Nusa Tenggara & Papua", EN: "Nusa Tenggara & Papua" },
  op_c3_desc: {
    ID: "Komoditas esensial pendukung transmisi listrik, energi terbarukan, dan infrastruktur.",
    EN: "Essential commodity supporting power transmission, renewable energy, and infrastructure.",
  },
  op_c3_tag: { ID: "Infrastruktur", EN: "Infrastructure" },

  // =========================================================================
  // 4. KEBERLANJUTAN (ESG) PAGE
  // =========================================================================
  esg_hero_title: {
    ID: "Transparansi Keberlanjutan & Reklamasi Lahan",
    EN: "Sustainability Transparency & Land Reclamation",
  },
  esg_hero_desc: {
    ID: "Komitmen teguh kami terhadap pemulihan lingkungan, pengurangan jejak karbon, dan pemberdayaan komunitas lokal demi masa depan industri pertambangan yang berkelanjutan.",
    EN: "Our firm commitment to environmental restoration, carbon footprint reduction, and local community empowerment for a sustainable mining future.",
  },
  esg_btn_report: { ID: "Laporan ESG 2026 (PDF)", EN: "2026 ESG Report (PDF)" },
  esg_perf_badge: { ID: "Kinerja ESG", EN: "ESG Performance" },
  esg_perf_title: {
    ID: "Metrik Keberlanjutan Kunci",
    EN: "Key Sustainability Metrics",
  },
  esg_m1_title: {
    ID: "EMISI KARBON REAL-TIME",
    EN: "REAL-TIME CARBON EMISSION",
  },
  esg_m1_sub: {
    ID: "Target Net Zero 2030: -35% vs 2020",
    EN: "Net Zero 2030 Target: -35% vs 2020",
  },
  esg_m2_title: { ID: "TINGKAT DAUR ULANG AIR", EN: "WATER RECYCLING RATE" },
  esg_m2_sub: {
    ID: "Sistem Sirkuit Tertutup Aktif",
    EN: "Active Closed-Circuit System",
  },
  esg_m3_title: { ID: "ADOPSI ENERGI SURYA", EN: "SOLAR ENERGY ADOPTION" },
  esg_m3_sub: {
    ID: "Terpasang di 3 Lokasi Tambang Utama",
    EN: "Installed across 3 Main Mining Sites",
  },
  esg_m4_title: {
    ID: "INDEKS KEANEKARAGAMAN HAYATI",
    EN: "BIODIVERSITY INDEX",
  },
  esg_m4_sub: {
    ID: "Kawasan Konservasi Flora & Fauna",
    EN: "Flora & Fauna Conservation Area",
  },
  esg_csr_badge: { ID: "Pemberdayaan Masyarakat", EN: "Community Empowerment" },
  esg_csr_title: {
    ID: "Inisiatif Tanggung Jawab Sosial (CSR)",
    EN: "CSR Initiatives",
  },
  esg_csr1_title: { ID: "Pendidikan & Pelatihan", EN: "Education & Training" },
  esg_csr1_desc: {
    ID: "Program beasiswa dan pembangunan fasilitas pendidikan vokasi untuk mempersiapkan tenaga kerja lokal berdaya saing global.",
    EN: "Scholarship programs and vocational education facility development to prepare local workforce for global competitiveness.",
  },
  esg_csr2_title: { ID: "Fasilitas Kesehatan", EN: "Healthcare Facilities" },
  esg_csr2_desc: {
    ID: "Penyediaan klinik keliling dan peningkatan kualitas Puskesmas di area lingkar tambang untuk menjamin kesehatan masyarakat.",
    EN: "Mobile clinics and community health center upgrades around mining operational areas to ensure public health.",
  },
  esg_csr3_title: { ID: "Pendanaan UMKM", EN: "MSME Funding" },
  esg_csr3_desc: {
    ID: "Penyaluran modal usaha dan pendampingan bisnis bagi pengusaha lokal untuk menciptakan kemandirian ekonomi pasca-tambang.",
    EN: "Capital funding and business mentoring for local entrepreneurs to drive post-mining economic independence.",
  },
  esg_btn_learn_more: { ID: "Pelajari Lebih Lanjut", EN: "Learn More" },

  // =========================================================================
  // 5. HUBUNGAN INVESTOR PAGE
  // =========================================================================
  inv_mcap: { ID: "KAPITALISASI PASAR", EN: "MARKET CAP" },
  inv_q2_rev: { ID: "PENDAPATAN Q2", EN: "Q2 REVENUE" },
  inv_ebitda: { ID: "MARGIN EBITDA", EN: "EBITDA MARGIN" },
  inv_reports_title: {
    ID: "Pusat Laporan Keuangan",
    EN: "Financial Reports Center",
  },
  inv_reports_desc: {
    ID: "Akses keterbukaan informasi keuangan, laporan tahunan, dan presentasi investor secara lengkap.",
    EN: "Access comprehensive financial disclosures, annual reports, and investor presentations.",
  },
  inv_btn_annual: { ID: "Laporan Tahunan", EN: "Annual Reports" },
  inv_btn_financials: { ID: "Laporan Keuangan", EN: "Financials" },
  inv_btn_all_docs: { ID: "Semua Dokumen", EN: "All Documents" },
  inv_th_doc: { ID: "Dokumen", EN: "Document" },
  inv_th_year: { ID: "Tahun", EN: "Year" },
  inv_th_quarter: { ID: "Kuartal", EN: "Quarter" },
  inv_th_size: { ID: "Ukuran File", EN: "File Size" },
  inv_th_action: { ID: "Aksi", EN: "Action" },
  inv_doc1: {
    ID: "Laporan Keuangan Konsolidasian",
    EN: "Consolidated Financial Statements",
  },
  inv_doc2: { ID: "Presentasi Perusahaan", EN: "Corporate Presentation" },
  inv_doc3: { ID: "Laporan Tahunan (Annual Report)", EN: "Annual Report" },
  inv_doc4: { ID: "Laporan Keberlanjutan", EN: "Sustainability Report" },
  inv_cal_title: { ID: "Kalender Investor", EN: "Investor Calendar" },
  inv_evt1_title: {
    ID: "Paparan Kinerja Q3 2026",
    EN: "Q3 2026 Earnings Call",
  },
  inv_evt1_desc: {
    ID: "Presentasi webcast hasil kinerja keuangan Q3.",
    EN: "Webcast presentation of Q3 financial results.",
  },
  inv_evt1_act: { ID: "TAMBAH KE KALENDER", EN: "ADD TO CALENDAR" },
  inv_evt2_title: {
    ID: "Pembayaran Dividen Interim",
    EN: "Interim Dividend Payment",
  },
  inv_evt2_desc: {
    ID: "Ex-date: 20 Nov, Record date: 22 Nov.",
    EN: "Ex-date: Nov 20, Record date: Nov 22.",
  },
  inv_evt2_act: { ID: "LIHAT DETAIL", EN: "VIEW DETAILS" },
  inv_wbs_cert: { ID: "Tersertifikasi ISO 37001", EN: "ISO 37001 Certified" },
  inv_wbs_title: {
    ID: "Sistem Pelaporan Pelanggaran",
    EN: "Whistleblowing System",
  },
  inv_wbs_desc: {
    ID: "PT Tambang Indonesia berkomitmen pada Tata Kelola Perusahaan yang Baik (GCG). Laporkan pelanggaran secara aman dan anonim.",
    EN: "PT Tambang Indonesia is committed to Good Corporate Governance (GCG). Report any violations safely and anonymously.",
  },
  inv_wbs_btn: {
    ID: "Kirim Laporan Pengaduan Anonim",
    EN: "Submit Anonymous Report",
  },
  inv_lead_title: { ID: "Kepemimpinan", EN: "Leadership" },
  inv_lead_view_all: { ID: "Lihat Semua", EN: "View All" },
  inv_role_comm: { ID: "Komisaris Utama", EN: "President Commissioner" },
  inv_role_ceo: { ID: "Direktur Utama / CEO", EN: "President Director / CEO" },

  // =========================================================================
  // 6. E-PROCUREMENT PAGE
  // =========================================================================
  hero_title: {
    ID: "Portal Pengadaan & Pendaftaran Rekanan Vendor Resmi",
    EN: "Official Vendor Partner Registration & Procurement Portal",
  },
  hero_desc: {
    ID: "Sistem terintegrasi untuk pendaftaran rekanan, manajemen tender, dan pengadaan barang/jasa di lingkungan operasional PT Tambang Indonesia. Mengedepankan transparansi, efisiensi, dan keselamatan kerja.",
    EN: "An integrated system for partner registration, tender management, and procurement of goods/services within PT Tambang Indonesia operations. Prioritizing transparency, efficiency, and safety.",
  },
  cat_all: { ID: "Semua Kategori", EN: "All Categories" },
  cat_heavy: { ID: "Alat Berat", EN: "Heavy Equipment" },
  cat_logistics: { ID: "Logistik", EN: "Logistics" },
  cat_catering: { ID: "Katering", EN: "Catering" },
  cat_safety: { ID: "Safety (K3)", EN: "Safety (HSE)" },
  tender_title: { ID: "Daftar Tender Terbuka", EN: "Open Tenders List" },
  tender_desc: {
    ID: "Kesempatan pengadaan barang dan jasa terkini.",
    EN: "Latest opportunities for goods and services procurement.",
  },
  th_nama: { ID: "NAMA TENDER", EN: "TENDER NAME" },
  th_kode: { ID: "KODE TENDER", EN: "TENDER CODE" },
  th_batas: { ID: "BATAS AKHIR", EN: "DEADLINE" },
  th_status: { ID: "STATUS", EN: "STATUS" },
  th_aksi: { ID: "AKSI", EN: "ACTION" },
  btn_detail: { ID: "Detail", EN: "Details" },
  t1_title: {
    ID: "Pengadaan Suku Cadang Dump Truck Kelas 400 Ton",
    EN: "Procurement of 400-Ton Class Dump Truck Spare Parts",
  },
  t2_title: {
    ID: "Layanan Transportasi Batubara Rute Blok Selatan",
    EN: "Coal Transportation Services - South Block Route",
  },
  t3_title: {
    ID: "Penyediaan APD (Alat Pelindung Diri) Area Smelter",
    EN: "Supply of PPE (Personal Protective Equipment) for Smelter Area",
  },
  status_open: { ID: "Pendaftaran Buka", EN: "Registration Open" },
  status_prep: { ID: "Persiapan Dokumen", EN: "Document Prep" },
  reg_title: { ID: "Pendaftaran Rekanan Baru", EN: "New Partner Registration" },
  reg_desc: {
    ID: "Ikuti panduan registrasi tiga langkah untuk menjadi vendor resmi yang terverifikasi di sistem e-procurement kami.",
    EN: "Follow our three-step registration guide to become an official verified vendor in our e-procurement system.",
  },
  step_1: { ID: "Legalitas & Administrasi", EN: "Legality & Administration" },
  step_2: { ID: "Sertifikasi K3LH", EN: "HSE Certification" },
  step_3: { ID: "Portofolio & Kapasitas", EN: "Portfolio & Capacity" },
  btn_start_reg: { ID: "Mulai Pendaftaran", EN: "Start Registration" },
  login_title: { ID: "Masuk Portal", EN: "Portal Login" },
  login_desc: {
    ID: "Akses khusus untuk vendor terdaftar.",
    EN: "Exclusive access for registered vendors.",
  },
  lbl_vendor_id: { ID: "ID REKANAN / EMAIL", EN: "PARTNER ID / EMAIL" },
  lbl_password: { ID: "KATA SANDI", EN: "PASSWORD" },
  lbl_remember: { ID: "Ingat Saya", EN: "Remember Me" },
  lbl_forgot: { ID: "Lupa Sandi?", EN: "Forgot Password?" },
  btn_login: { ID: "Masuk Sistem", EN: "Sign In" },
  compliance_title: {
    ID: "Kepatuhan & Etika Bisnis (Anti-Korupsi)",
    EN: "Compliance & Business Ethics (Anti-Corruption)",
  },
  compliance_desc: {
    ID: "PT Tambang Indonesia menerapkan kebijakan Zero Tolerance terhadap suap dan korupsi. Seluruh rekanan wajib mematuhi standar integritas tertinggi selama proses pengadaan dan operasional.",
    EN: "PT Tambang Indonesia enforces a Zero Tolerance policy against bribery and corruption. All partners must adhere to the highest integrity standards during procurement and operations.",
  },
  btn_download_coc: {
    ID: "Unduh Vendor Code of Conduct",
    EN: "Download Vendor Code of Conduct",
  },

  // =========================================================================
  // 7. FOOTER
  // =========================================================================
  footer_desc: {
    ID: "Perusahaan pertambangan terintegrasi terkemuka di Indonesia yang berkomitmen terhadap operasional yang aman, ramah lingkungan, dan bernilai tambah bagi seluruh pemangku kepentingan.",
    EN: "Indonesia's leading integrated mining company committed to safe, environmentally friendly, and value-adding operations for all stakeholders.",
  },
  footer_quick_links: { ID: "Tautan Cepat", EN: "Quick Links" },
  footer_contact: { ID: "Kantor Pusat", EN: "Head Office" },
  footer_rights: {
    ID: "Hak Cipta Dilindungi. PT Tambang Indonesia Tbk.",
    EN: "All Rights Reserved. PT Tambang Indonesia Tbk.",
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof dictionary) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ID");

  const t = (key: keyof typeof dictionary) => {
    if (dictionary[key]) {
      return dictionary[key][lang];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
