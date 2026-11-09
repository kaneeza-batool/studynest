import { testimonials } from '../data';
import Reveal from './Reveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal as="header" className="section-head center">
          <p className="eyebrow">Beta feedback</p>
          <h2 id="testimonials-title">Students are finding their rhythm</h2>
          <p className="section-sub small">Sample quotes for this concept project.</p>
        </Reveal>

        <ul className="testimonials">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 120}>
              <figure className="card testimonial">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption>
                  <img src={t.avatar} alt={t.alt} width="48" height="48" loading="lazy" />
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
