 import YouTube from "react-youtube";

export default function SectionRenderer({ section }) {
  switch (section.type) {
    case 'text':
      return (
        <p style={{ whiteSpace: 'pre-wrap' }} className="section-text">
          {section.content}
        </p>
      );

    case 'heading':
      const HeadingTag = `h${section.level || 4}`;
      return (
        <HeadingTag className="section-heading">
          {section.content}
        </HeadingTag>
      );

    case 'image':
      return (
        <div className="section-image-wrapper">
          <img
            src={section.src}
            alt={section.alt || 'Report Image'}
            className="wtr-image"
          />
          {section.caption && (
            <p className="image-caption">{section.caption}</p>
          )}
        </div>
      );
    
    case 'video':
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
      return (
        <div className="video-container">
          <div className="video-wrapper">
             <YouTube videoId={section.src} options={options}/>
          </div>
        </div>
      )
    case 'image-grid':
      return (
        <div className="image-grid">
          {section.images?.map((img, index) => (
            <div key={index} className="grid-item">
              <img
                src={img.src}
                alt={img.alt || `Grid Image ${index + 1}`}
                className="grid-image"
              />
              <h4 className='image-header'>{img.alt}</h4>
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
          <p className="learning-goal-result" style={{ whiteSpace: 'pre-wrap' }}>
            {section.result}
          </p>
        </div>
      );

    default:
      return null;
  }

}
