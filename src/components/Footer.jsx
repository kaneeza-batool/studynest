import { navLinks, product } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a href="#home" className="logo">
            <img src={product.logo} alt="" width="38" height="38" className="logo-mark" />
            <span className="logo-text">{product.name}</span>
          </a>
          <p className="footer-note">{product.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-title">Explore</h2>
          <ul className="footer-links">
            {navLinks.filter((l) => l.id !== 'home').map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Connect</h2>
          <ul className="footer-links">
            <li><a href={product.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={`mailto:${product.contactEmail}`}>Email us</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© {year} {product.name}. A concept project built with React.</small>
        <a href="#home" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  );
}
