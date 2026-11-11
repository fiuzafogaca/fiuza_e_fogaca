import { useLayoutEffect, useRef } from 'react';
import { FIRM_NAME } from '../../data/site.js';
import './FlyingLogo.css';

const MAX_SCROLL = 260;

export default function FlyingLogo({ src, heroSlotRef, headerSlotRef }) {
  const linkRef = useRef(null);

  useLayoutEffect(() => {
    const link = linkRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const hero = heroSlotRef.current;
      const header = headerSlotRef.current;
      if (!link || !hero || !header) return;

      const t = Math.min(1, Math.max(0, (window.scrollY || 0) / MAX_SCROLL));
      const from = hero.getBoundingClientRect();
      const to = header.getBoundingClientRect();
      const mix = (a, b) => a + (b - a) * t;

      link.style.top = `${mix(from.top, to.top)}px`;
      link.style.left = `${mix(from.left, to.left)}px`;
      link.style.width = `${mix(from.width, to.width)}px`;
      link.style.height = `${mix(from.height, to.height)}px`;
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    window.addEventListener('load', requestUpdate);

    document.fonts?.ready.then(requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('load', requestUpdate);
    };
  }, [heroSlotRef, headerSlotRef]);

  return (
    <a className="flying-logo" href="#inicio" ref={linkRef} aria-label={`${FIRM_NAME} - ir para o início`}>
      <img className="flying-logo__image" src={src} alt={FIRM_NAME} />
    </a>
  );
}
