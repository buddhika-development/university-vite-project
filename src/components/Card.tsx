import './Card.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl?: string;
}

export default function Card({ imageUrl, title, description, linkUrl }: CardProps) {
  const content = (
    <>
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </>
  );

  if (linkUrl) {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="card card-link">
        {content}
      </a>
    );
  }

  return (
    <div className="card">
      {content}
    </div>
  );
}
