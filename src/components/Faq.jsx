import { faqs } from '../data';
import Reveal from './Reveal';

export default function Faq() {
  return (
    <section id="faq" className="section section-alt" aria-labelledby="faq-title">
      <div className="container faq-wrap">
        <Reveal as="header" className="section-head center">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Questions, answered</h2>
        </Reveal>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="faq" name="faq">
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
