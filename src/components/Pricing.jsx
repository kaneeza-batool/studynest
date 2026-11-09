import { useState } from 'react';
import { plans } from '../data';
import Reveal from './Reveal';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="container">
        <Reveal as="header" className="section-head center">
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-title">Simple pricing, student-friendly</h2>
          <p className="section-sub">Start free. Upgrade when you need more.</p>
        </Reveal>

        <div className="billing-toggle">
          <span className={!yearly ? 'is-on' : ''}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Bill yearly"
            className={`switch ${yearly ? 'is-on' : ''}`}
            onClick={() => setYearly((y) => !y)}
          >
            <span />
          </button>
          <span className={yearly ? 'is-on' : ''}>
            Yearly <em className="save">Save 25%</em>
          </span>
        </div>

        <ul className="pricing-grid">
          {plans.map((p, i) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <Reveal as="li" key={p.name} delay={i * 120}>
                <article className={`card plan ${p.popular ? 'is-popular' : ''}`}>
                  {p.popular && <p className="plan-flag">Most popular</p>}
                  <h3>{p.name}</h3>
                  <p className="plan-blurb">{p.blurb}</p>
                  <p className="plan-price" aria-live="polite">
                    <span className="amount">${price}</span>
                    <span className="per">{price === 0 ? 'forever' : yearly ? '/ year' : '/ month'}</span>
                  </p>
                  <ul className="plan-features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href="#contact" className={`btn btn-block ${p.popular ? 'btn-primary' : 'btn-ghost'}`}>
                    {p.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
