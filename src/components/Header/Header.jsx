import { navLinks } from '../../data/site.js';
import './Header.css';

export default function Header({ logoSlotRef }) {
  return (
    <header className="header">
      <div className="header__inner container">
        {/* Espaço onde o logo "pousa" quando a página é rolada */}
        <div className="header__logo-slot" ref={logoSlotRef} aria-hidden="true" />

        <nav className="header__nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} className="header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
