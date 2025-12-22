import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Research from './pages/Research';
import WorkReportPage from './pages/WorkReportPage';
import {wtr1} from './components/reports/summer-2023';
import {wtr2} from './components/reports/fall-2023';
import {wtr3} from './components/reports/summer-2024';
import {wtr4} from './components/reports/winter-2025';
import {wtr5} from './components/reports/summer-2025';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reportContents = {
  'omafra': wtr1, 
  'kenna-fall-2023': wtr2, 
  'kenna-summer-2024': wtr3,
  'creyos-winter-2025': wtr4,
  'creyos-summer-2025': wtr5
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Navigate to="/" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="reports" element={<Reports />} />
          <Route path="research" element={<Research />} />
          
          {Object.entries(reportContents).map(([key, content]) => (
            <Route
              key={key}
              path={`wtr/${key}`}
              element={
                <WorkReportPage 
                  title={key.replace(/-/g, ' ')} 
                  content={content} 
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);