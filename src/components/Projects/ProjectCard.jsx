import {
  ExternalLink,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "../shared/BrandIcons";

export default function ProjectCard({
  project,
  featured = false,
  index = 0,
}) {
  const links = project.links || {};

  const hasProject = Boolean(links.project);
  const hasGithub = Boolean(links.github);
  const hasReport = Boolean(links.report);

  /*
   * =========================================================
   * FEATURED PROJECT
   * =========================================================
   */

  if (featured) {
    return (
      <article
        className="group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-card-border)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 md:px-7 md:pt-7">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className="h-px w-6"
              style={{
                backgroundColor: "var(--color-border-strong)",
              }}
            />

            <span
              className="font-mono text-[10px] uppercase tracking-[0.16em]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {project.type}
            </span>
          </div>

          <span
            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--color-badge-bg)",
              color: "var(--color-badge-text)",
            }}
          >
            Featured
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 p-6 md:p-7">
          {/* LEFT */}
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              {project.context}
            </p>

            <h3
              className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              {project.title}
            </h3>

            <p
              className="mt-4 text-sm md:text-[15px] leading-relaxed max-w-2xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {project.description}
            </p>

            {/* Approach */}
            {project.approach?.length > 0 && (
              <div className="mt-7">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.16em] mb-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Approach
                </p>

                <ul className="space-y-2">
                  {project.approach.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <span
                        className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full"
                        style={{
                          backgroundColor: "var(--color-primary)",
                        }}
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">
            {/* Result */}
            {project.result && (
              <div
                className="rounded-xl border p-5"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Result
                </p>

                <p
                  className="mt-2 text-sm leading-relaxed font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {project.result}
                </p>
              </div>
            )}

            {/* Role */}
            {project.role && (
              <div
                className="mt-4 py-4 border-y"
                style={{
                  borderColor: "var(--color-border)",
                }}
              >
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Role
                </p>

                <p
                  className="mt-1.5 text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {project.role}
                </p>
              </div>
            )}

            {/* Technologies */}
            <div className="mt-auto pt-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-1 rounded-md border"
                    style={{
                      backgroundColor: "var(--color-tag-bg)",
                      color: "var(--color-tag-text)",
                      borderColor: "var(--color-tag-border)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* =========================
                PROJECT LINKS
               ========================= */}

            {(hasProject || hasGithub || hasReport) && (
              <div
                className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t"
                style={{
                  borderColor: "var(--color-border)",
                }}
              >
                {/* WEBSITE / PROJECT */}
                {hasProject && (
                  <a
                    href={links.project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70"
                    style={{
                      color: "var(--color-text-primary)",
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                )}

                {/* GITHUB */}
                {hasGithub && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70"
                    style={{
                      color: "var(--color-text-primary)",
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                )}

                {/* REPORT */}
                {hasReport && (
                  <a
                    href={links.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70"
                    style={{
                      color: "var(--color-text-primary)",
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    <FileText size={14} />
                    Report
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hover Accent */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{
            backgroundColor: "var(--color-primary)",
          }}
        />
      </article>
    );
  }

  /*
   * =========================================================
   * OTHER PROJECTS
   * =========================================================
   */

  return (
    <article
      className="group relative h-full flex flex-col rounded-xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--color-card-bg)",
        borderColor: "var(--color-card-border)",
      }}
    >
      {/* Meta */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.14em]"
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          {project.type}
        </span>

        <span
          className="font-mono text-[10px]"
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mt-3 text-lg font-semibold leading-snug tracking-tight"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {project.title}
      </h3>

      {/* Context */}
      <p
        className="mt-1.5 font-mono text-[10px] uppercase tracking-wider leading-relaxed"
        style={{
          color: "var(--color-text-muted)",
        }}
      >
        {project.context}
      </p>

      {/* Description */}
      <p
        className="mt-4 text-sm leading-relaxed"
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        {project.description}
      </p>

      {/* Result */}
      {project.result && (
        <div
          className="mt-5 pl-3 border-l-2"
          style={{
            borderColor: "var(--color-primary)",
          }}
        >
          <p
            className="font-mono text-[9px] uppercase tracking-[0.16em]"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Result
          </p>

          <p
            className="mt-1 text-xs leading-relaxed"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {project.result}
          </p>
        </div>
      )}

      {/* Bottom */}
      <div className="mt-auto pt-6">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[9px] px-2 py-1 rounded-md border"
              style={{
                backgroundColor: "var(--color-tag-bg)",
                color: "var(--color-tag-text)",
                borderColor: "var(--color-tag-border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(hasProject || hasGithub || hasReport) && (
          <div
            className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t"
            style={{
              borderColor: "var(--color-border)",
            }}
          >
            {/* WEBSITE / PROJECT */}
            {hasProject && (
              <a
                href={links.project}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70"
                style={{
                  color: "var(--color-text-primary)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <ExternalLink size={13} />
                View Project
              </a>
            )}

            {/* GITHUB */}
            {hasGithub && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70"
                style={{
                  color: "var(--color-text-primary)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}

            {/* REPORT */}
            {hasReport && (
              <a
                href={links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70"
                style={{
                  color: "var(--color-text-primary)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <FileText size={13} />
                Report
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Arrow */}
      <ArrowUpRight
        size={16}
        className="absolute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{
          right: "1.25rem",
          bottom: "1.25rem",
          color: "var(--color-text-muted)",
        }}
      />

      {/* Hover Accent */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{
          backgroundColor: "var(--color-primary)",
        }}
      />
    </article>
  );
}