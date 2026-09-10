import React from 'react';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-dot"></span>
            <strong>{personal.name}</strong>
            <span className="footer-badge">B.Tech CSE (AI/ML)</span>
          </div>
          <p className="footer-subtext">
            Engineered with React 19, Vite, Tailwind CSS & Modern Apex Dark Dashboard Aesthetics.
          </p>
        </div>

        <div className="footer-links">
          <a href="#hero">Top</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            ↑ Back to Top
          </button>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
        <span>GIET University Gunupur • CSE AI/ML</span>
      </div>
    </footer>
  );
}
