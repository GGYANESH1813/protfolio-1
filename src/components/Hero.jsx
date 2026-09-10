import React, { useState } from 'react';

export default function Hero({ personal, stats = [] }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-ambient-glow"></div>

      <div className="hero-badge">
        <span className="status-pulse"></span>
        <span>{personal.title} • {personal.institution}</span>
      </div>

      <h1 className="hero-headline">
        Engineering AI Models & <br />
        <span className="gradient-text">Solving Critical Problems</span>.
      </h1>

      <p className="hero-narrative">
        Hi, I'm <strong style={{ color: 'var(--text-high)' }}>{personal.name}</strong>. {personal.bio}
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          <span>Explore Projects</span>
          <span className="btn-arrow">↓</span>
        </a>
        <a href="#contact" className="btn btn-outline">
          Get in Touch
        </a>
        <button 
          type="button" 
          onClick={handleCopyEmail}
          className="btn btn-ghost copy-hero-btn"
          title="Click to copy email address"
        >
          <span>{copied ? "✓ Copied Email!" : "📋 Copy Email"}</span>
        </button>
        <a 
          href={personal.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-ghost"
        >
          LinkedIn ↗
        </a>
      </div>

      {stats.length > 0 && (
        <div className="hero-stats-grid">
          {stats.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
