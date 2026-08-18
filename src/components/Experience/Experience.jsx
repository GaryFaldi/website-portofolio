import { experience } from "../../data/experience";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center py-20 md:py-24"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-page w-full">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Experience"
            title="What I've Done"
          />
        </Reveal>

        {/* Experience List */}
        <div className="-mt-6 md:-mt-10">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.period} delay={i * 100}>
              <article
                className="group relative pt-7 md:pt-8 pb-16 md:pb-20 first:pt-0 last:pb-0 mt-4"
              >
                {/* Top Divider */}
                {i !== 0 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      backgroundColor: "var(--color-border)",
                    }}
                  />
                )}

                <div className="grid md:grid-cols-[52px_1fr_auto] gap-5 md:gap-8 items-start">
                  {/* Number */}
                  <div
                    className="hidden md:block font-mono text-xs pt-1"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Main Content */}
                  <div className="min-w-0">
                    {/* Organization + Role */}
                    <div>
                      <p
                        className="font-mono text-[10px] md:text-xs uppercase tracking-[0.16em]"
                        style={{
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {item.organization}
                      </p>

                      <h3
                        className="mt-1.5 text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-200"
                        style={{
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {item.role}
                      </h3>
                    </div>

                    {/* Points */}
                    <ul className="mt-4 space-y-2.5 max-w-2xl">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm md:text-[15px] leading-relaxed"
                          style={{
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          <span
                            className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full"
                            style={{
                              backgroundColor:
                                "var(--color-border-strong)",
                            }}
                          />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Period */}
                  <div
                    className="md:text-right font-mono text-xs whitespace-nowrap"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {item.period}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}