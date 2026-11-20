import { useEffect, useState } from 'react';
import { REPORTS } from '../data/reports';

const TICK_MS = 3500;

const MESSAGES = {
  profile: ['Nathan Starkman', 'M.S. Computer Science · NYU', 'Now serving New York', 'CV available at this station'],
  projects: ['Waterwize', 'Paradux', 'Flutter dating app', 'This very website'],
  reports: [...REPORTS].reverse().map((r) => `${r.company} · ${r.term}`),
  research: ['CI/CD platform comparison', 'Hemangiosarcoma ML model'],
};

// Right-hand side of the board: the first message is "boarding", the rest are counting down.
const eta = (index) => (index === 0 ? 'Now boarding' : `Arr ${index * 2} min`);

export default function ArrivalBoard({ line, report, notInService }) {
  const messages = notInService
    ? ['Not in service']
    : report
      ? [`${report.company} · ${report.term}`]
      : MESSAGES[line.id];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (messages.length < 2) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % messages.length), TICK_MS);
    return () => clearInterval(timer);
  }, [line.id, report, notInService, messages.length]);

  const current = messages[index % messages.length];

  if (notInService) {
    return (
      <div className="arrival-board" aria-hidden="true">
        <span className="arrival-dest arriving">Not in service</span>
        <span className="arrival-eta">-- -- --</span>
      </div>
    );
  }

  return (
    <div className="arrival-board" aria-hidden="true">
      <span className="arrival-dest">
        {line.number} {line.navName} ▸ {current}
      </span>
      <span className={`arrival-eta${index === 0 ? ' arriving' : ''}`}>
        {report ? 'At platform' : eta(index)}
      </span>
    </div>
  );
}
