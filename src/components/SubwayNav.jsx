import { Link } from 'react-router-dom';

const stations = [
  { id: 'profile', name: 'Profile', line: 'Line 1', path: '/' },
  { id: 'projects', name: 'Code Projects', line: 'Line 2', path: '/projects' },
  { id: 'reports', name: 'Work Reports', line: 'Line 3', path: '/reports' },
  { id: 'research', name: 'Research', line: 'Line 4', path: '/research' },
];

export default function SubwayNav({ activeSection }) {
  return (
    <header>
      <div>
        <h1>Nathan Starkman</h1>
        <p className="subtitle">Developer • Researcher • Student</p>
      </div>

      <nav className="subway-nav">
        <div className="subway-container">
          <div className="subway-line"></div>
          <div className="subway-stations">
            {stations.map((station) => (
              <Link
                key={station.id}
                to={station.path}
                className={`station ${activeSection === station.id ? 'active' : ''}`}
              >
                <div className="station-dot"></div>
                <div className="station-name">{station.name}</div>
                <div className="station-line">{station.line}</div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}