import React from 'react';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-meta">
        <div>
          <span className="brand-dot" style={{ display: 'inline-block', marginRight: '6px' }}></span>
          <strong>{personal.name}</strong> — Technical Portfolio System
        </div>
        <div style={{ marginTop: '4px', color: 'var(--text-low)' }}>
          {personal.degree} • {personal.institution}
        </div>
      </div>
      <button 
        onClick={scrollToTop} 
        className="back-to-top-btn"
        title="Scroll to top of page"
      >
        ↑ Back to Top
      </button>
    </footer>
  );
}
