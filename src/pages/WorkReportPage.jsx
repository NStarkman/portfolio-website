import { Link } from 'react-router-dom';
import SectionRenderer from '../components/SectionRenderer';

export default function WorkReportPage({ title, content }) {
  return (
    <div id="wtr" className="wtr-card">
      <div className='wtr-top'>
        <span className="route-badge">🚇 WORK TERM REPORT </span>
        <Link to="/reports" className="link-btn">← Back to Reports</Link>
      </div>
      
      <h1>{content.title}</h1>
      {content.logo && <img src={content.logo} alt="Organization Logo" className="wtr-logo" />}
      
      <div className='start-content'>
        <h2>{title}</h2>
        {content.sections?.map((section, idx) => (
          <SectionRenderer key={idx} section={section} sections={content.sections} index={idx} />
        ))}
      </div>
      
      <Link to="/reports" className="link-btn">← Back to Reports</Link>
    </div>
  );
}