import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import { differentials } from '../../data/site.js';
import './Differentials.css';

function DifferentialCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const bodyId = `differential-${item.id}`;

  const classes = ['differential-card', expanded ? 'differential-card--expanded' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes}>
      <button
        className="differential-card__trigger"
        type="button"
        aria-expanded={expanded}
        aria-controls={bodyId}
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="differential-card__top">
          <span className="differential-card__badge">
            <Icon name={item.icon} size="28" />
          </span>
          <Icon name="add" size="22" className="differential-card__indicator" />
        </span>

        <span className="differential-card__title">{item.title}</span>
      </button>

      <div className="differential-card__body">
        <div className="differential-card__body-inner" id={bodyId}>
          {item.text.map((paragraph) => (
            <p key={paragraph} className="differential-card__text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Differentials() {
  return (
    <section className="differentials">
      <div className="differentials__inner container">
        <SectionHeader
          align="center"
          size="md"
          className="differentials__header"
          eyebrow="Valores Fundamentais"
          title="Diferenciais que definem nossa atuação"
        />

        <div className="differentials__grid">
          {differentials.map((item) => (
            <DifferentialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
