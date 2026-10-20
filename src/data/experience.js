export const experienceData = {
  en: [
    {
      role: "President / Chairperson",
      organization: 'UKM Hindu Dharma UPN "Veteran" Yogyakarta',
      period: "May 2026 – Present",
      points: [
        "Led the organization consisting of 5 divisions and the Executive Committee (BPH).",
        "Coordinated the execution of 4 annual work programs, including religious, social, human resource development, and member recruitment activities.",
        "Served as the organization's representative in communicating with the university, student organizations, and external parties.",
        "Supervised budget preparation, timelines, and program evaluations to ensure organizational targets were achieved.",
      ],
    },
    {
      role: "Logistics & Equipment Division Coordinator — Community Service (Bakti Sosial)",
      organization: 'UKM Hindu Dharma UPN "Veteran" Yogyakarta',
      period: "November 2025",
      points: [
        "Led the logistics team in planning and distributing equipment for community service activities.",
        "Managed participant logistics needs and ensured all equipment was available on time.",
        "Coordinated with vendors and external partners for efficient procurement of goods.",
        "Controlled distribution flow and logistics inventory so that all events ran without operational issues.",
      ],
    },
    {
      role: "SHE Data & Reporting Intern",
      organization: "PT Chakra Jawara",
      period: "October 2026 – Present",
      points: [
        "Support Safety, Health & Environment (SHE) functions through the processing, management, and analysis of operational safety data.",
        "Perform data preparation, cleaning, and management using Microsoft Excel to support SHE reporting and monitoring activities.",
        "Support data visualization and reporting using Microsoft Power BI to present SHE information in a structured and accessible manner.",
        "Monitor and analyze data related to safety findings, inspections, incidents, and corrective actions to identify patterns and key insights.",
        "Collaborate with the SHE team to understand business processes, data requirements, and reporting workflows within a heavy equipment operational environment.",
      ],
    },
  ],
  id: [
    {
      role: "Ketua Umum",
      organization: 'UKM Hindu Dharma UPN "Veteran" Yogyakarta',
      period: "Mei 2026 – Sekarang",
      points: [
        "Memimpin organisasi yang terdiri dari 5 divisi serta Badan Pengurus Harian (BPH).",
        "Mengoordinasikan pelaksanaan 4 program kerja tahunan berskala universitas (kegiatan keagamaan, sosial, pengembangan SDM, dan perekrutan anggota baru).",
        "Bertindak sebagai perwakilan utama organisasi dalam membangun komunikasi dengan pihak universitas, organisasi kemahasiswaan, dan pihak eksternal.",
        "Mengawasi penyusunan anggaran, lini masa proyek, serta evaluasi program kerja guna memastikan target organisasi tercapai.",
      ],
    },
    {
      role: "Koordinator Divisi Logistik & Perlengkapan — Bakti Sosial",
      organization: 'UKM Hindu Dharma UPN "Veteran" Yogyakarta',
      period: "November 2025",
      points: [
        "Memimpin tim logistik dalam perencanaan dan distribusi perlengkapan untuk kegiatan bakti sosial.",
        "Mengelola kebutuhan logistik peserta dan memastikan seluruh peralatan tersedia tepat waktu.",
        "Berkoordinasi dengan vendor dan mitra eksternal untuk pengadaan barang secara efisien.",
        "Mengontrol alur distribusi dan inventaris logistik sehingga acara dapat berjalan tanpa hambatan operasional.",
      ],
    },
    {
      role: "SHE Data & Reporting Intern",
      organization: "PT Chakra Jawara",
      period: "Oktober 2026 – Sekarang",
      points: [
        "Mendukung fungsi Keselamatan, Kesehatan Kerja & Lingkungan Hidup (K3L/SHE) melalui pengolahan, pengelolaan, dan analisis data operasional keselamatan kerja.",
        "Melakukan persiapan data, pembersihan data (data cleaning), dan pengelolaan data menggunakan Microsoft Excel untuk mendukung kegiatan pelaporan dan pemantauan SHE.",
        "Mendukung visualisasi data dan pelaporan menggunakan Microsoft Power BI guna menyajikan informasi SHE secara terstruktur dan mudah diakses.",
        "Memantau dan menganalisis data terkait temuan keselamatan, inspeksi, insiden, serta tindakan korektif untuk mengidentifikasi pola dan wawasan utama.",
        "Berkolaborasi dengan tim SHE untuk memahami proses bisnis, kebutuhan data, dan alur kerja pelaporan di lingkungan operasional alat berat.",
      ],
    },
  ],
};

export const getExperience = (lang = "en") => experienceData[lang] || experienceData.en;
export const experience = experienceData.en;
