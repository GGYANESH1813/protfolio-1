import React, { useState, useEffect } from 'react';

export default function Navbar({ personal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="brand-monogram">
          <span className="brand-dot"></span>
          <span>{personal.name.toUpperCase()} <span className="nav-brand-tag">// DEV</span></span>
        </a>

        <div className="nav-status">
          <span className="status-pulse"></span>
          <span>{personal.status}</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact" className="nav-cta-btn">Connect</a></li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-links">
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>01. About</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>02. Skills</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>03. Projects</a></li>
            <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>04. Education</a></li>
            <li><a href="#achievements" onClick={() => setMobileMenuOpen(false)}>05. Achievements</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-cta-btn">06. Connect</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
