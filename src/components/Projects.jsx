import React from 'react';

export default function Projects({ projects = [] }) {
  return (
    <section id="projects">
      <div className="section-header-wrap">
        <span className="section-prefix">04 // BUILDS_AND_SYSTEMS</span>
        <h2 className="section-title">Featured Projects & Systems</h2>
        <p className="section-subtitle">
          Engineered software solutions, AI architectures, and database tools built with Python and DBMS.
        </p>
      </div>

      <div className="card-grid grid-2-col">
        {projects.map((project, index) => (
          <div className="card project-spec-card" key={index}>
            <div className="project-thumbnail-wrap">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-thumb-img" 
                loading="lazy"
              />
              <span className="project-year-badge">{project.year}</span>
            </div>
            <div className="project-details">
              <span className="project-type-tag">{project.type}</span>
              <h3 className="card-title" style={{ marginTop: '4px' }}>{project.title}</h3>
              <p className="project-subtitle-text">{project.subtitle}</p>
              <p className="card-body" style={{ marginTop: '8px' }}>{project.description}</p>
              
              <div className="tag-list" style={{ marginTop: '16px' }}>
                {project.tags.map((t, idx) => (
                  <span className="tag-chip accent" key={idx}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
