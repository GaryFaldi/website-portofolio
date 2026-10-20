export const educationData = {
  en: [
    {
      institution: 'Universitas Pembangunan Nasional "Veteran" Yogyakarta',
      degree: "Bachelor of Informatics",
      period: "2023 – Present",
      detail: "GPA 3.63/4.00 (133 Credits)",
    },
    {
      institution: "SMA Negeri 1 Toili",
      degree: "Natural Sciences (MIPA)",
      period: "2020 – 2023",
      detail: "Average Score: 87.15/100",
      extra: [
        "National Science Olympiad (OSN) in Informatics — School representative at the provincial level in 2021 & 2022.",
        "Top 6 eligible students for SNBP SMA Negeri 1 Toili, class of 2023.",
      ],
    },
  ],
  id: [
    {
      institution: 'Universitas Pembangunan Nasional "Veteran" Yogyakarta',
      degree: "Sarjana Informatika (S1)",
      period: "2023 – Sekarang",
      detail: "IPK 3.63/4.00 (133 SKS)",
    },
    {
      institution: "SMA Negeri 1 Toili",
      degree: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
      period: "2020 – 2023",
      detail: "Nilai Rata-rata: 87.15/100",
      extra: [
        "Olimpiade Sains Nasional (OSN) bidang Informatika — Perwakilan sekolah di tingkat provinsi tahun 2021 & 2022.",
        "Top 6 siswa eligible SNBP di SMA Negeri 1 Toili angkatan 2023.",
      ],
    },
  ],
};

export const bootcampsData = {
  en: [
    {
      program: "Program Asah (led by Dicoding in association with Accenture)",
      track: "Machine Learning Cohort",
      period: "August 2025 – January 2026",
      detail: "Average Score: 91.07/100 · Best Capstone Project Award (Team A25-CS305)",
    },
    {
      program: "National Board for Professional Certification (BNSP)",
      track: "Junior Web Programmer",
      period: "August 2025 – January 2026",
      detail: "Certified Competent — Software Programming and Development.",
    },
  ],
  id: [
    {
      program: "Program Asah (diselenggarakan oleh Dicoding bersama Accenture)",
      track: "Machine Learning Cohort",
      period: "Agustus 2025 – Januari 2026",
      detail: "Nilai Rata-rata: 91.07/100 · Penghargaan Proyek Capstone Terbaik (Tim A25-CS305)",
    },
    {
      program: "Badan Nasional Sertifikasi Profesi (BNSP)",
      track: "Junior Web Programmer",
      period: "Agustus 2025 – Januari 2026",
      detail: "Dinyatakan Kompeten — Pemrograman dan Pengembangan Perangkat Lunak.",
    },
  ],
};

export const getEducation = (lang = "en") => educationData[lang] || educationData.en;
export const getBootcamps = (lang = "en") => bootcampsData[lang] || bootcampsData.en;
export const education = educationData.en;
export const bootcamps = bootcampsData.en;
