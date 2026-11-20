import { Link } from 'react-router-dom';
import { publicUrl } from '../utils/publicUrl';

function CardLink({ href, label, download }) {
  const isInternal = href.startsWith('/');
  if (isInternal) {
    return <Link to={href} className="text-link">{label} →</Link>;
  }
  return (
    <a href={publicUrl(href)} className="text-link" target="_blank" rel="noopener noreferrer" download={download || undefined}>
      {label} {download ? '↓' : '↗'}
    </a>
  );
}

export default function Card({ title, description, tags, links = [] }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {tags && (
        <ul className="card-tags" aria-label="Tags">
          {tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
        </ul>
      )}
      {links.length > 0 && (
        <div className="card-links">
          {links.map((link) => <CardLink key={link.href} {...link} />)}
        </div>
      )}
    </article>
  );
}
