import { getProfile } from "../../data/profile";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";

export default function About() {
  const { language, t } = useLanguage();
  const profile = getProfile(language);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 md:py-16"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="container-page w-full">
        {/* Section Heading  */}
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
          />
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
          {/* ================= INTRO ================= */}
          <Reveal>
            <div>
              <h3
                className="text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.1] font-semibold tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                {t("about.headingPrefix")}{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  {t("about.headingHighlight")}
                </span>
              </h3>

              <div
                className="mt-6 h-px w-14"
                style={{ backgroundColor: "var(--color-accent)" }}
              />

              <div className="mt-6 max-w-xl">
                {profile.about?.slice(0, 1).map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base md:text-[17px] leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex items-center gap-3">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("about.basedIn")}
                </span>

                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {profile.location}
                </span>
              </div>
            </div>
          </Reveal>

          {/* ================= EDUCATION ================= */}
          <Reveal delay={100}>
            <div
              className="rounded-2xl border overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Card Header */}
              <div
                className="px-5 py-3.5 border-b flex items-center justify-between"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span
                  className="font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("about.educationCardTitle")}
                </span>

                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  01
                </span>
              </div>

              {/* University */}
              <div className="p-5 md:p-6">
                <p
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("about.universityLabel")}
                </p>

                <h4
                  className="mt-1.5 text-lg md:text-xl font-semibold tracking-tight"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {t("about.universityName")}
                </h4>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("about.degreeName")}
                </p>

                {/* Divider */}
                <div
                  className="my-5 h-px"
                  style={{ backgroundColor: "var(--color-border)" }}
                />

                {/* Academic Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {/* GPA / Transcript */}
                  <a
                    href="/kadek_gary_faldi_transkrip-nilai.pdf"
                    download="kadek_gary_faldi_transkrip-nilai.pdf"
                    title={t("about.gpaHint")}
                    className="group rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--color-surface-secondary)",
                      color: "inherit",
                    }}
                  >
                    <p
                      className="font-mono text-[10px] uppercase tracking-wider"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t("about.gpaLabel")}
                    </p>

                    <div className="mt-1.5 flex items-end justify-between gap-2">
                      <p
                        className="text-2xl md:text-3xl font-semibold tracking-tight transition-transform duration-200 group-hover:scale-[1.03]"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {profile.gpa ?? "—"}
                      </p>

                      {/* Download icon */}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="mb-1 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0.5"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>
                    </div>

                    {/* Hover hint */}
                    <p
                      className="mt-1.5 text-[10px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t("about.gpaHint")}
                    </p>
                  </a>

                  {/* Undergraduate / PDDIKTI */}
                  <a
                    href="https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/YouBWCJ8fvaPQ9vfkOmRa9NF24gj4rMRfDJZo5DhZFIfE37aq7h744GfHsCNhAb9_zs0WQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t("about.statusHint")}
                    className="group rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--color-surface-secondary)",
                      color: "inherit",
                    }}
                  >
                    <p
                      className="font-mono text-[10px] uppercase tracking-wider"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t("about.statusLabel")}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p
                        className="text-sm md:text-base font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {t("about.statusValue")}
                      </p>

                      {/* External link icon */}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="opacity-40 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <path d="M14 5h5v5" />
                        <path d="M10 14 19 5" />
                        <path d="M19 14v5H5V5h5" />
                      </svg>
                    </div>

                    <p
                      className="mt-0.5 text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t("about.statusPeriod")}
                    </p>

                    {/* Hover hint */}
                    <p
                      className="mt-1.5 text-[10px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t("about.statusHint")}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}