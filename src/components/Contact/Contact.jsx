import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
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
    label: "WhatsApp",
    value: "+62 813-5670-5440",
    href: "https://wa.me/6281356705440",
    icon: MessageCircle,
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
    <section
      id="contact"
      className="min-h-[calc(100vh-80px)] flex items-center py-12 md:py-16"
      style={{
        backgroundColor: "var(--color-surface-secondary)",
      }}
    >
      <div className="container-page w-full">

        <Reveal>
          <div className="max-w-2xl mb-8 md:mb-10">

            <p
              className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] mb-2"
              style={{
                color: "var(--color-primary)",
              }}
            >
              07 · Contact
            </p>

            <h2
              className="text-3xl md:text-4xl font-semibold mb-3"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Let's talk
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Open to internship opportunities, entry-level roles, or project
              collaborations in the fields of Data Science, Machine Learning,
              or Software Development.
            </p>

          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(220px,1fr)] gap-10 items-center">

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {links.map(({ label, value, href, icon: Icon }, i) => (
              <Reveal key={label} delay={i * 70}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="
            group
            flex
            items-center
            justify-between
            gap-3
            rounded-2xl
            p-4
            md:p-5
            border
            cursor-pointer
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:opacity-90
            active:scale-[0.98]
          "
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">

                    <span
                      className="
                flex
                items-center
                justify-center
                w-9
                h-9
                md:w-10
                md:h-10
                rounded-full
                shrink-0
              "
                      style={{
                        backgroundColor: "var(--color-primary-soft)",
                        color: "var(--color-primary-hover)",
                      }}
                    >
                      <Icon size={17} />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="text-[10px] md:text-xs font-mono"
                        style={{
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {label}
                      </p>

                      <p
                        className="text-xs md:text-sm font-medium truncate"
                        style={{
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {value}
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    size={16}
                    className="
              shrink-0
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  />
                </a>
              </Reveal>
            ))}
          </div>


          {/* Mini Quote */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="max-w-[220px]">

              <p
                className="text-lg md:text-xl font-medium leading-relaxed"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Always learning.
                <br />
                Always building.
              </p>

              <div
                className="mt-4 w-10 h-px"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}