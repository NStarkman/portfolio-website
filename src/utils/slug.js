// Stable DOM ids for report section headings, used by the strip map.
export const headingId = (text) =>
  's-' + String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
