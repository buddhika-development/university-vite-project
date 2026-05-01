import './Banner.css';
import './Button.css';

interface BannerProps {
  message: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

export default function Banner({ message, ctaText, ctaLink, backgroundColor, backgroundImage }: BannerProps) {
  const style = {
    backgroundColor: backgroundColor || '#f8f9fa',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="banner" style={style}>
      <div className="banner-content">
        <h2 className="banner-message">{message}</h2>
        {ctaText && ctaLink ? (
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large" style={{ textDecoration: 'none' }}>
            {ctaText}
          </a>
        ) : ctaText ? (
          <button className="btn btn-primary btn-large">{ctaText}</button>
        ) : null}
      </div>
    </div>
  );
}
