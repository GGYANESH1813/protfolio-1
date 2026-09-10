import React from 'react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';

export default function Hero({ personal, onCopyEmail }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="hero" className="scroll-expansion-hero-wrapper">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&auto=format&fit=crop&q=80"
        bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80"
        title={personal.name}
        date="CSE AIML • 1st Year Undergraduate"
        scrollToExpand="Scroll to Expand Portfolio ↓"
        textBlend={true}
      >
        <div className="hero-expanded-content">
          {/* Pulsating Emerald Availability Indicator */}
          <div className="hero-badge" style={{ marginBottom: '16px' }}>
            <span className="status-pulse"></span>
            <span>{personal.role} • {personal.institution}</span>
          </div>

          <h2 className="hero-headline" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            AI & Systems <span className="highlight">Developer</span>
          </h2>

          <p className="hero-narrative" style={{ maxWidth: '68ch', margin: '0 auto 28px', fontSize: '1.1rem' }}>
            {personal.summary}
          </p>

          {/* Action CTAs per PRD */}
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
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

          {/* Core Foundations Pillars */}
          <div className="tag-list" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <span className="tag-chip accent">Python (Proficient)</span>
            <span className="tag-chip accent">DBMS (Skilled)</span>
            <span className="tag-chip">Good at Decision Making</span>
            <span className="tag-chip">Crises Management</span>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
