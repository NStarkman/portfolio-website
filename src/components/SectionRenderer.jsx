import YouTube from "react-youtube";
import { headingId } from "../utils/slug";
import { publicUrl } from "../utils/publicUrl";

export default function SectionRenderer({ section }) {
  switch (section.type) {
    case 'text':
      return (
        <p className="section-text">
          {section.content}
        </p>
      );

    case 'heading': {
      const HeadingTag = `h${section.level || 4}`;
      return (
        <HeadingTag
          className="section-heading"
          id={(section.level || 4) === 3 ? headingId(section.content) : undefined}
        >
          {section.content}
        </HeadingTag>
      );
    }

    case 'image':
      return (
        <div className="section-image-wrapper">
          <img
            src={publicUrl(section.src)}
            alt={section.alt || 'Report Image'}
            className="wtr-image"
          />
          {section.caption && (
            <p className="image-caption">{section.caption}</p>
          )}
        </div>
      );
    
    case 'video': {
      const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 0,
          controls: 1,
        },
      };
      return (
        <div className="video-container">
          <div className="video-wrapper">
            <YouTube videoId={section.src} opts={opts} />
          </div>
        </div>
      );
    }
    case 'image-grid':
      return (
        <div className="image-grid">
          {section.images?.map((img, index) => (
            <div key={index} className="grid-item">
              <img
                src={publicUrl(img.src)}
                alt={img.alt || `Grid Image ${index + 1}`}
                className="grid-image"
              />
              <p className="image-header">{img.alt}</p>
              {img.caption && (
                <p className="image-caption">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      );
    case 'learning-goal':
      return (
        <div className="learning-goal-section">
          <h4 className="learning-goal-title">{section.goal}</h4>
          <p className="learning-goal-result">
            {section.result}
          </p>
        </div>
      );

    default:
      return null;
  }

}
