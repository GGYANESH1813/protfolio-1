import React, { useState } from 'react';

export default function MobileActionDock({ personal, onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="mobile-action-dock" aria-label="Persistent mobile navigation bar">
      <div className="dock-inner">
        <button
          type="button"
          onClick={handleCopy}
          className="dock-item-btn"
          aria-label="Copy email address"
        >
          <span className="dock-icon" aria-hidden="true">📋</span>
          <span className="dock-label">{copied ? "Copied!" : "Email"}</span>
        </button>

        <a
          href="#projects"
          onClick={(e) => handleScrollTo(e, 'projects')}
          className="dock-item-btn"
          aria-label="Navigate to projects"
        >
          <span className="dock-icon" aria-hidden="true">💻</span>
          <span className="dock-label">Projects</span>
        </a>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item-btn"
          aria-label="Visit LinkedIn profile"
        >
          <span className="dock-icon" aria-hidden="true">🔗</span>
          <span className="dock-label">LinkedIn</span>
        </a>

        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, 'contact')}
          className="dock-item-btn dock-item-highlight"
          aria-label="Jump to contact section"
        >
          <span className="dock-icon" aria-hidden="true">✉️</span>
          <span className="dock-label">Connect</span>
        </a>
      </div>
    </nav>
  );
}
