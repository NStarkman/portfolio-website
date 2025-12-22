import { Link } from 'react-router-dom';

export default function Card({ title, description, tags, link, isResearch, isProject, isCV, icon1Link, icon1Url, icon2Link, icon2Url }) {
  const isInternalLink = link && (link.startsWith('/') || link.startsWith('#'));
  
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {tags && (
        <div className="card-tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      )}
      {link && isInternalLink ? (
        <Link to={link} className="link-btn">
          {isProject ? 'View Project →' : isResearch ? 'Read Paper →' : isCV ? 'Download CV →': 'Read Report →'}
        </Link>
      ) : link ? (
        <a href={link} className="link-btn" target="_blank" rel="noopener noreferrer">
          {isProject ? 'View Project →' : isResearch ? 'Read Paper →' : isCV ? 'Download CV →': 'Read Report →'}
        </a>
      ) : null}
      {icon1Link && icon2Link && (
        <div className="icon-links">
          <a href={icon1Url} target="_blank" rel="noopener noreferrer">
            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon1Link}.svg`} alt={icon1Link} className="icon" />
          </a>
          <a href={icon2Url} target="_blank" rel="noopener noreferrer">
            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon2Link}.svg`} alt={icon2Link} className="icon" />
          </a>
        </div>
      )}
    </div>
  );
}