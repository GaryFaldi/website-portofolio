import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

const SECTION_IDS = [
  "#about",
  "#experience",
  "#educationTraining",
  "#projects",
  "#certifications",
  "#skills",
  "#contact",
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { label: t("nav.about", "About"), href: "#about" },
    { label: t("nav.experience", "Experience"), href: "#experience" },
    {
      label: t("nav.educationTraining", "Education & Training"),
      href: "#educationTraining",
    },
    { label: t("nav.projects", "Projects"), href: "#projects" },
    {
      label: t("nav.certifications", "Certifications"),
      href: "#certifications",
    },
    { label: t("nav.skills", "Skills"), href: "#skills" },
    { label: t("nav.contact", "Contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const href of SECTION_IDS) {
        const el = document.querySelector(href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(href);
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
          {t("nav.brand", "Portofolio")}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{
                    color:
                      activeSection === link.href
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
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

          <div
            className="h-4 w-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />

          <LanguageSwitch />
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitch />

          <button
            className="p-2 -mr-2 cursor-pointer"
            aria-label={
              open
                ? t("nav.closeMenu", "Close menu")
                : t("nav.openMenu", "Open menu")
            }
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
          }}
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
                    color:
                      activeSection === link.href
                        ? "var(--color-primary)"
                        : "var(--color-text-primary)",
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
