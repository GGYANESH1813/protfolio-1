import React, { useState } from 'react';

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link fallback
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="section-header-wrap">
        <span className="section-prefix">07 // REACH_OUT</span>
        <h2 className="section-title">Let's Connect & Build</h2>
        <p className="section-subtitle">
          Direct communication channels for internship inquiries, project collaborations, and AI/ML discussions.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Methods List */}
        <div className="contact-direct">
          <div 
            className="contact-method" 
            onClick={copyEmail} 
            style={{ cursor: 'pointer' }}
            title="Click to copy email address"
          >
            <div>
              <span className="contact-label">Email (Click to Copy)</span>
              <div className="contact-val">{personal.email}</div>
            </div>
            <div>
              {copied ? (
                <span className="copy-feedback">✓ Copied!</span>
              ) : (
                <span className="copy-action-btn">Copy 📋</span>
              )}
            </div>
          </div>

          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-method"
          >
            <div>
              <span className="contact-label">LinkedIn Profile</span>
              <div className="contact-val">{personal.linkedin.replace('https://', '')}</div>
            </div>
            <span className="contact-external-icon">Visit ↗</span>
          </a>

          <div className="contact-method" style={{ cursor: 'default' }}>
            <div>
              <span className="contact-label">Current Academic Base</span>
              <div className="contact-val">{personal.location}</div>
            </div>
            <span className="status-dot-static">📍</span>
          </div>

          {/* Availability Callout */}
          <div className="card availability-card">
            <div className="status-header">
              <span className="status-pulse"></span>
              <span className="status-label-emerald">ACTIVE INTERNSHIP CANDIDATE</span>
            </div>
            <h3 className="card-title" style={{ fontSize: '1.15rem', marginTop: '6px' }}>
              Looking for Summer Engineering Roles
            </h3>
            <p className="card-body" style={{ fontSize: '0.9rem', marginTop: '6px' }}>
              Open to Software Engineering, AI/ML Data Engineering, and Backend roles. Prepared to relocate or work remotely.
            </p>
          </div>
        </div>

        {/* Interactive Quick Message Form */}
        <div className="card contact-form-card">
          <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Send a Quick Message</h3>
          <p className="card-body" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
            Fill in the form below to send an email inquiry directly to my inbox.
          </p>

          {formSubmitted ? (
            <div className="form-success-banner">
              <span className="success-icon">✓</span>
              <h4>Message Launched!</h4>
              <p>Your mail client has been opened with the inquiry details prefilled.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required 
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Your Email</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    required 
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input 
                  id="contact-subject"
                  type="text" 
                  placeholder="Internship Inquiry / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea 
                  id="contact-message"
                  required 
                  rows={4}
                  placeholder="Hello Gyanesh, we'd like to talk about an internship opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Send Message Directly →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
