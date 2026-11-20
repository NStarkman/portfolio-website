import { useEffect, useState } from 'react';

// How far below the top of the viewport a heading must pass to count as "reached".
const REACHED_OFFSET = 140;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * The strip map above a train's doors: the report's sections as stops,
 * with the current one lit. Clicking a stop jumps to that section.
 */
export default function StripMap({ stops }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let reached = 0;
      stops.forEach((stop, i) => {
        const el = document.getElementById(stop.id);
        if (el && el.getBoundingClientRect().top <= REACHED_OFFSET) reached = i;
      });
      // At the very bottom of the page, the last stop is always the current one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        reached = stops.length - 1;
      }
      setCurrent(reached);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [stops]);

  const goTo = (stop) => {
    const el = document.getElementById(stop.id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (REACHED_OFFSET - 40);
    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const frac = stops.length > 1 ? current / (stops.length - 1) : 0;

  return (
    <nav className="strip-map" aria-label="Report sections">
      <ol style={{ '--n': stops.length, '--frac': frac }}>
        {stops.map((stop, i) => (
          <li
            key={stop.id}
            className={`strip-stop${i < current ? ' passed' : ''}${i === current ? ' current' : ''}`}
          >
            <button type="button" onClick={() => goTo(stop)} aria-current={i === current ? 'step' : undefined} title={stop.label}>
              <span className="strip-dot" aria-hidden="true" />
              <span className="strip-label">{stop.label}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="strip-now" aria-hidden="true">
        Now at <strong>{stops[current]?.label}</strong> · stop {current + 1} of {stops.length}
      </p>
    </nav>
  );
}
