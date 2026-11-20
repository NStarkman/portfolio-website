import StationWall from '../components/StationWall';
import Train from '../components/Train';
import { publicUrl } from '../utils/publicUrl';

// Recent milestones, oldest first. `status: 'current'` parks the train there;
// the final "future" stop is drawn as track still under construction.
const MILESTONES = [
  {
    when: 'Sep 2025 – May 2026',
    title: 'Veterinary ML Research',
    detail: 'Undergraduate research predicting veterinary surgical outcomes, with a proof-of-concept ML pipeline over tabular and imaging data.',
  },
  {
    when: 'Jan – May 2026',
    title: 'Video Mood Classifier',
    detail: 'Benchmarked five classical models against three transformer models, including RoBERTa and DistilBERT-Emotion, for mood classification from transcripts.',
  },
  {
    when: 'June 2026',
    title: 'Graduated from Guelph',
    detail: "B.Comp. (Honours) in Software Engineering (Co-op), on the Dean's Honours List every semester.",
  },
  {
    when: 'Sep 2026',
    title: 'NYU Courant',
    detail: 'Started an M.S. in Computer Science in New York, studying Machine Learning and Predictive Analytics.',
  },
  {
    when: '2026 · In progress',
    title: 'Recession Forecasting',
    detail: 'Testing whether music-chart, lyric, and sentiment features add predictive value alongside traditional economic indicators when forecasting recessions.',
    status: 'current',
  },
  {
    when: 'Next stop',
    title: 'Your Team?',
    detail: 'Station under construction.',
    status: 'future',
  },
];

const EXITS = [
  { label: 'Download CV', href: 'papers/Nathan_Starkman_CV.pdf', download: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-starkman' },
  { label: 'GitHub', href: 'https://github.com/NStarkman' },
];

export default function Now() {
  return (
    <section id="now">
      <StationWall name="Now" subtitle="Job search and recent developments" lineNumber={5} />

      <aside className="service-notice" aria-labelledby="service-notice-title">
        <p className="service-notice-kicker" id="service-notice-title">
          <span aria-hidden="true">⚠</span> Service notice
        </p>
        <p className="service-notice-text">
          Now accepting passengers: I'm open to roles in software engineering, machine learning, data,
          and product, based in New York.
        </p>
        <div className="service-notice-links">
          {EXITS.map((exit) => (
            <a
              key={exit.label}
              href={publicUrl(exit.href)}
              className="text-link"
              target={exit.download ? undefined : '_blank'}
              rel={exit.download ? undefined : 'noopener noreferrer'}
              download={exit.download || undefined}
            >
              {exit.label} {exit.download ? '↓' : '↗'}
            </a>
          ))}
        </div>
      </aside>

      <h2 className="now-heading">Recent stops on Line 5</h2>
      <ol className="route route-static">
        {MILESTONES.map((stop, i) => {
          const next = MILESTONES[i + 1];
          const classes = [
            'stop',
            stop.status === 'current' && 'at-train',
            stop.status === 'future' && 'future',
            next?.status === 'future' && 'to-future',
          ].filter(Boolean).join(' ');
          return (
            <li key={stop.title} className={classes}>
              <span className="stop-dot" aria-hidden="true" />
              {stop.status === 'current' && (
                <span className="parked-train" aria-hidden="true"><Train /></span>
              )}
              <p className="stop-term">{stop.when}</p>
              <h3 className="stop-name">{stop.title}</h3>
              <p className="stop-role">{stop.detail}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
