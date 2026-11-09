import { useEffect, useState } from 'react';
import { product, stats } from '../data';
import { useReveal } from '../hooks/useReveal';

function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

function Counter({ value, suffix, decimals = 0 }) {
  const [ref, visible] = useReveal({ threshold: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <span ref={ref} className="stat-value">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter(product.rotating);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="badge">
            <span className="pulse" aria-hidden="true" /> Now in open beta · free for students
          </p>
          <h1 id="hero-title">
            {product.headline[0]} <span className="gradient-text">{product.headline[1]}</span>
          </h1>
          <p className="hero-role">
            <span className="sr-only">Plan for exams, assignments, projects and deadlines.</span>
            <span aria-hidden="true">
              Plan for your <span className="typed">{typed}</span>
              <span className="caret" />
            </span>
          </p>
          <p className="hero-tagline">{product.description}</p>
          <div className="hero-cta">
            <a href="#pricing" className="btn btn-primary">
              Start planning free
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#screens" className="btn btn-ghost">See it in action</a>
          </div>
          <p className="hero-note">No credit card needed · Works on any device</p>
        </div>

        <figure className="hero-visual">
          <div className="device">
            <img
              src={product.heroImage}
              alt={product.heroImageAlt}
              width="720"
              height="460"
              fetchpriority="high"
            />
          </div>
          <div className="float-card fc-1" aria-hidden="true">🔥 14-day streak</div>
          <div className="float-card fc-2" aria-hidden="true">✅ Lab report done</div>
          <div className="float-card fc-3" aria-hidden="true">⏱️ 25:00 focus</div>
          <figcaption className="sr-only">The StudyNest weekly planner</figcaption>
        </figure>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
