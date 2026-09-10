import React, { useState, useEffect } from 'react';

export default function Navbar({ personal, onCopyEmail }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Section Observer for Active Navigation Highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = ['hero', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')} 
          className="brand-monogram"
        >
          <span className="brand-dot"></span>
          <span>{personal.name.toUpperCase()} // PORTFOLIO</span>
        </a>

        {/* Pulsating Emerald Availability Indicator */}
        <div 
          className="nav-status interactive-status"
          onClick={onCopyEmail}
          title="Click to copy contact email"
        >
          <span className="status-pulse" aria-hidden="true"></span>
          <span className="status-text">{personal.status}</span>
        </div>

        {/* Desktop Navigation with Active State Indicator */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className={activeSection === 'about' ? 'nav-link-active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className={activeSection === 'skills' ? 'nav-link-active' : ''}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className={activeSection === 'projects' ? 'nav-link-active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => handleNavClick(e, 'education')}
                className={activeSection === 'education' ? 'nav-link-active' : ''}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#achievements" 
                onClick={(e) => handleNavClick(e, 'achievements')}
                className={activeSection === 'achievements' ? 'nav-link-active' : ''}
              >
                Achievements
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`nav-cta-link ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open-top' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open-mid' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open-bot' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <ul className="mobile-nav-links">
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className={activeSection === 'about' ? 'active-mobile' : ''}
              >
                02 // About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className={activeSection === 'skills' ? 'active-mobile' : ''}
              >
                03 // Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className={activeSection === 'projects' ? 'active-mobile' : ''}
              >
                04 // Projects
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => handleNavClick(e, 'education')}
                className={activeSection === 'education' ? 'active-mobile' : ''}
              >
                05 // Education
              </a>
            </li>
            <li>
              <a 
                href="#achievements" 
                onClick={(e) => handleNavClick(e, 'achievements')}
                className={activeSection === 'achievements' ? 'active-mobile' : ''}
              >
                06 // Achievements
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mobile-cta"
              >
                07 // Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
