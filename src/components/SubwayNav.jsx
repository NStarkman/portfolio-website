import { Link } from 'react-router-dom';
import { LINES } from '../data/lines';
import ArrivalBoard from './ArrivalBoard';
import ThemeToggle from './ThemeToggle';

export function LineBullet({ number, size }) {
  return (
    <span className={`bullet line-${number}${size ? ` bullet-${size}` : ''}`} aria-hidden="true">
      {number === 0 ? '✕' : number}
    </span>
  );
}

export default function SubwayNav({ activeLine, report, notInService }) {
  return (
    <header className="site-header">
      <div className="site-header-top">
        <div>
          <Link to="/" className="site-name">Nathan Starkman</Link>
          <p className="site-tagline">Software Engineer · ML · Data</p>
        </div>
        <ThemeToggle />
      </div>

      <ArrivalBoard line={activeLine} report={report} notInService={notInService} />

      <nav className="line-nav" aria-label="Sections">
        <ul>
          {LINES.map((line) => {
            const active = !notInService && line.id === activeLine.id;
            return (
              <li key={line.id}>
                <Link
                  to={line.path}
                  className={`line-link line-${line.number}${active ? ' active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <LineBullet number={line.number} />
                  {line.navName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
