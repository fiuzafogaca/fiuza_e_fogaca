import Icon from '../Icon/Icon.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import { partners } from '../../data/site.js';
import './Partners.css';

function PartnerCard({ partner }) {
  return (
    <article className="partner-card">
      <div className="partner-card__photo">
        <img className="partner-card__image" src={partner.photo} alt={`${partner.name}, ${partner.role}`} />
        <div className="partner-card__shade" aria-hidden="true" />
      </div>

      <div className="partner-card__info">
        <div className="partner-card__top">
          <span className="partner-card__oab">{partner.oab}</span>
          <div className="partner-card__links">
            <a className="partner-card__link" href="#contato" title="LinkedIn" aria-label={`LinkedIn de ${partner.name}`}>
              <Icon name="share" size="20" />
            </a>
            <a className="partner-card__link" href="#contato" title="E-mail" aria-label={`E-mail de ${partner.name}`}>
              <Icon name="mail" size="20" />
            </a>
          </div>
        </div>

        <h3 className="partner-card__name">{partner.name}</h3>
        <p className="partner-card__role">{partner.role}</p>
        <p className="partner-card__bio">{partner.bio}</p>
      </div>
    </article>
  );
}

export default function Partners() {
  return (
    <section className="partners" id="socios">
      <div className="partners__inner container">
        <SectionHeader
          align="center"
          eyebrow="Corpo Diretivo"
          title="SÓCIOS"
          lead="Profissionais comprometidos com a excelência jurídica e o atendimento personalizado."
        />

        <div className="partners__grid">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
