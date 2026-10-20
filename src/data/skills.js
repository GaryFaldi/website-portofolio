export const skillGroupsData = {
  en: [
    {
      category: "Programming",
      items: ["Python", "SQL", "JavaScript", "PHP"],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "Scikit-learn",
        "TensorFlow",
        "Deep Learning",
        "Machine Learning",
        "Computer Vision",
      ],
    },
    {
      category: "Data & Analytics",
      items: ["Pandas", "Data Analysis", "Data Visualization"],
    },
    {
      category: "GIS & Spatial",
      items: ["Leaflet", "GeoJSON", "Folium", "Spatial Data Analysis"],
    },
    {
      category: "Web Development",
      items: ["React", "HTML", "CSS", "Streamlit"],
    },
    {
      category: "Database & Tools",
      items: ["MySQL", "Git", "GitHub"],
    },
    {
      category: "Productivity",
      items: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"],
    },
  ],
  id: [
    {
      category: "Pemrograman",
      items: ["Python", "SQL", "JavaScript", "PHP"],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "Scikit-learn",
        "TensorFlow",
        "Deep Learning",
        "Machine Learning",
        "Computer Vision",
      ],
    },
    {
      category: "Data & Analisis",
      items: ["Pandas", "Analisis Data", "Visualisasi Data"],
    },
    {
      category: "GIS & Spasial",
      items: ["Leaflet", "GeoJSON", "Folium", "Analisis Data Spasial"],
    },
    {
      category: "Pengembangan Web",
      items: ["React", "HTML", "CSS", "Streamlit"],
    },
    {
      category: "Basis Data & Tools",
      items: ["MySQL", "Git", "GitHub"],
    },
    {
      category: "Produktivitas",
      items: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"],
    },
  ],
};

export const getSkillGroups = (lang = "en") =>
  skillGroupsData[lang] || skillGroupsData.en;
export const skillGroups = skillGroupsData.en;
