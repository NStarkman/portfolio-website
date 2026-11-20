import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionRenderer from '../components/SectionRenderer';
import StationWall from '../components/StationWall';
import StripMap from '../components/StripMap';
import { headingId } from '../utils/slug';
import { publicUrl } from '../utils/publicUrl';

const START_ID = 'report-start';

export default function WorkReportPage({ report }) {
  const { content } = report;

  const stops = useMemo(
    () => [
      { id: START_ID, label: 'Overview' },
      ...(content.sections ?? [])
        .filter((s) => s.type === 'heading' && s.level === 3)
        .map((s) => ({ id: headingId(s.content), label: s.content })),
    ],
    [content]
  );

  return (
    <article id="wtr" className="report">
      <Link to="/reports" className="text-link back-link">← Back to Line 3</Link>

      <StationWall name={report.company} subtitle={`${report.role} · ${report.term}`} lineNumber={3} />

      <StripMap stops={stops} />

      <div className="report-body" id={START_ID}>
        {content.logo && <img src={publicUrl(content.logo)} alt={`${report.company} logo`} className="report-logo" />}
        {content.sections?.map((section, idx) => (
          <SectionRenderer key={idx} section={section} />
        ))}
      </div>

      <Link to="/reports" className="text-link back-link">← Back to Line 3</Link>
    </article>
  );
}
