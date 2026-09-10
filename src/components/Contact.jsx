import React, { useState } from 'react';

export default function Contact({ personal, onCopyEmail }) {
  const [copiedInternal, setCopiedInternal] = useState(false);

  const handleCopy = () => {
    onCopyEmail();
    setCopiedInternal(true);
    setTimeout(() => setCopiedInternal(false), 2500);
  };

  return (
    <section id="contact">
      <span className="section-prefix">07 // REACH_OUT</span>
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">
        Direct communication channels for internship inquiries and technical discussions.
      </p>

      <div className="contact-grid">
        <div className="contact-direct">
          {/* Interactive Click-to-Copy Method */}
          <div 
            className="contact-method card-hover-depth" 
            onClick={handleCopy} 
            title="Click to copy email address"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopy(); }}
          >
            <div>
              <span className="contact-label">Email (Click to Copy)</span>
              <div className="contact-val">{personal.email}</div>
            </div>
            <div>
              {copiedInternal ? (
                <span className="copy-feedback">✓ Copied!</span>
              ) : (
                <span className="copy-cta-tag">Copy 📋</span>
              )}
            </div>
          </div>

          {/* LinkedIn Channel */}
          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-method card-hover-depth"
          >
            <div>
              <span className="contact-label">LinkedIn Profile</span>
              <div className="contact-val">{personal.linkedin.replace('https://', '')}</div>
            </div>
            <span className="external-link-arrow">Visit ↗</span>
          </a>

          {/* Location Details */}
          <div className="contact-method" style={{ cursor: 'default' }}>
            <div>
              <span className="contact-label">Location</span>
              <div className="contact-val">{personal.location}</div>
            </div>
            <span className="location-pin-icon">📍</span>
          </div>
        </div>

        {/* Availability Callout Card with Pulsing Emerald Dot */}
        <div className="card card-hover-depth availability-highlight-card">
          <div className="availability-card-header">
            <span className="status-pulse"></span>
            <span className="availability-tag">
              AVAILABLE FOR INTERNSHIPS
            </span>
          </div>
          <h3 className="card-title" style={{ marginTop: '8px', marginBottom: '10px' }}>
            Seeking Internship Opportunities
          </h3>
          <p className="card-body">
            Actively seeking hands-on engineering internships where I can contribute Python programming, database management, and problem-solving skills to real-world software products.
          </p>
          <div className="contact-card-actions">
            <a 
              href={`mailto:${personal.email}?subject=Internship%20Opportunity%20Inquiry`} 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '12px' }}
            >
              Send Email Directly ✉️
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-outline"
              style={{ width: '100%', marginTop: '8px' }}
            >
              {copiedInternal ? "✓ Email Copied to Clipboard" : "Copy Email to Clipboard"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
