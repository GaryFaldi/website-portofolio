import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Award,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { achievements, certificationGroups } from "../../data/certifications";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";

function CertificationItem({ item }) {
  return (
    <article
      className="group rounded-xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h4
            className="text-base md:text-lg font-semibold leading-snug"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {item.title}
          </h4>

          {item.issuer && (
            <p
              className="mt-1.5 text-xs md:text-sm"
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              {item.issuer}
            </p>
          )}
        </div>

        {/* Date */}
        {(item.issued || item.date) && (
          <div
            className="shrink-0 flex items-center gap-1.5 font-mono text-[10px] md:text-xs"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            <CalendarDays size={13} />
            {item.issued || item.date}
          </div>
        )}
      </div>

      {/* Description */}
      {(item.description || item.detail) && (
        <p
          className="mt-4 max-w-3xl text-sm leading-relaxed"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {item.description || item.detail}
        </p>
      )}

      {/* Duration / Validity */}
      {(item.duration || item.validUntil) && (
        <div
          className="flex flex-wrap gap-x-8 gap-y-3 mt-5 pt-4 border-t"
          style={{
            borderColor: "var(--color-border)",
          }}
        >
          {item.duration && (
            <div>
              <p
                className="font-mono text-[9px] uppercase tracking-[0.16em]"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                Duration
              </p>

              <p
                className="mt-1 text-xs"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                {item.duration}
              </p>
            </div>
          )}

          {item.validUntil && (
            <div>
              <p
                className="font-mono text-[9px] uppercase tracking-[0.16em]"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                Valid Until
              </p>

              <p
                className="mt-1 text-xs"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                {item.validUntil}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Skills */}
      {item.skills?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[9px] px-2 py-1 rounded-md border"
              style={{
                backgroundColor: "var(--color-tag-bg)",
                color: "var(--color-tag-text)",
                borderColor: "var(--color-tag-border)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Credential */}
      {item.credentialUrl && (
        <div
          className="mt-5 pt-4 border-t"
          style={{
            borderColor: "var(--color-border)",
          }}
        >
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-60"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            <ExternalLink size={14} />
            View Credential
          </a>
        </div>
      )}
    </article>
  );
}

function AchievementCard({ item }) {
  return (
    <article
      className="group relative rounded-2xl border p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--color-card-bg)",
        borderColor: "var(--color-card-border)",
      }}
    >
      {/* Award Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl border"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          color: "var(--color-primary)",
        }}
      >
        <Award size={18} />
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <h4
            className="text-lg md:text-xl font-semibold leading-snug"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {item.title}
          </h4>

          {(item.date || item.issued) && (
            <span
              className="shrink-0 font-mono text-[10px] md:text-xs"
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              {item.date || item.issued}
            </span>
          )}
        </div>

        {item.issuer && (
          <p
            className="mt-2 text-sm font-medium"
            style={{
              color: "var(--color-primary)",
            }}
          >
            {item.issuer}
          </p>
        )}

        {(item.description || item.detail) && (
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            {item.description || item.detail}
          </p>
        )}

        {/* Credential */}
        {item.credentialUrl && (
          <div
            className="mt-5 pt-4 border-t"
            style={{
              borderColor: "var(--color-border)",
            }}
          >
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-60"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              <ExternalLink size={14} />
              View Credential
            </a>
          </div>
        )}
      </div>

      {/* Bottom Accent */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{
          backgroundColor: "var(--color-primary)",
        }}
      />
    </article>
  );
}

function splitTabLabel(label) {
  const words = label.split(" ");

  // Kalau cuma 1–2 kata, bagi normal
  if (words.length <= 2) {
    return [words.slice(0, 1), words.slice(1)];
  }

  // Jumlah kata baris pertama dibulatkan ke atas
  const midpoint = Math.ceil(words.length / 2);

  return [
    words.slice(0, midpoint),
    words.slice(midpoint),
  ];
}

export default function Certifications() {
  /*
   * Tab index:
   * 0...n = certification groups
   * n+1   = achievements
   */
  const [activeTab, setActiveTab] = useState(0);

  const tabsRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = tabsRef.current;

    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth;

    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(
      hasOverflow &&
      el.scrollLeft + el.clientWidth <
      el.scrollWidth - 5
    );
  };

  useEffect(() => {
    const el = tabsRef.current;

    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollTabs = (direction) => {
    const el = tabsRef.current;

    if (!el) return;

    el.scrollBy({
      left: direction === "right" ? 260 : -260,
      behavior: "smooth",
    });
  };

  const isAchievementTab = activeTab === certificationGroups.length;

  const activeGroup = !isAchievementTab
    ? certificationGroups[activeTab]
    : null;

  return (
    <section
      id="certifications"
      className="py-20 md:py-28"
      style={{
        backgroundColor: "var(--color-surface-secondary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Achievements"
          description="Professional certifications, technical training, and notable academic achievements."
        />

        {/* =====================================================
              TABS — LIQUID GLASS
            ===================================================== */}

        <Reveal>
          <div className="mt-10 md:mt-12">
            <div
              ref={tabsRef}
              className="w-full overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <div
                className="
          inline-flex
          w-max
          min-w-full
          p-1.5
          rounded-2xl
          border
          backdrop-blur-xl
        "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                  borderColor: "rgba(255,255,255,0.14)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
                  WebkitBackdropFilter: "blur(20px)",
                  backdropFilter: "blur(20px)",
                }}
              >

                {/* =========================
                      CERTIFICATION TABS
                    ========================= */}

                {certificationGroups.map((group, index) => {
                  const isActive = activeTab === index;

                  return (
                    <button
                      key={group.group}
                      type="button"
                      onClick={() => setActiveTab(index)}
                      className="
                group
                relative
                shrink-0
                inline-flex
                items-center
                justify-center
                px-4
                md:px-5
                py-2.5
                rounded-xl
                font-mono
                text-[10px]
                md:text-xs
                uppercase
                tracking-[0.08em]
                whitespace-nowrap
                overflow-hidden
                transition-all
                duration-300
                ease-out
                hover:-translate-y-0.5
                hover:scale-[1.02]
                cursor-pointer
              "
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.07))"
                          : "transparent",

                        color: isActive
                          ? "var(--color-text-primary)"
                          : "var(--color-text-muted)",

                        border: isActive
                          ? "1px solid rgba(255,255,255,0.16)"
                          : "1px solid transparent",

                        boxShadow: isActive
                          ? `
                    0 4px 16px rgba(0,0,0,0.08),
                    inset 0 1px 0 rgba(255,255,255,0.18),
                    inset 0 -1px 0 rgba(255,255,255,0.04)
                  `
                          : "none",

                        backdropFilter: isActive
                          ? "blur(16px)"
                          : "blur(0px)",

                        WebkitBackdropFilter: isActive
                          ? "blur(16px)"
                          : "blur(0px)",
                      }}
                    >

                      {/* =========================
                            HOVER GLASS
                          ========================= */}

                      {!isActive && (
                        <span
                          className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
                            border:
                              "1px solid rgba(255,255,255,0.10)",
                            boxShadow:
                              "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.06)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }}
                        />
                      )}

                      {/* =========================
                            ACTIVE GLASS HIGHLIGHT
                          ========================= */}

                      {isActive && (
                        <span
                          className="
                    pointer-events-none
                    absolute
                    inset-x-3
                    top-0
                    h-px
                    rounded-full
                  "
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                          }}
                        />
                      )}

                      {/* =========================
                            TAB TEXT
                          ========================= */}

                      <span className="relative z-10 flex flex-col items-center leading-tight text-center">
                        {splitTabLabel(group.group).map((line, index) => (
                          <span key={index}>
                            {line.join(" ")}
                          </span>
                        ))}
                      </span>

                      {/* =========================
                            ACTIVE INDICATOR
                          ========================= */}

                      {isActive && (
                        <span
                          className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    h-0.5
                    w-5
                    rounded-full
                  "
                          style={{
                            backgroundColor: "var(--color-primary)",
                            boxShadow:
                              "0 0 10px rgba(255,255,255,0.35)",
                          }}
                        />
                      )}
                    </button>
                  );
                })}

                {/* =========================
                      ACHIEVEMENTS TAB
                    ========================= */}

                <button
                  type="button"
                  onClick={() =>
                    setActiveTab(certificationGroups.length)
                  }
                  className="
            group
            relative
            shrink-0
            inline-flex
            items-center
            justify-center
            px-4
            md:px-5
            py-2.5
            rounded-xl
            font-mono
            text-[10px]
            md:text-xs
            uppercase
            tracking-[0.08em]
            whitespace-nowrap
            overflow-hidden
            transition-all
            duration-300
            ease-out
            hover:-translate-y-0.5
            hover:scale-[1.02]
          "
                  style={{
                    background: isAchievementTab
                      ? "linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.07))"
                      : "transparent",

                    color: isAchievementTab
                      ? "var(--color-text-primary)"
                      : "var(--color-text-muted)",

                    border: isAchievementTab
                      ? "1px solid rgba(255,255,255,0.16)"
                      : "1px solid transparent",

                    boxShadow: isAchievementTab
                      ? `
                0 4px 16px rgba(0,0,0,0.08),
                inset 0 1px 0 rgba(255,255,255,0.18),
                inset 0 -1px 0 rgba(255,255,255,0.04)
              `
                      : "none",

                    backdropFilter: isAchievementTab
                      ? "blur(16px)"
                      : "blur(0px)",

                    WebkitBackdropFilter: isAchievementTab
                      ? "blur(16px)"
                      : "blur(0px)",
                  }}
                >

                  {/* Hover Glass */}
                  {!isAchievementTab && (
                    <span
                      className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
              "
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
                        border:
                          "1px solid rgba(255,255,255,0.10)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.06)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                    />
                  )}

                  {/* Active Highlight */}
                  {isAchievementTab && (
                    <span
                      className="
                pointer-events-none
                absolute
                inset-x-3
                top-0
                h-px
                rounded-full
              "
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                      }}
                    />
                  )}

                  {/* Text */}
                  <span className="relative z-10">
                    Achievements
                  </span>

                  {/* Active Indicator */}
                  {isAchievementTab && (
                    <span
                      className="
                absolute
                bottom-1
                left-1/2
                -translate-x-1/2
                h-0.5
                w-5
                rounded-full
              "
                      style={{
                        backgroundColor: "var(--color-primary)",
                        boxShadow:
                          "0 0 10px rgba(255,255,255,0.35)",
                      }}
                    />
                  )}
                </button>

              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            ACTIVE TAB CONTENT
           ===================================================== */}

        <div className="mt-7 md:mt-8">
          {!isAchievementTab && activeGroup && (
            <Reveal key={activeGroup.group}>
              <>
                {/* Active Group Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: "var(--color-primary)",
                    }}
                  />

                  <h3
                    className="font-mono text-[10px] md:text-xs uppercase tracking-[0.16em]"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {activeGroup.group}
                  </h3>

                  <div
                    className="h-px flex-1"
                    style={{
                      backgroundColor: "var(--color-border)",
                    }}
                  />

                  <span
                    className="font-mono text-[10px]"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {activeGroup.items.length}
                  </span>
                </div>

                {/* Certification List */}
                <div className="space-y-3">
                  {activeGroup.items.map((item, index) => (
                    <Reveal
                      key={item.title}
                      delay={index * 40}
                    >
                      <CertificationItem item={item} />
                    </Reveal>
                  ))}
                </div>
              </>
            </Reveal>
          )}

          {/* =====================================================
              ACHIEVEMENTS
             ===================================================== */}

          {isAchievementTab && (
            <Reveal key="achievements">
              <>
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: "var(--color-primary)",
                    }}
                  />

                  <h3
                    className="font-mono text-[10px] md:text-xs uppercase tracking-[0.16em]"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Key Achievements
                  </h3>

                  <div
                    className="h-px flex-1"
                    style={{
                      backgroundColor: "var(--color-border)",
                    }}
                  />

                  <span
                    className="font-mono text-[10px]"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {achievements.length}
                  </span>
                </div>

                {/* Achievement Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                  {achievements.map((item, index) => (
                    <Reveal
                      key={item.title}
                      delay={index * 70}
                    >
                      <AchievementCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}