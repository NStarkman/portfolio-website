import { useEffect, useRef, useState } from 'react';
import Train, { dwellEase } from './Train';

// How far below the top of the viewport a heading must pass to count as "reached".
const REACHED_OFFSET = 140;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * The strip map above a train's doors: the report's sections as stops.
 * A train rides between them as you scroll, the track behind it lights up,
 * and clicking a stop jumps to that section.
 */
export default function StripMap({ stops }) {
  const [current, setCurrent] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const tops = stops.map((stop) => document.getElementById(stop.id)?.getBoundingClientRect().top ?? Infinity);

      // Last section whose heading has passed the reading line.
      let reached = 0;
      tops.forEach((top, i) => {
        if (top <= REACHED_OFFSET) reached = i;
      });

      // How far we are towards the next heading, eased so the train dwells at stops.
      let continuous = reached;
      const next = tops[reached + 1];
      if (next !== undefined && Number.isFinite(next)) {
        const span = next - tops[reached];
        const t = span > 0 ? (REACHED_OFFSET - tops[reached]) / span : 0;
        continuous = reached + dwellEase(Math.min(Math.max(t, 0), 1));
      }

      // At the very bottom of the page, the last stop is always the current one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        reached = stops.length - 1;
        continuous = reached;
      }

      const frac = stops.length > 1 ? continuous / (stops.length - 1) : 0;
      list?.style.setProperty('--frac', frac.toFixed(4));
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

  return (
    <nav className="strip-map" aria-label="Report sections">
      <ol ref={listRef} style={{ '--n': stops.length, '--frac': 0 }}>
        <li className="strip-train" aria-hidden="true">
          <Train />
        </li>
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
