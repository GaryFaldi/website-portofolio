import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitch({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-0.5 rounded-full border text-xs font-mono transition-colors ${className}`}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
        className={`px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "font-semibold shadow-xs"
            : "opacity-60 hover:opacity-100"
        }`}
        style={{
          backgroundColor:
            language === "en" ? "var(--color-primary)" : "transparent",
          color:
            language === "en"
              ? "#ffffff"
              : "var(--color-text-secondary)",
        }}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        aria-label="Ganti ke Bahasa Indonesia"
        className={`px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider transition-all duration-200 cursor-pointer ${
          language === "id"
            ? "font-semibold shadow-xs"
            : "opacity-60 hover:opacity-100"
        }`}
        style={{
          backgroundColor:
            language === "id" ? "var(--color-primary)" : "transparent",
          color:
            language === "id"
              ? "#ffffff"
              : "var(--color-text-secondary)",
        }}
      >
        ID
      </button>
    </div>
  );
}
