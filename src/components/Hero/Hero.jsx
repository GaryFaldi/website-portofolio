import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../shared/BrandIcons";
import ContourPattern from "./ContourPattern";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-16">
      <ContourPattern className="pointer-events-none absolute -right-24 top-0 w-[420px] md:w-[560px] h-auto" />

      <div className="container-page relative">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "var(--color-primary)" }}
        >
          Ungraduate Informatics Student from UPN "Veteran" Yogyakarta
        </p>

        <h1
          className="max-w-3xl text-4xl md:text-6xl font-semibold leading-[1.08]"
          style={{ color: "var(--color-text-primary)" }}
        >
          Hi, I'm {profile.name}, and you can call me {profile.shortName}.
        </h1>

        <p
          className="mt-6 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {profile.headline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-button-primary-bg)",
              color: "var(--color-button-primary-text)",
            }}
          >
            View Projects
            <ArrowUpRight size={16} />
          </a>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium border transition-colors"
            style={{
              color: "var(--color-button-secondary-text)",
              borderColor: "var(--color-button-secondary-border)",
            }}
          >
            Download CV
          </a>

          <div className="flex items-center gap-2 ml-1">
            <a
              href="https://github.com/GaryFaldi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border transition-colors hover:opacity-70"
              style={{ borderColor: "var(--color-border)" }}
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com/in/kadek-gary-faldi-861721305"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border transition-colors hover:opacity-70"
              style={{ borderColor: "var(--color-border)" }}
            >
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
