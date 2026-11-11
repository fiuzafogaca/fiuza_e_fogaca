import Button from '../Button/Button.jsx';
import { hero } from '../../data/site.js';
import './Hero.css';

export default function Hero({ logoSlotRef }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__logo-slot" ref={logoSlotRef} aria-hidden="true" />

        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__actions">
          <Button href="#contato" icon="arrow_forward">
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
