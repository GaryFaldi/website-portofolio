import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../shared/BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-footer-bg)" }}>
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-footer-text)" }}>
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/GaryFaldi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:opacity-70"
            style={{ color: "var(--color-footer-text)" }}
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com/in/kadek-gary-faldi-861721305"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:opacity-70"
            style={{ color: "var(--color-footer-text)" }}
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:opacity-70"
            style={{ color: "var(--color-footer-text)" }}
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
