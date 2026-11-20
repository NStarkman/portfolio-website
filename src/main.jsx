import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Research from './pages/Research';
import WorkReportPage from './pages/WorkReportPage';
import NotInService from './pages/NotInService';
import { REPORTS } from './data/reports';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Navigate to="/" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="reports" element={<Reports />} />
          <Route path="research" element={<Research />} />
          {REPORTS.map((report) => (
            <Route
              key={report.slug}
              path={`wtr/${report.slug}`}
              element={<WorkReportPage report={report} />}
            />
          ))}
          <Route path="*" element={<NotInService />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
