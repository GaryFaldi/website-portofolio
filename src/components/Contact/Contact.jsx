import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../shared/BrandIcons";
import Reveal from "../shared/Reveal";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "kadek-gary-faldi",
    href: "https://linkedin.com/in/kadek-gary-faldi-861721305",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "GaryFaldi",
    href: "https://github.com/GaryFaldi",
    icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: "var(--color-surface-secondary)" }}>
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p
              className="font-mono text-xs uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              07 · Contact
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Let's talk
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Open to internship opportunities, entry-level roles, or project collaborations in the fields of Data Science, Machine Learning, or Software Development.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 70}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 rounded-2xl p-5 border transition-colors hover:opacity-80"
                style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-primary-soft)", color: "var(--color-primary-hover)" }}
                  >
                    <Icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                      {label}
                    </p>
                    <p className="text-sm font-medium truncate" style={{ color: "var(--color-text-primary)" }}>
                      {value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
