import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logoWd from "../assets/images/logo-wd.png";

const navItems = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Tecnologias", href: "#tecnologias", id: "tecnologias" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Experiência", href: "#experiencia", id: "experiencia" },
  { label: "Formação", href: "#formacao", id: "formacao" },
  { label: "Contato", href: "#contato", id: "contato" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function closeWithEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav container-xl" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Willian Douglas — início">
          <img src={logoWd} alt="" width="44" height="44" />
          <span>Willian Douglas</span>
        </a>

        <div className={`nav-panel ${menuOpen ? "is-open" : ""}`} id="main-menu">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={activeSection === item.id ? "is-active" : ""}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={activeSection === item.id ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
