// Adds DOM matchers like toBeInTheDocument() and toHaveAttribute() to Vitest's expect.
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

// jsdom doesn't implement scrolling; the app scrolls to top on navigation.
window.scrollTo = () => {};
