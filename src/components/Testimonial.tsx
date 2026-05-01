import './Testimonial.css';

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorPhotoUrl?: string;
}

export default function Testimonial({ quote, authorName, authorPhotoUrl }: TestimonialProps) {
  return (
    <div className="testimonial">
      <blockquote className="testimonial-quote">"{quote}"</blockquote>
      <div className="testimonial-author">
        {authorPhotoUrl && (
          <img src={authorPhotoUrl} alt={authorName} className="testimonial-photo" />
        )}
        <span className="testimonial-name">- {authorName}</span>
      </div>
    </div>
  );
}
