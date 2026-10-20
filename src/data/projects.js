const images = import.meta.glob("../assets/projects_documentation/*.{png,jpg,jpeg,svg,webp}", { eager: true });

const karangtalunImage = images["../assets/projects_documentation/website_karangtalun.png"]?.default;

export const projectsData = {
  en: [
    {
      title: "Karangtalun Village Profile Website",
      type: "Web Development & GIS",
      context: "Community Service (KKN) Academic Project",
      year: null,
      role: "Web Developer",
      description:
        "A React-based village profile website with Static Site Generation (SSG), featuring an interactive map and demographic statistics dashboard.",
      approach: [
        "Developed a village profile website using React and Static Site Generation (SSG).",
        "Built an interactive map using Leaflet and GeoJSON to display village boundaries and key locations.",
        "Developed a demographic statistics dashboard and implemented Markdown-based content with SEO optimization.",
      ],
      result:
        "Delivered a web-based village information platform combining geographic information, demographic statistics, and structured village content.",
      technologies: [
        "React",
        "Vite",
        "Leaflet",
        "GeoJSON",
        "React Router",
        "Recharts",
      ],
      documentation: {
        images: [karangtalunImage],
      },
      links: {
        project: "https://karangtalun.my.id",
        github: "https://github.com/GaryFaldi/website-desa-karangtalun",
        report: null,
      },
      featured: true,
    },
    {
      title: "Customer Segmentation for Personalized Retail Marketing",
      type: "Machine Learning",
      context: "Best Capstone Project — Program Asah (Dicoding × Accenture)",
      year: null,
      role: "Machine Learning Developer",
      description:
        "A customer segmentation system designed to support personalized retail marketing strategies using RFM analysis and K-Means clustering.",
      approach: [
        "Performed customer segmentation using the RFM (Recency, Frequency, Monetary) approach and K-Means clustering.",
        "Built a Streamlit dashboard for customer segment visualization and prediction.",
        "Generated marketing strategy recommendations based on customer segmentation results.",
      ],
      result:
        "Awarded Best Capstone Project as Team A25-CS305 in the Asah program by Dicoding and Accenture.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: "https://asah-a25-cs305.streamlit.app/",
        github: "https://github.com/isyraffajar/Capstone-Asah",
        report: "https://youtu.be/wC2czL8qk5M",
      },
      featured: true,
    },
    {
      title: "EuroSAT Satellite Imagery Classification",
      type: "Deep Learning & Remote Sensing",
      context: "Dicoding — Learn Fundamental Deep Learning",
      year: null,
      role: "Machine Learning Developer",
      description:
        "A CNN-based image classification system for identifying 10 classes of satellite imagery from the EuroSAT dataset.",
      approach: [
        "Developed and trained a Convolutional Neural Network (CNN) for 10-class satellite imagery classification.",
        "Evaluated model performance and achieved 87.3% test accuracy.",
        "Exported the trained model to TensorFlow Lite and TensorFlow.js for multi-platform deployment.",
      ],
      result:
        "Achieved 87.3% test accuracy on the EuroSAT test dataset and prepared the model for multi-platform deployment.",
      technologies: [
        "TensorFlow",
        "CNN",
        "TensorFlow Lite",
        "TensorFlow.js",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/eurosat-satellite-image-classifier.git",
        report: null,
      },
      featured: true,
    },
    {
      title: "Student Dropout Prediction",
      type: "Data Science & Machine Learning",
      context: "Dicoding — Learn Data Science Application",
      year: null,
      role: "Data Scientist",
      description:
        "A student dropout prediction system and educational analytics dashboard for identifying potential dropout risk from academic data.",
      approach: [
        "Performed data cleaning, exploratory data analysis, and preparation of student academic data.",
        "Developed a Random Forest classification model for predicting student dropout risk.",
        "Built an analytical dashboard using Streamlit and Metabase.",
      ],
      result:
        "Random Forest achieved 91.05% accuracy in predicting student dropout risk.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Metabase",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/student-attrition-analysis.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Employee Attrition Prediction & HR Dashboard",
      type: "Machine Learning & HR Analytics",
      context: "Dicoding — Applied Machine Learning",
      year: null,
      role: "Machine Learning Developer",
      description:
        "An employee attrition prediction system and HR analytics dashboard designed to support data-driven workforce decision making.",
      approach: [
        "Compared multiple classification models to predict employee resignation probability.",
        "Selected Logistic Regression as the best-performing model based on ROC-AUC and Recall.",
        "Developed an HR analytics dashboard to support employee attrition analysis and decision making.",
      ],
      result:
        "Logistic Regression was selected as the best model with a ROC-AUC of 0.804 and Recall of 78%.",
      technologies: [
        "Python",
        "Scikit-learn",
        "XGBoost",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/employee-attrition-analytics-prediction.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Financial Transaction Analysis & Anomaly Detection",
      type: "Machine Learning & Data Analysis",
      context: "Dicoding — Learn Machine Learning for Beginners",
      year: null,
      role: "Machine Learning Developer",
      description:
        "A financial transaction analysis system combining customer segmentation, dimensionality reduction, clustering, and classification for transaction analysis and anomaly detection.",
      approach: [
        "Performed transaction segmentation using Principal Component Analysis (PCA) and K-Means clustering.",
        "Developed Decision Tree and Random Forest classification models with Bayesian Optimization.",
        "Evaluated model performance using Accuracy, Precision, Recall, and F1-Score.",
      ],
      result:
        "Developed an end-to-end workflow combining dimensionality reduction, clustering, classification, and model evaluation for financial transaction analysis.",
      technologies: [
        "Python",
        "Scikit-learn",
        "PCA",
        "K-Means",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/financial-transaction-anomaly-detection.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Air Quality Analysis Dashboard",
      type: "Data Analysis & GIS",
      context: "Dicoding — Learn Fundamental Data Analysis",
      year: null,
      role: "Data Analyst",
      description:
        "An interactive dashboard for exploring, analyzing, and visualizing air quality data with spatial analysis capabilities.",
      approach: [
        "Performed data cleaning, exploratory data analysis, and visualization of air quality data.",
        "Developed an interactive analytical dashboard using Streamlit.",
        "Integrated an interactive map using Folium for spatial visualization and analysis.",
      ],
      result:
        "Developed an interactive analytical dashboard combining statistical visualization with spatial exploration of air quality data.",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "Folium",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: "https://prsa-air-pollution-data-analysis.streamlit.app/",
        github: "https://github.com/GaryFaldi/Fundamental-Data-Analysis-Project.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Article Portal & Interaction Web App",
      type: "Web Development",
      context: "BNSP — Junior Web Programmer",
      year: null,
      role: "Web Developer",
      description:
        "A dynamic article portal with role-based authentication and interactive features for managing and engaging with published content.",
      approach: [
        "Developed article CRUD, comments, likes, and contact form functionality.",
        "Designed a relational database and implemented user session management.",
        "Implemented role-based authentication to manage access and user permissions.",
      ],
      result:
        "Developed a dynamic article platform with content management, user interaction, database management, and role-based access control.",
      technologies: [
        "PHP Native",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: null,
        report: null,
      },
      featured: false,
    },
  ],
  id: [
    {
      title: "Website Profil Desa Karangtalun",
      type: "Pengembangan Web & GIS",
      context: "Proyek Akademik Kuliah Kerja Nyata (KKN)",
      year: null,
      role: "Web Developer",
      description:
        "Website profil desa berbasis React dengan Static Site Generation (SSG), dilengkapi peta batas wilayah interaktif dan dashboard statistik demografi.",
      approach: [
        "Membangun website profil desa menggunakan React dan Static Site Generation (SSG).",
        "Membangun peta dinamis interaktif menggunakan Leaflet dan GeoJSON untuk menampilkan batas desa dan lokasi penting.",
        "Mengembangkan dashboard statistik demografi penduduk dan mengimplementasikan konten berbasis Markdown dengan optimalisasi SEO.",
      ],
      result:
        "Menghadirkan platform informasi desa berbasis web yang menggabungkan informasi geografis, statistik demografi, dan konten profil desa terstruktur.",
      technologies: [
        "React",
        "Vite",
        "Leaflet",
        "GeoJSON",
        "React Router",
        "Recharts",
      ],
      documentation: {
        images: [karangtalunImage],
      },
      links: {
        project: "https://karangtalun.my.id",
        github: "https://github.com/GaryFaldi/website-desa-karangtalun",
        report: null,
      },
      featured: true,
    },
    {
      title: "Customer Segmentation for Personalized Retail Marketing",
      type: "Machine Learning",
      context: "Best Capstone Project — Program Asah (Dicoding × Accenture)",
      year: null,
      role: "Machine Learning Developer",
      description:
        "Sistem segmentasi pelanggan ritel berbasis data transaksi untuk merumuskan strategi pemasaran personal menggunakan analisis RFM dan clustering.",
      approach: [
        "Melakukan segmentasi pelanggan menggunakan pendekatan RFM (Recency, Frequency, Monetary) dan K-Means clustering.",
        "Membangun dashboard interaktif Streamlit untuk visualisasi dan prediksi segmen pelanggan.",
        "Menyusun rekomendasi strategi pemasaran otomatis berdasarkan karakteristik segmen pelanggan yang terbentuk.",
      ],
      result:
        "Meraih penghargaan Best Capstone Project sebagai Tim A25-CS305 dalam program Asah oleh Dicoding dan Accenture.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: "https://asah-a25-cs305.streamlit.app/",
        github: "https://github.com/isyraffajar/Capstone-Asah",
        report: "https://youtu.be/wC2czL8qk5M",
      },
      featured: true,
    },
    {
      title: "EuroSAT Satellite Imagery Classification",
      type: "Deep Learning & Penginderaan Jauh",
      context: "Dicoding — Belajar Fundamental Deep Learning",
      year: null,
      role: "Machine Learning Developer",
      description:
        "Sistem klasifikasi citra satelit berbasis Convolutional Neural Network (CNN) untuk mendeteksi 10 kelas tutupan lahan pada dataset EuroSAT.",
      approach: [
        "Merancang dan melatih Convolutional Neural Network (CNN) untuk klasifikasi 10 kelas citra satelit.",
        "Mengevaluasi performa model hingga mencapai akurasi pengujian sebesar 87.3%.",
        "Mengekspor model terlatih ke format TensorFlow Lite dan TensorFlow.js untuk deployment multi-platform.",
      ],
      result:
        "Mencapai akurasi pengujian 87.3% pada dataset uji EuroSAT dan menyiapkan model untuk deployment multi-platform.",
      technologies: [
        "TensorFlow",
        "CNN",
        "TensorFlow Lite",
        "TensorFlow.js",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/eurosat-satellite-image-classifier.git",
        report: null,
      },
      featured: true,
    },
    {
      title: "Student Dropout Prediction",
      type: "Data Science & Machine Learning",
      context: "Dicoding — Belajar Penerapan Data Science",
      year: null,
      role: "Data Scientist",
      description:
        "Sistem prediksi risiko putus studi (dropout) mahasiswa dan dashboard analitik pendidikan berdasarkan data akademik.",
      approach: [
        "Melakukan data cleaning, exploratory data analysis (EDA), dan persiapan data akademik mahasiswa.",
        "Mengembangkan model klasifikasi Random Forest untuk memprediksi risiko dropout mahasiswa.",
        "Membangun dashboard analitik interaktif menggunakan Streamlit dan Metabase.",
      ],
      result:
        "Model Random Forest berhasil mencapai akurasi 91.05% dalam memprediksi risiko dropout mahasiswa.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Metabase",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/student-attrition-analysis.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Employee Attrition Prediction & HR Dashboard",
      type: "Machine Learning & HR Analytics",
      context: "Dicoding — Applied Machine Learning",
      year: null,
      role: "Machine Learning Developer",
      description:
        "Sistem prediksi attrition karyawan dan dashboard analitik HR yang dirancang untuk mendukung pengambilan keputusan tenaga kerja berbasis data.",
      approach: [
        "Membandingkan beberapa model klasifikasi untuk memprediksi probabilitas pengunduran diri karyawan.",
        "Memilih Logistic Regression sebagai model terbaik berdasarkan metrik ROC-AUC dan Recall.",
        "Mengembangkan dashboard analitik HR untuk mendukung analisis dan pengambilan keputusan terkait pergantian karyawan.",
      ],
      result:
        "Logistic Regression terpilih sebagai model terbaik dengan nilai ROC-AUC sebesar 0.804 dan Recall 78%.",
      technologies: [
        "Python",
        "Scikit-learn",
        "XGBoost",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/employee-attrition-analytics-prediction.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Financial Transaction Analysis & Anomaly Detection",
      type: "Machine Learning & Analisis Data",
      context: "Dicoding — Belajar Machine Learning untuk Pemula",
      year: null,
      role: "Machine Learning Developer",
      description:
        "Sistem analisis transaksi keuangan yang menggabungkan segmentasi nasabah, reduksi dimensi, clustering, dan klasifikasi untuk analisis transaksi serta deteksi anomali.",
      approach: [
        "Melakukan segmentasi transaksi menggunakan Principal Component Analysis (PCA) dan K-Means clustering.",
        "Mengembangkan model klasifikasi Decision Tree dan Random Forest dengan Bayesian Optimization.",
        "Mengevaluasi performa model menggunakan metrik Akurasi, Presisi, Recall, dan F1-Score.",
      ],
      result:
        "Mengembangkan workflow end-to-end yang menggabungkan reduksi dimensi, clustering, klasifikasi, dan evaluasi model untuk analisis transaksi keuangan.",
      technologies: [
        "Python",
        "Scikit-learn",
        "PCA",
        "K-Means",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: "https://github.com/GaryFaldi/financial-transaction-anomaly-detection.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Air Quality Analysis Dashboard",
      type: "Analisis Data & GIS",
      context: "Dicoding — Belajar Fundamental Analisis Data",
      year: null,
      role: "Data Analyst",
      description:
        "Dashboard interaktif untuk eksplorasi, analisis, dan visualisasi data kualitas udara dengan kemampuan analisis spasial.",
      approach: [
        "Melakukan pembersihan data, exploratory data analysis, dan visualisasi data kualitas udara.",
        "Mengembangkan dashboard analitik interaktif menggunakan Streamlit.",
        "Mengintegrasikan peta interaktif menggunakan Folium untuk eksplorasi dan analisis spasial.",
      ],
      result:
        "Mengembangkan dashboard analitik interaktif yang menggabungkan visualisasi statistik dengan eksplorasi spasial data kualitas udara.",
      technologies: [
        "Python",
        "Streamlit",
        "Pandas",
        "Folium",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: "https://prsa-air-pollution-data-analysis.streamlit.app/",
        github: "https://github.com/GaryFaldi/Fundamental-Data-Analysis-Project.git",
        report: null,
      },
      featured: false,
    },
    {
      title: "Article Portal & Interaction Web App",
      type: "Pengembangan Web",
      context: "BNSP — Junior Web Programmer",
      year: null,
      role: "Web Developer",
      description:
        "Portal artikel dinamis dengan autentikasi berbasis peran dan fitur interaktif untuk mengelola serta berinteraksi dengan konten publikasi.",
      approach: [
        "Mengembangkan fitur CRUD artikel, komentar, likes, dan formulir kontak.",
        "Merancang database relasional dan menerapkan manajemen sesi pengguna.",
        "Menerapkan autentikasi berbasis peran (RBAC) untuk mengelola hak akses pengguna.",
      ],
      result:
        "Mengembangkan platform artikel dinamis dengan manajemen konten, interaksi pengguna, pengelolaan database, dan kontrol akses berbasis peran.",
      technologies: [
        "PHP Native",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      documentation: {
        images: [],
      },
      links: {
        project: null,
        github: null,
        report: null,
      },
      featured: false,
    },
  ],
};

export const getProjects = (lang = "en") => projectsData[lang] || projectsData.en;
export const projects = projectsData.en;