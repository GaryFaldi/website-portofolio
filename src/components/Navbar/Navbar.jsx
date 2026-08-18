import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education & Training", href: "#educationTraining" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const scrollPosition = window.scrollY + 200; // offset for better detection

      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow"
      style={{
        backgroundColor: "var(--color-navbar-bg)",
        borderBottom: `1px solid ${scrolled ? "var(--color-navbar-border)" : "transparent"}`,
      }}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          Portofolio
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{
                  color: activeSection === link.href ? "var(--color-primary)" : "var(--color-text-secondary)",
                }}
              >
                {link.label}
              </a>
              {activeSection === link.href && (
                <span
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-background)" }}
        >
          <ul className="container-page py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href} className="relative pl-3">
                {activeSection === link.href && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                )}
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium transition-colors"
                  style={{
                    color: activeSection === link.href ? "var(--color-primary)" : "var(--color-text-primary)",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
