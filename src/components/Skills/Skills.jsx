import { skillGroups } from "../../data/skills";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Skills"
            title="Tools I work with"
            description="Grouped by areas I actually use in projects — not a long list to look impressive."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div
                className="h-full rounded-2xl p-6 border"
                style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1.5 rounded-md border"
                      style={{
                        backgroundColor: "var(--color-tag-bg)",
                        color: "var(--color-tag-text)",
                        borderColor: "var(--color-tag-border)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
