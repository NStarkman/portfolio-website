import { Link } from 'react-router-dom';
import { LINES } from '../data/lines';
import { LineBullet } from './SubwayNav';
import { publicUrl } from '../utils/publicUrl';

const EXITS = [
  { label: 'GitHub', href: 'https://github.com/NStarkman' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-starkman' },
  { label: 'Download CV', href: 'papers/Nathan_Starkman_CV.pdf', download: true },
];

// Track geometry for the mini map: all four lines meet at one interchange.
const TRACKS = [
  { n: 1, d: 'M24 30 H100 L145 75', end: [24, 30] },
  { n: 2, d: 'M24 75 H150', end: [24, 75] },
  { n: 3, d: 'M155 75 L200 120 H276', end: [276, 120] },
  { n: 4, d: 'M150 75 H276', end: [276, 75] },
  { n: 5, d: 'M145 75 L100 120 H24', end: [24, 120] },
];

function MiniMap() {
  return (
    <svg className="system-map-svg" viewBox="0 0 300 150" role="img" aria-labelledby="system-map-title">
      <title id="system-map-title">System map: Lines 1 to 5 meet at a single interchange</title>
      {TRACKS.map((t) => (
        <path key={t.n} d={t.d} className={`map-track line-${t.n}`} />
      ))}
      <rect x="132" y="60" width="36" height="30" rx="15" className="map-interchange" />
      {TRACKS.map((t) => (
        <g key={t.n} className={`line-${t.n}`}>
          <circle cx={t.end[0]} cy={t.end[1]} r="13" className="map-bullet" />
          <text x={t.end[0]} y={t.end[1] + 5} textAnchor="middle" className="map-bullet-text">{t.n}</text>
        </g>
      ))}
    </svg>
  );
}

export default function SystemMap() {
  return (
    <footer className="system-map">
      <div className="system-map-grid">
        <div className="system-map-lines">
          <h2 className="footer-heading">System map</h2>
          <MiniMap />
          <ul className="footer-lines">
            {LINES.map((line) => (
              <li key={line.id}>
                <Link to={line.path} className="footer-line-link">
                  <LineBullet number={line.number} />
                  {line.signName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="system-map-exits">
          <h2 className="footer-heading">Exits</h2>
          <ul className="exit-list">
            {EXITS.map((exit) => (
              <li key={exit.label}>
                <a
                  href={publicUrl(exit.href)}
                  className="exit-link"
                  target={exit.download ? undefined : '_blank'}
                  rel={exit.download ? undefined : 'noopener noreferrer'}
                  download={exit.download || undefined}
                >
                  <span className="exit-chip">Exit</span>
                  {exit.label}
                  <span aria-hidden="true">{exit.download ? '↓' : '↗'}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-fine">© {new Date().getFullYear()} Nathan Starkman · Built with React</p>
    </footer>
  );
}
