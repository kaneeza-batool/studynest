import { useEffect, useState } from 'react';
import { navLinks, product } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';

const ids = navLinks.map((l) => l.id);

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 10);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label={`${product.name} — back to top`}>
          <img src={product.logo} alt="" width="38" height="38" className="logo-mark" />
          <span className="logo-text">{product.name}</span>
        </a>

        <nav aria-label="Primary" className={`nav ${open ? 'is-open' : ''}`} id="primary-nav">
          <ul>
            {navLinks.filter((l) => l.id !== 'home').map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? 'is-active' : ''}
                  aria-current={active === l.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-cta-mobile">
              <a href="#pricing" className="btn btn-primary" onClick={() => setOpen(false)}>Get started</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="5" fill="currentColor"/><g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></g></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor"/></svg>
            )}
          </button>
          <a href="#pricing" className="btn btn-primary btn-sm header-cta">Get started</a>
          <button
            type="button"
            className={`icon-btn menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    </header>
  );
}
