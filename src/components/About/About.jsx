import { profile } from "../../data/profile";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 md:py-16"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="container-page w-full">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Background"
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
                Informatics Student &{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  Aspiring Data Professional
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
                  Based in
                </span>

                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Yogyakarta, Indonesia
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
                  Education
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
                  University
                </p>

                <h4
                  className="mt-1.5 text-lg md:text-xl font-semibold tracking-tight"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  UPN "Veteran" Yogyakarta
                </h4>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Bachelor of Informatics
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
                    href="/transkrip-nilai.pdf"
                    download="transkrip-nilai.pdf"
                    title="Download academic transcript"
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
                      Current GPA / IPK
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
                      Click to download transcript
                    </p>
                  </a>

                  {/* Undergraduate / PDDIKTI */}
                  <a
                    href="https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/2_7qmAMZILdLeBSotjZApukpWuUgolkygG4QsOHNMT4BMsGtfoPIHBJwcl7pigTZRoUMog=="
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View student record on PDDIKTI"
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
                      Status
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p
                        className="text-sm md:text-base font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Undergraduate
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
                      2023 — Present
                    </p>

                    {/* Hover hint */}
                    <p
                      className="mt-1.5 text-[10px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Click to view PDDIKTI record
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