import { LineBullet } from './SubwayNav';

const LINE_COLOURS = ['#f8c302', '#16a753', '#0082c9', '#b32078'];

// Simple geometric artwork for each poster. Colours come from the poster's CSS vars.
function PosterArt({ motif }) {
  switch (motif) {
    case 'match':
      return (
        <>
          <circle cx="122" cy="75" r="52" fill="var(--p-accent)" />
          <circle cx="178" cy="75" r="52" fill="none" stroke="var(--p-ink)" strokeWidth="8" />
        </>
      );
    case 'board':
      return Array.from({ length: 18 }, (_, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const dark = (col + row) % 2 === 0;
        const piece = i === 8;
        return (
          <rect
            key={i}
            x={30 + col * 40}
            y={15 + row * 40}
            width="40"
            height="40"
            fill={piece ? 'var(--p-accent)' : dark ? 'var(--p-ink)' : 'none'}
            stroke="var(--p-ink)"
            strokeWidth="2"
          />
        );
      });
    case 'waves':
      return [0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 24} q37.5 -22 75 0 t75 0 t75 0 t75 0`}
          fill="none"
          stroke={i % 2 ? 'var(--p-accent)' : 'var(--p-ink)'}
          strokeWidth="7"
          strokeLinecap="round"
        />
      ));
    case 'lines':
      return LINE_COLOURS.map((colour, i) => (
        <g key={colour}>
          <path d={`M10 ${30 + i * 30} H${200 + i * 20}`} stroke={colour} strokeWidth="12" strokeLinecap="round" />
          <circle cx={200 + i * 20} cy={30 + i * 30} r="11" fill="var(--p-bg)" stroke={colour} strokeWidth="5" />
        </g>
      ));
    default:
      return null;
  }
}

/** A project as a framed advertising poster on the platform wall. */
export default function ProjectPoster({ project }) {
  const { title, kind, description, tags, link, poster } = project;
  return (
    <article className="poster-frame">
      <a
        className="poster"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ '--p-bg': poster.bg, '--p-ink': poster.ink, '--p-accent': poster.accent }}
      >
        <div className="poster-top">
          <span className="poster-kicker">Now showing · Line 2</span>
          <LineBullet number={2} />
        </div>
        <svg className="poster-art" viewBox="0 0 300 150" aria-hidden="true" focusable="false">
          <PosterArt motif={poster.motif} />
        </svg>
        <div>
          <p className="poster-kind">{kind}</p>
          <h3 className="poster-title">{title}</h3>
        </div>
        <p className="poster-body">{description}</p>
        <ul className="poster-tags" aria-label="Built with">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <span className="poster-cta">
          View on GitHub <span aria-hidden="true">↗</span>
        </span>
      </a>
    </article>
  );
}
