import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import { practiceAreas } from '../../data/site.js';
import './PracticeAreas.css';

function AreaCard({ area }) {
  const [expanded, setExpanded] = useState(false);
  const bodyId = `area-${area.id}`;

  const classes = ['area-card', expanded ? 'area-card--expanded' : ''].filter(Boolean).join(' ');

  return (
    <article className={classes} onClick={() => setExpanded((open) => !open)}>
      <div className="area-card__main">
        <div className="area-card__top">
          <span className="area-card__tag">{area.tag}</span>
          <div className="area-card__icons">
            <Icon name={area.icon} className="area-card__icon" />
            <Icon name="add" size="20" className="area-card__indicator" />
          </div>
        </div>

        <h3 className="area-card__title">{area.title}</h3>

        <div className="area-card__body">
          <div className="area-card__body-inner" id={bodyId}>
            <p className="area-card__text">{area.text}</p>
          </div>
        </div>
      </div>

      <div className="area-card__footer">
        <button
          className="area-card__toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls={bodyId}
        >
          <span>{expanded ? 'Fechar' : 'Ver detalhes'}</span>
          <Icon name="arrow_forward" size="16" className="area-card__arrow" />
        </button>
      </div>
    </article>
  );
}

export default function PracticeAreas() {
  return (
    <section className="practice-areas" id="areas-atuacao">
      <div className="practice-areas__inner container">
        <SectionHeader title="Áreas de Atuação" />

        <div className="practice-areas__grid">
          {practiceAreas.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
