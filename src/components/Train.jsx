/**
 * A small subway car, drawn front-down. Rotate it with CSS for horizontal tracks.
 * Colours are fixed "steel" so it reads on both day and night service.
 */
export default function Train({ className = '' }) {
  return (
    <svg className={`train ${className}`} viewBox="0 0 22 44" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="20" height="42" rx="7" className="train-body" />
      <rect x="5" y="7" width="12" height="7" rx="2" className="train-window" />
      <rect x="5" y="17" width="12" height="7" rx="2" className="train-window" />
      <rect x="1" y="27" width="20" height="3" className="train-stripe" />
      <rect x="5" y="32" width="12" height="5" rx="2.5" className="train-window" />
      <circle cx="7" cy="40" r="1.6" className="train-light" />
      <circle cx="15" cy="40" r="1.6" className="train-light" />
    </svg>
  );
}

/** Ease between stations so the train slows into each stop and dwells there. */
export const dwellEase = (t) => t - Math.sin(2 * Math.PI * t) / (2 * Math.PI);
