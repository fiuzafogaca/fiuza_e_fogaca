import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import { differentials } from '../../data/site.js';
import './Differentials.css';

const AUTOPLAY_MS = 8000;
const SWIPE_THRESHOLD = 50;

export default function Differentials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = differentials.length;

  const goTo = (next) => setIndex((next + total) % total);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => clearTimeout(timer);
  }, [index, paused, total]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <section
      className="differentials"
      aria-roledescription="carrossel"
      aria-label="Diferenciais do escritório"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="differentials__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live={paused ? 'polite' : 'off'}
      >
        {differentials.map((item, position) => (
          <article
            key={item.id}
            className="differentials__slide"
            style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
            aria-roledescription="slide"
            aria-label={`${position + 1} de ${total}`}
            aria-hidden={position !== index}
          >
            <div className="differentials__content">
              <h2 className="differentials__title">{item.title}</h2>
              <div className="differentials__text">
                {item.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="differentials__arrow differentials__arrow--prev"
        type="button"
        aria-label="Diferencial anterior"
        onClick={() => goTo(index - 1)}
      >
        <Icon name="chevron_left" size="32" />
      </button>
      <button
        className="differentials__arrow differentials__arrow--next"
        type="button"
        aria-label="Próximo diferencial"
        onClick={() => goTo(index + 1)}
      >
        <Icon name="chevron_right" size="32" />
      </button>

      <div className="differentials__dots">
        {differentials.map((item, position) => (
          <button
            key={item.id}
            className={
              position === index
                ? 'differentials__dot differentials__dot--active'
                : 'differentials__dot'
            }
            type="button"
            aria-label={`Ir para ${item.title}`}
            aria-current={position === index}
            onClick={() => goTo(position)}
          />
        ))}
      </div>
    </section>
  );
}
