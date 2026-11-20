import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import SubwayNav from './components/SubwayNav';
import Doors from './components/Doors';
import SystemMap from './components/SystemMap';
import { isKnownPath, lineById, sectionFromPath } from './data/lines';
import { REPORTS, reportBySlug } from './data/reports';
import './style.css';

const REPORT_SLUGS = REPORTS.map((r) => r.slug);

function App() {
  const { pathname } = useLocation();
  const notInService = !isKnownPath(pathname, REPORT_SLUGS);
  const line = lineById(sectionFromPath(pathname));
  const report = pathname.startsWith('/wtr/') ? reportBySlug(pathname.slice('/wtr/'.length)) : undefined;

  // Hash routing doesn't reset scroll, so start each new page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`App ${notInService ? 'line-0' : `line-${line.number}`}`}>
      <Doors key={pathname} />
      <SubwayNav activeLine={line} report={report} notInService={notInService} />
      <main className="container" key={pathname}>
        <Outlet />
      </main>
      <SystemMap />
    </div>
  );
}

export default App;
