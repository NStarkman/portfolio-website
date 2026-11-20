import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import StationWall from '../components/StationWall';
import Train, { dwellEase } from '../components/Train';
import { REPORTS } from '../data/reports';

const TRAIN_HALF = 22; // half the train's height, so it's centred on a stop
const AUTOPLAY_MS = 900; // per segment, when the page is too short to scroll

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Moves the train down the route as the page scrolls: top of the page is the
 * first stop, the bottom is the terminus. If the page can't scroll, the train
 * rides the line once on its own.
 */
function useRouteTrain(routeRef, trainRef, stopCount) {
  const [atStop, setAtStop] = useState(0);

  useEffect(() => {
    const route = routeRef.current;
    const train = trainRef.current;
    if (!route || !train) return undefined;

    let centers = [];
    let frame = 0;
    let autoplayStart = 0;
    let lastStop = -1;

    const measure = () => {
      const top = route.getBoundingClientRect().top;
      centers = Array.from(route.querySelectorAll('.stop-dot')).map((dot) => {
        const r = dot.getBoundingClientRect();
        return r.top - top + r.height / 2;
      });
    };

    const place = (progress) => {
      if (centers.length === 0) return;
      const continuous = Math.min(Math.max(progress, 0), 1) * (centers.length - 1);
      const i = Math.min(Math.floor(continuous), centers.length - 2);
      const t = continuous - Math.max(i, 0);
      const y = centers.length === 1
        ? centers[0]
        : centers[i] + dwellEase(t) * (centers[i + 1] - centers[i]);
      train.style.transform = `translateY(${y - TRAIN_HALF}px)`;

      const nearest = centers.findIndex((c) => Math.abs(c - y) < 4);
      if (nearest !== lastStop) {
        lastStop = nearest;
        setAtStop(nearest);
      }
    };

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    const scrollable = () => maxScroll() > 80;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (scrollable()) place(window.scrollY / maxScroll());
      });
    };

    const autoplay = (now) => {
      if (!autoplayStart) autoplayStart = now;
      const total = AUTOPLAY_MS * (centers.length - 1);
      const progress = Math.min((now - autoplayStart) / total, 1);
      place(progress);
      if (progress < 1) frame = requestAnimationFrame(autoplay);
    };

    const onResize = () => {
      measure();
      if (scrollable()) place(window.scrollY / maxScroll());
    };

    measure();
    if (scrollable()) {
      place(window.scrollY / maxScroll());
    } else if (reducedMotion()) {
      place(0);
    } else {
      frame = requestAnimationFrame(autoplay);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [routeRef, trainRef, stopCount]);

  return atStop;
}

export default function Reports() {
  const routeRef = useRef(null);
  const trainRef = useRef(null);
  const atStop = useRouteTrain(routeRef, trainRef, REPORTS.length);

  return (
    <section id="reports">
      <StationWall name="Work Reports" subtitle="Five co-op terms, in order" lineNumber={3} />
      <div className="route-wrap" ref={routeRef}>
        <div className="route-train" ref={trainRef}>
          <Train />
        </div>
        <ol className="route">
          {REPORTS.map((report, i) => {
            const terminus = i === REPORTS.length - 1;
            return (
              <li key={report.slug} className={`stop${terminus ? ' terminus' : ''}${i === atStop ? ' at-train' : ''}`}>
                <span className="stop-dot" aria-hidden="true" />
                <p className="stop-term">
                  {report.term} · {report.category}
                  {terminus && ' · Terminus'}
                </p>
                <h2 className="stop-name">
                  <Link to={`/wtr/${report.slug}`}>{report.company}</Link>
                </h2>
                <p className="stop-role">{report.role}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
