import { useRef, useState } from 'react';
import { screens } from '../data';
import Reveal from './Reveal';

export default function Screens() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const current = screens[active];

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (active + 1) % screens.length;
    if (e.key === 'ArrowLeft') next = (active - 1 + screens.length) % screens.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = screens.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="screens" className="section" aria-labelledby="screens-title">
      <div className="container">
        <Reveal as="header" className="section-head center">
          <p className="eyebrow">Screens</p>
          <h2 id="screens-title">Take a look inside</h2>
          <p className="section-sub">Designed to be calm, clear and quick to use, on a laptop or a phone.</p>
        </Reveal>

        <Reveal>
          <div className="tabs" role="tablist" aria-label="App screens">
            {screens.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`tab-${s.id}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${s.id}`}
                tabIndex={active === i ? 0 : -1}
                className={`chip ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div
            className="screen-panel"
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
          >
            <div className="screen-copy" key={`copy-${current.id}`}>
              <h3>{current.title}</h3>
              <p>{current.text}</p>
            </div>
            <div className="device screen-device" key={`img-${current.id}`}>
              <img src={current.image} alt={current.alt} width="720" height="460" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
