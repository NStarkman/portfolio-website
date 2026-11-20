/**
 * Subway-car doors that slide open over the page. Re-mount it (via `key`)
 * on every route change to replay the animation. Pure CSS; it's hidden
 * entirely for visitors who prefer reduced motion.
 */
export default function Doors() {
  return (
    <div className="doors" aria-hidden="true">
      <div className="door door-left">
        <span className="door-window" />
        <span className="door-stripe" />
      </div>
      <div className="door door-right">
        <span className="door-window" />
        <span className="door-stripe" />
      </div>
    </div>
  );
}
