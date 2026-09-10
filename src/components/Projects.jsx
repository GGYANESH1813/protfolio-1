import React, { useState } from 'react';

export default function Projects({ projects = [], onCopyEmail }) {
  const [activeSlot, setActiveSlot] = useState(null);

  return (
    <section id="projects">
      <span className="section-prefix">04 // BUILDS_AND_SYSTEMS</span>
      <h2 className="section-title">Projects & Systems</h2>
      <p className="section-subtitle">
        Shipped implementations, engineering builds, and open-source contributions.
      </p>

      {/* Project Philosophy Banner per PRD */}
      <div className="project-philosophy-banner">
        <span className="philosophy-step">Learn</span>
        <span className="philosophy-arrow">→</span>
        <span className="philosophy-step">Build</span>
        <span className="philosophy-arrow">→</span>
        <span className="philosophy-step">Solve</span>
        <span className="philosophy-meta">// Core Engineering Philosophy</span>
      </div>

      {projects.length === 0 ? (
        <div className="projects-scaffold-container">
          {/* Interactive Project Card Docks with Hover Depth per Stage 4 */}
          <div className="card-grid grid-2-col">
            <div 
              className={`card project-dock-card card-hover-depth ${activeSlot === 1 ? 'dock-active' : ''}`}
              onMouseEnter={() => setActiveSlot(1)}
              onMouseLeave={() => setActiveSlot(null)}
            >
              <div className="dock-header">
                <span className="dock-badge">SLOT // 01 [FEATURED]</span>
                <span className="dock-status">Awaiting Deployment</span>
              </div>
              <h3 className="card-title" style={{ marginTop: '8px' }}>Featured System Architecture</h3>
              <p className="card-body">
                Structured two-tiered project slot reserved for AI/ML or Python systems. Ready for problem statement, solution mechanics, and repository metrics.
              </p>
              <div className="dock-actions">
                <a 
                  href="https://github.com/GGYANESH1813" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm dock-trigger"
                >
                  GitHub Repositories ↗
                </a>
                <button 
                  type="button" 
                  onClick={onCopyEmail} 
                  className="btn btn-ghost btn-sm"
                >
                  Suggest Project Inquiries
                </button>
              </div>
            </div>

            <div 
              className={`card project-dock-card card-hover-depth ${activeSlot === 2 ? 'dock-active' : ''}`}
              onMouseEnter={() => setActiveSlot(2)}
              onMouseLeave={() => setActiveSlot(null)}
            >
              <div className="dock-header">
                <span className="dock-badge">SLOT // 02 [DATABASE]</span>
                <span className="dock-status">Awaiting Deployment</span>
              </div>
              <h3 className="card-title" style={{ marginTop: '8px' }}>DBMS & Computational Tool</h3>
              <p className="card-body">
                Secondary engineering slot configured for relational schema design, query evaluation, or data pipeline implementations.
              </p>
              <div className="dock-actions">
                <a 
                  href="https://github.com/GGYANESH1813" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm dock-trigger"
                >
                  Inspect Git Profile ↗
                </a>
              </div>
            </div>
          </div>

          {/* Strict Data Rule Notice */}
          <div className="empty-state-notice">
            <span className="empty-notice-dot">i</span>
            <span>
              <strong>Profile Integrity:</strong> No specific project links were listed in <code>Profile (1).pdf</code>. Interactive docks are maintained per Stage 4 specification.
            </span>
          </div>
        </div>
      ) : (
        <div className="card-grid grid-2-col">
          {projects.map((project, index) => (
            <div className="card card-hover-depth" key={index}>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-body">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
