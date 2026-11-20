import { useEffect, useState } from 'react';

const THEME_COLORS = { light: '#f3efe6', dark: '#121417' };

function initialTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  return current === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      {isDark ? 'Day service' : 'Night service'}
    </button>
  );
}
