// The site's "subway lines". Colours live in style.css (.line-1 … .line-5).
// Line 5 follows the TTC's newest line, Eglinton, and holds the newest chapter.
export const LINES = [
  { id: 'profile', number: 1, navName: 'Profile', signName: 'Profile', path: '/' },
  { id: 'projects', number: 2, navName: 'Projects', signName: 'Code Projects', path: '/projects' },
  { id: 'reports', number: 3, navName: 'Reports', signName: 'Work Reports', path: '/reports' },
  { id: 'research', number: 4, navName: 'Research', signName: 'Research', path: '/research' },
  { id: 'now', number: 5, navName: 'Now', signName: 'Now', path: '/now' },
];

export const lineById = (id) => LINES.find((line) => line.id === id) ?? LINES[0];

// Paths with a real page; anything else is "not in service".
export function isKnownPath(path, reportSlugs) {
  const clean = path.replace(/\/+$/, '') || '/';
  if (clean === '/profile' || LINES.some((line) => line.path === clean)) return true;
  return clean.startsWith('/wtr/') && reportSlugs.includes(clean.slice('/wtr/'.length));
}

export function sectionFromPath(path) {
  if (path.startsWith('/projects')) return 'projects';
  if (path.startsWith('/reports') || path.startsWith('/wtr')) return 'reports';
  if (path.startsWith('/research')) return 'research';
  if (path.startsWith('/now')) return 'now';
  return 'profile';
}
