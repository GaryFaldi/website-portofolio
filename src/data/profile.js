export const profileData = {
  en: {
    name: "Kadek Gary Faldi",
    gpa: "3.63/4.00",
    shortName: "Gery",
    headline:
      "Informatics Student exploring Technology, Artificial Intelligence, Data, and Software Development.",
    tagline:
      "Building predictive models, spatial analysis tools, and data-driven software — currently finishing my degree at UPN \"Veteran\" Yogyakarta.",
    location: "Yogyakarta, Indonesia",
    email: "garyfaldi1@gmail.com",
    phone: "+62 813-5670-5440",
    resumeUrls: {
      id: "/resume-kadek-gary-faldi-id.pdf",
      en: "/resume-kadek-gary-faldi-en.pdf",
    },
    about: [
      "I am an Informatics student at UPN \"Veteran\" Yogyakarta (GPA 3.63/4.00) focusing on Machine Learning, Data Science, and GIS Analytics. Most of my learning time is spent building predictive models with Python — ranging from satellite imagery classification and customer segmentations to student dropout predictions.",
      "Besides machine learning, I am also active in web development (React) and have completed the Junior Web Programmer certification from BNSP. One of my favorite projects is building a village profile website with an interactive map using Leaflet and GeoJSON — a blend of web development and GIS.",
      "Outside of academics, I lead the Hindu Dharma Student Activity Unit (UKM) at UPN \"Veteran\" Yogyakarta, coordinating annual work programs and cross-divisional teams. I am currently seeking internship or entry-level roles in Data Science, Machine Learning, or Software Development.",
    ],
  },
  id: {
    name: "Kadek Gary Faldi",
    gpa: "3.63/4.00",
    shortName: "Gery",
    headline:
      "Mahasiswa Informatika yang mengeksplorasi Teknologi, Kecerdasan Buatan, Data, dan Pengembangan Perangkat Lunak.",
    tagline:
      "Membangun model prediktif, analisis spasial, dan perangkat lunak berbasis data — saat ini menempuh studi di UPN \"Veteran\" Yogyakarta.",
    location: "Yogyakarta, Indonesia",
    email: "garyfaldi1@gmail.com",
    phone: "+62 813-5670-5440",
    resumeUrls: {
      id: "/resume-kadek-gary-faldi-id.pdf",
      en: "/resume-kadek-gary-faldi-en.pdf",
    },
    about: [
      "Saya adalah mahasiswa Informatika di UPN \"Veteran\" Yogyakarta (IPK 3.63/4.00) dengan fokus pada Machine Learning, Data Science, dan Analisis GIS. Sebagian besar waktu belajar saya dedikasikan untuk membangun model prediktif berbasis Python — mulai dari klasifikasi citra satelit dan segmentasi pelanggan hingga prediksi dropout mahasiswa.",
      "Selain machine learning, saya juga aktif dalam pengembangan web (React) dan telah menyelesaikan sertifikasi Junior Web Programmer dari BNSP. Salah satu proyek favorit saya adalah membangun website profil desa dengan peta interaktif menggunakan Leaflet dan GeoJSON — perpaduan antara pengembangan web dan GIS.",
      "Di luar bidang akademis, saya memimpin Unit Kegiatan Mahasiswa (UKM) Hindu Dharma di UPN \"Veteran\" Yogyakarta, mengoordinasikan program kerja tahunan dan tim lintas divisi. Saat ini saya terbuka untuk peluang magang atau posisi entry-level di bidang Data Science, Machine Learning, atau Software Development.",
    ],
  },
};

export const getProfile = (lang = "en") => profileData[lang] || profileData.en;
export const profile = profileData.en;
