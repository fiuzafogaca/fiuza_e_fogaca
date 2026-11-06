import { useEffect, useState } from "react";
import Icon from "../Icon/Icon.jsx";
import { navLinks } from "../../data/site.js";
import "./Header.css";

const MENU_ID = "menu-mobile";

export default function Header({ logoSlotRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu com Esc e quando a tela passa para o layout de desktop
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  const mobileMenuClasses = [
    "mobile-menu",
    menuOpen ? "mobile-menu--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          {/* Espaço onde o logo "pousa" quando a página é rolada */}
          <div
            className="header__logo-slot"
            ref={logoSlotRef}
            aria-hidden="true"
          />

          {/* Menu horizontal: só aparece no desktop */}
          <nav className="header__nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} className="header__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão hambúrguer: só aparece quando o menu horizontal some */}
          <button
            className="header__toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size="28" />
          </button>
        </div>
      </header>

      {/* Painel do menu mobile. Fica fora do <header> para ficar acima do logo,
          que é fixo e tem z-index maior que o do header. */}
      <nav
        id={MENU_ID}
        className={mobileMenuClasses}
        aria-label="Navegação mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="mobile-menu__link"
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
