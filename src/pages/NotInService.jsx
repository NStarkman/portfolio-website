import { Link, useLocation } from 'react-router-dom';
import StationWall from '../components/StationWall';

export default function NotInService() {
  const { pathname } = useLocation();

  return (
    <section id="not-in-service" className="line-0">
      <StationWall name="Not in Service" subtitle="This station is closed" lineNumber={0} />
      <div className="nis-body">
        <p>
          There's no stop at <code>{pathname}</code>. The link may be old, or the page may have moved to another line.
        </p>
        <p className="nis-actions">
          <Link to="/" className="text-link line-1">Transfer to Line 1 · Profile →</Link>
          <Link to="/reports" className="text-link line-3">Ride Line 3 · Work Reports →</Link>
        </p>
      </div>
    </section>
  );
}
