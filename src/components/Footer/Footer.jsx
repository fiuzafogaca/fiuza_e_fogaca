import {
  FIRM_NAME,
  LOGO_URL,
  contactInfo,
  footerLinks,
} from "../../data/site.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const footerContacts = contactInfo.filter((item) => item.shortLabel);

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__columns">
          <div className="footer__brand">
            <a href="#inicio" aria-label={`${FIRM_NAME} - ir para o início`}>
              <img className="footer__logo" src={LOGO_URL} alt={FIRM_NAME} />
            </a>
          </div>

          <nav
            className="footer__column footer__column--links"
            aria-label="Links rápidos"
          >
            <h4 className="footer__heading">Links Rápidos</h4>
            <ul className="footer__list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__column footer__column--contact">
            <h4 className="footer__heading">Atendimento</h4>
            <div className="footer__contacts">
              {footerContacts.map((item) => (
                <div key={item.id} className="footer__contact">
                  <span className="footer__contact-label">
                    {item.shortLabel}
                  </span>
                  {item.href ? (
                    <a
                      className="footer__contact-link"
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-label={item.ariaLabel}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {FIRM_NAME}. Todos os direitos reservados. OAB/RS sob o n°
            18.530.
          </p>
          <p className="footer__tagline">Stewardship &amp; Legal Excellence</p>
        </div>
      </div>
    </footer>
  );
}
