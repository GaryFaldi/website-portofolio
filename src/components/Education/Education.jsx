import { bootcamps, education } from "../../data/education";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";

function EducationItem({ item }) {
  return (
    <div className="group py-5 first:pt-0 last:pb-0 mt-4">
      <div className="flex flex-col gap-1">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.16em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {item.period}
        </p>

        <h4
          className="mt-1 text-lg md:text-xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          {item.institution}
        </h4>

        <p
          className="text-sm font-medium"
          style={{ color: "var(--color-primary)" }}
        >
          {item.degree}
        </p>

        <p
          className="mt-2 text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {item.detail}
        </p>

        {item.extra?.length > 0 && (
          <div className="mt-2 space-y-1">
            {item.extra.map((line, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span
                  className="mr-2"
                  style={{ color: "var(--color-border-strong)" }}
                >
                  —
                </span>
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TrainingItem({ item }) {
  return (
    <div className="group py-5 first:pt-0 last:pb-0 mt-4">
      <p
        className="font-mono text-[10px] uppercase tracking-[0.16em]"
        style={{ color: "var(--color-text-muted)" }}
      >
        {item.period}
      </p>

      <h4
        className="mt-1.5 text-lg md:text-xl font-semibold tracking-tight"
        style={{ color: "var(--color-text-primary)" }}
      >
        {item.program}
      </h4>

      <p
        className="text-sm font-medium"
        style={{ color: "var(--color-primary)" }}
      >
        {item.track}
      </p>

      <p
        className="mt-2 text-sm leading-relaxed max-w-xl"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {item.detail}
      </p>
    </div>
  );
}

export default function EducationTraining() {
  return (
    <section
      id="educationTraining"
      className="min-h-screen flex items-center py-20 md:py-24"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="container-page w-full">
        {/* Heading */}
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Education"
            title="Education & Training"
          />
        </Reveal>

        {/* Main Content */}
        <div className="mt-10 md:mt-12 grid lg:grid-cols-2 gap-0">
          {/* Formal Education */}
          <Reveal>
            <div
              className="lg:pr-10 lg:border-r"
              style={{ borderColor: "var(--color-border)" }}
            >
              {/* Header */}
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Academic Background
                  </p>

                  <h3
                    className="mt-1.5 text-2xl font-semibold tracking-tight"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Formal Education
                  </h3>
                </div>

                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {String(education.length).padStart(2, "0")}
                </span>
              </div>

              {/* Items */}
              <div>
                {education.map((item, i) => (
                  <div
                    key={item.institution}
                    className={i !== 0 ? "border-t" : ""}
                    style={
                      i !== 0
                        ? { borderColor: "var(--color-border)" }
                        : undefined
                    }
                  >
                    <EducationItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bootcamps */}
          <Reveal delay={100}>
            <div className="lg:pl-10 mt-12 lg:mt-0">
              {/* Header */}
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Professional Development
                  </p>

                  <h3
                    className="mt-1.5 text-2xl font-semibold tracking-tight"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Bootcamp & Training
                  </h3>
                </div>

                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {String(bootcamps.length).padStart(2, "0")}
                </span>
              </div>

              {/* Items */}
              <div>
                {bootcamps.map((item, i) => (
                  <div
                    key={item.program}
                    className={i !== 0 ? "border-t" : ""}
                    style={
                      i !== 0
                        ? { borderColor: "var(--color-border)" }
                        : undefined
                    }
                  >
                    <TrainingItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}