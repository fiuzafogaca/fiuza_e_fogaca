import { useLayoutEffect, useRef, useState } from 'react';
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
            {area.topics?.length > 0 && (
              <ul className="area-card__topics" aria-label="Principais temas">
                {area.topics.map((topic) => (
                  <li key={topic} className="area-card__topic">
                    {topic}
                  </li>
                ))}
              </ul>
            )}
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
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const measure = () => {
      let tallest = 0;
      grid.querySelectorAll('.area-card').forEach((card) => {
        const style = getComputedStyle(card);
        const main = card.querySelector('.area-card__main');
        const body = card.querySelector('.area-card__body');
        const footer = card.querySelector('.area-card__footer');
        const natural =
          parseFloat(style.paddingTop) +
          parseFloat(style.paddingBottom) +
          parseFloat(style.borderTopWidth) +
          parseFloat(style.borderBottomWidth) +
          main.offsetHeight -
          body.offsetHeight +
          footer.offsetHeight;
        tallest = Math.max(tallest, natural);
      });
      grid.style.setProperty('--area-card-min', `${Math.ceil(tallest)}px`);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    document.fonts?.ready.then(measure);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="practice-areas" id="areas-atuacao">
      <div className="practice-areas__inner container">
        <SectionHeader title="Áreas de Atuação" />

        <div className="practice-areas__grid" ref={gridRef}>
          {practiceAreas.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
