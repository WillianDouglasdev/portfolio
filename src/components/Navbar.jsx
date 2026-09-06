import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logoWd from "../assets/images/logo-wd.png";

// Mantenha esta lista alinhada à sequência das seções em App.jsx.
const navItems = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Formação", href: "#formacao", id: "formacao" },
  { label: "Foco", href: "#foco", id: "foco" },
  { label: "Tecnologias", href: "#tecnologias", id: "tecnologias" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Recomendações", href: "#recomendacoes", id: "recomendacoes" },
  { label: "Contato", href: "#contato", id: "contato" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);
  const progressRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    // Atualiza a barra no máximo uma vez por frame, sem renderizar toda a navbar.
    function updateProgress() {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
      headerRef.current.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const observer = "ResizeObserver" in window ? new ResizeObserver(scheduleUpdate) : null;
    observer?.observe(document.body);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer?.disconnect();
    };
  }, []);

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
      { rootMargin: "-25% 0px -60%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function closeWithEscape(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 992px)");
    function closeOnDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }

    window.addEventListener("keydown", closeWithEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeWithEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <span className="nav-reading-progress" ref={progressRef} aria-hidden="true" />
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
            ref={menuButtonRef}
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
