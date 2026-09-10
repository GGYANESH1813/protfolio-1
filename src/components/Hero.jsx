import React from 'react';

export default function Hero({ personal, onCopyEmail }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-ambient-radial" aria-hidden="true"></div>

      {/* Pulsating Emerald Availability Indicator */}
      <div className="hero-badge">
        <span className="status-pulse"></span>
        <span>{personal.role}</span>
      </div>

      <h1 className="hero-headline">
        Hi, I'm <span className="highlight">{personal.name}</span>.
      </h1>

      <p className="hero-narrative">
        {personal.summary}
      </p>

      {/* Action CTAs per PRD */}
      <div className="hero-actions">
        <a 
          href="#projects" 
          onClick={(e) => handleScrollTo(e, 'projects')}
          className="btn btn-primary"
        >
          View Projects ↓
        </a>

        <a 
          href="#contact" 
          onClick={(e) => handleScrollTo(e, 'contact')}
          className="btn btn-outline"
        >
          Get in Touch
        </a>

        <button 
          type="button" 
          onClick={onCopyEmail} 
          className="btn btn-ghost"
          title="Click to copy email address"
        >
          <span>Copy Email 📋</span>
        </button>

        <a 
          href="./Profile (1).pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-ghost"
        >
          Resume PDF ↗
        </a>

        <a 
          href={personal.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-ghost"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
