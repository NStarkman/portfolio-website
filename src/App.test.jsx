import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import WorkReportPage from './pages/WorkReportPage';
import NotInService from './pages/NotInService';
import { reportBySlug } from './data/reports';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="reports" element={<Reports />} />
          <Route path="wtr/creyos-winter-2025" element={<WorkReportPage report={reportBySlug('creyos-winter-2025')} />} />
          <Route path="*" element={<NotInService />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

test('renders the header and line navigation', () => {
  renderAt('/');
  expect(screen.getByRole('link', { name: 'Nathan Starkman' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1, name: 'Profile' })).toBeInTheDocument();
});

test('reports page lists every work term as a stop', () => {
  renderAt('/reports');
  expect(screen.getByRole('link', { name: 'Reports' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getAllByRole('listitem').filter((li) => li.classList.contains('stop'))).toHaveLength(5);
});

test('theme toggle switches between day and night service', () => {
  document.documentElement.setAttribute('data-theme', 'light');
  renderAt('/');
  fireEvent.click(screen.getByRole('button', { name: /switch to dark mode/i }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
});

test('unknown paths show the not-in-service page', () => {
  renderAt('/nowhere');
  expect(screen.getByRole('heading', { level: 1, name: 'Not in Service' })).toBeInTheDocument();
  const nav = screen.getByRole('navigation', { name: 'Sections' });
  expect(nav.querySelector('[aria-current]')).toBeNull();
});

test('report pages get a strip map of their sections', () => {
  renderAt('/wtr/creyos-winter-2025');
  const strip = screen.getByRole('navigation', { name: 'Report sections' });
  const labels = Array.from(strip.querySelectorAll('.strip-label')).map((el) => el.textContent);
  expect(labels).toEqual([
    'Overview',
    'Learning Goals',
    'My Position and Responsibilities',
    'Skills Required and Learned',
    'Conclusions and Going Forward',
    'Acknowledgements',
  ]);
  expect(document.getElementById('s-learning-goals')).toBeInTheDocument();
});

test('footer has the system map and exits', () => {
  renderAt('/');
  expect(screen.getByRole('img', { name: /system map/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /download cv/i })[0]).toHaveAttribute('download');
});

test('projects page shows each project as a linked poster', async () => {
  const { default: Projects } = await import('./pages/Projects');
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );
  const posters = document.querySelectorAll('a.poster');
  expect(posters).toHaveLength(4);
  posters.forEach((poster) => expect(poster.getAttribute('href')).toMatch(/^https:\/\/github\.com\/NStarkman\//));
});

test('reports route map has a train on the line', () => {
  renderAt('/reports');
  expect(document.querySelector('.route-train svg.train')).toBeInTheDocument();
});
