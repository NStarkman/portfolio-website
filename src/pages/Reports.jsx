import { Link } from 'react-router-dom';
import StationWall from '../components/StationWall';
import { REPORTS } from '../data/reports';

export default function Reports() {
  return (
    <section id="reports">
      <StationWall name="Work Reports" subtitle="Five co-op terms, in order" lineNumber={3} />
      <ol className="route">
        {REPORTS.map((report, i) => {
          const terminus = i === REPORTS.length - 1;
          return (
            <li key={report.slug} className={`stop${terminus ? ' terminus' : ''}`}>
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
    </section>
  );
}
