// Resolve a file in /public (e.g. "papers/cv.pdf") against the site's base path
// (/portfolio-website/), so it works no matter which URL the page was opened at.
// Absolute URLs, root paths and data URIs are returned unchanged.
export function publicUrl(path) {
  if (!path || /^([a-z]+:|\/|#)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path}`;
}
