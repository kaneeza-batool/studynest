import { features } from '../data';
import Reveal from './Reveal';

export default function Features() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section id="features" className="section" aria-labelledby="features-title">
      <div className="container">
        <Reveal as="header" className="section-head center">
          <p className="eyebrow">Features</p>
          <h2 id="features-title">Everything you need to stay on top of your studies</h2>
          <p className="section-sub">One focused app instead of five scattered ones.</p>
        </Reveal>

        <ul className="features-grid">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 100}>
              <article className="card feature" onMouseMove={onMove}>
                <span className="feature-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
