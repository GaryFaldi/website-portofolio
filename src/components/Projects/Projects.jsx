import { projects } from "../../data/projects";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-page">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Selected Work"
            title="Projects"
          />
        </Reveal>

        {/* Featured Projects */}
        <div className="mt-4 md:mt-5 space-y-6">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <ProjectCard project={project} featured index={i} />
            </Reveal>
          ))}
        </div>

        {/* Other Projects */}
        {other.length > 0 && (
          <div className="mt-20 md:mt-24">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <h3
                  className="font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Other Projects
                </h3>

                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: "var(--color-border)" }}
                />

                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {String(other.length).padStart(2, "0")}
                </span>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {other.map((project, i) => (
                <Reveal key={project.title} delay={i * 60}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}