import { steps } from '../data';
import Reveal from './Reveal';

export default function HowItWorks() {
  return (
    <section id="how" className="section section-alt" aria-labelledby="how-title">
      <div className="container">
        <Reveal as="header" className="section-head center">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">From chaos to a clear plan in three steps</h2>
        </Reveal>

        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 150} className="step">
              <span className="step-num" aria-hidden="true">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
