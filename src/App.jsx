import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ggyanesh1813@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Top Application Bar */}
      <header className="app-header">
        <div className="nav-container">
          <a href="#hero" className="brand-monogram">
            <span className="brand-dot"></span>
            <span>G. GYANESH // PORTFOLIO</span>
          </a>
          <div className="nav-status">
            <span className="status-pulse"></span>
            <span>Looking for internships</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* 01. HERO */}
        <section id="hero">
          <div className="hero-badge">
            <span className="status-pulse"></span>
            <span>CSE AIML • 1st Year Undergraduate</span>
          </div>
          <h1 className="hero-headline">
            Hi, I'm <span className="highlight">G Gyanesh</span>.
          </h1>
          <p className="hero-narrative">
            I am a motivated Computer Science student with strong interest in AI and problem solving. Specializing in CSE AIML, proficient in Python, skilled in DBMS, decision making, and crisis management.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a 
              href="https://www.linkedin.com/in/g-gyanesh-2bb7a9376" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </section>

        {/* 02. ABOUT */}
        <section id="about">
          <span className="section-prefix">02 // WHO_I_AM</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Academic background, core interests, and foundational focus areas.
          </p>
          
          <div className="card-grid grid-2-col">
            <div className="card">
              <h3 className="card-title">Academic Specialization</h3>
              <p className="card-body">
                BTech 1st year specializing in CSE AIML at GIET University Gunupur. Grounded in core computer science curriculum, data structures, and algorithmic fundamentals.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Core Interests</h3>
              <p className="card-body">
                Strong interest in Artificial Intelligence, Machine Learning models, and structured problem solving across computational systems.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Location & Origin</h3>
              <p className="card-body">
                Based in Jharsuguda, Odisha, India. Currently pursuing studies at GIET University Gunupur.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Current Objective</h3>
              <p className="card-body">
                Actively looking for internships to apply programming proficiency, analytical thinking, and crisis management to real-world software engineering challenges.
              </p>
            </div>
          </div>
        </section>

        {/* 03. SKILLS */}
        <section id="skills">
          <span className="section-prefix">03 // PROFICIENCIES</span>
          <h2 className="section-title">Skills & Toolkit</h2>
          <p className="section-subtitle">
            Technical proficiencies, data management systems, and analytical competencies from profile.
          </p>

          <div className="card-grid grid-3-col">
            <div className="card">
              <h3 className="card-title">Technical Proficiency</h3>
              <p className="card-body">
                Languages and foundational development skills utilized in academic and analytical computing.
              </p>
              <div className="tag-list">
                <span className="tag-chip accent">Python (Proficient)</span>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Database & Systems</h3>
              <p className="card-body">
                Data organization, relational concepts, and database management system principles.
              </p>
              <div className="tag-list">
                <span className="tag-chip accent">DBMS (Skilled)</span>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Decision & Crisis Handling</h3>
              <p className="card-body">
                Systematic decision making and calm crisis management under operational constraints.
              </p>
              <div className="tag-list">
                <span className="tag-chip">Good at Decision Making</span>
                <span className="tag-chip">Crises Management</span>
              </div>
            </div>
          </div>
        </section>

        {/* 04. PROJECTS */}
        <section id="projects">
          <span className="section-prefix">04 // BUILDS_AND_SYSTEMS</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Shipped implementations, engineering builds, and open-source contributions.
          </p>

          {/* Section left cleanly empty per strict Profile.pdf instruction: no filler text */}
          <div className="empty-state-card">
            <p>[ No projects listed in profile.pdf ]</p>
            <span className="empty-state-tag">
              Section maintained as an empty scaffold. To showcase your repositories, provide project titles, descriptions, and GitHub links.
            </span>
          </div>
        </section>

        {/* 05. EDUCATION */}
        <section id="education">
          <span className="section-prefix">05 // ACADEMIC_JOURNEY</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal university engineering program and academic milestones.
          </p>

          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">GIET University Gunupur</h3>
                <p className="card-body" style={{ marginBottom: '4px', color: 'var(--text-high)' }}>
                  Bachelor of Technology - BTech, CSE IN AI ML
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-low)', fontFamily: 'var(--font-mono)' }}>
                  Gunupur, Odisha, India
                </p>
              </div>
              <span className="tag-chip accent">(2025)</span>
            </div>
          </div>
        </section>

        {/* 06. ACHIEVEMENTS */}
        <section id="achievements">
          <span className="section-prefix">06 // VERIFIED_CREDENTIALS</span>
          <h2 className="section-title">Achievements & Recognitions</h2>
          <p className="section-subtitle">
            Verified certifications, honors, and competitive hackathons.
          </p>

          {/* Section left cleanly empty per strict Profile.pdf instruction: no filler text */}
          <div className="empty-state-card">
            <p>[ No certifications or awards listed in profile.pdf ]</p>
            <span className="empty-state-tag">
              Section maintained as an empty scaffold. Add verified certifications, licenses, or competition awards when ready.
            </span>
          </div>
        </section>

        {/* 07. CONTACT */}
        <section id="contact">
          <span className="section-prefix">07 // REACH_OUT</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Direct communication channels for internship inquiries and technical discussions.
          </p>

          <div className="contact-grid">
            <div className="contact-direct">
              <div 
                className="contact-method" 
                onClick={copyEmail} 
                style={{ cursor: 'pointer' }}
                title="Click to copy email address"
              >
                <div>
                  <span className="contact-label">Email (Click to Copy)</span>
                  <div className="contact-val">ggyanesh1813@gmail.com</div>
                </div>
                <div>
                  {copied ? (
                    <span className="copy-feedback">✓ Copied!</span>
                  ) : (
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-low)', fontFamily: 'var(--font-mono)' }}>Copy</span>
                  )}
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/in/g-gyanesh-2bb7a9376" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method"
              >
                <div>
                  <span className="contact-label">LinkedIn Profile</span>
                  <div className="contact-val">www.linkedin.com/in/g-gyanesh-2bb7a9376</div>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-low)', fontFamily: 'var(--font-mono)' }}>Visit ↗</span>
              </a>

              <div className="contact-method" style={{ cursor: 'default' }}>
                <div>
                  <span className="contact-label">Location</span>
                  <div className="contact-val">Jharsuguda, Odisha, India</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="status-pulse"></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--status-emerald)', fontWeight: '600' }}>
                  AVAILABLE FOR INTERNSHIPS
                </span>
              </div>
              <h3 className="card-title" style={{ marginBottom: '10px' }}>Seeking Internship Opportunities</h3>
              <p className="card-body">
                Actively seeking hands-on engineering internships where I can contribute Python programming, database management, and problem-solving skills to real-world software products.
              </p>
              <a 
                href="mailto:ggyanesh1813@gmail.com?subject=Internship%20Opportunity%20Inquiry" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                Send Email Directly
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div>G Gyanesh — Technical Portfolio System</div>
          <div>BTech CSE IN AI ML • GIET University Gunupur</div>
        </footer>
      </main>
    </>
  );
}
