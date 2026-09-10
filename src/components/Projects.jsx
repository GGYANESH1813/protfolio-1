import React, { useState } from 'react';
import { CoverflowCarousel } from './ui/coverflow-carousel';

export default function Projects({ projects = [] }) {
  const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' | 'grid'

  // Format slides for CoverflowCarousel
  const coverflowSlides = projects.map(p => ({
    src: p.image,
    alt: p.title,
    title: p.title,
    subtitle: p.subtitle,
    meta: [
      { label: "Type", value: p.type },
      { label: "Year", value: p.year },
      { label: "Core", value: p.tags[0] }
    ]
  }));

  return (
    <section id="projects">
      <div className="section-header-wrap flex-between">
        <div>
          <span className="section-prefix">04 // BUILDS_AND_SYSTEMS</span>
          <h2 className="section-title">Featured Projects & Prototypes</h2>
          <p className="section-subtitle">
            Engineered systems, AI models, and database diagnostic tools built with Python and DBMS.
          </p>
        </div>

        {/* View Toggle */}
        <div className="view-toggle-pills">
          <button 
            className={`toggle-pill ${viewMode === 'coverflow' ? 'active' : ''}`}
            onClick={() => setViewMode('coverflow')}
          >
            3D Carousel
          </button>
          <button 
            className={`toggle-pill ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* 3D Coverflow Carousel View */}
      {viewMode === 'coverflow' && (
        <div className="coverflow-container-wrap">
          <div className="coverflow-hint-tag">
            <span>Drag or use Arrow keys to rotate projects</span>
          </div>
          <CoverflowCarousel 
            slides={coverflowSlides}
            showCaption={true}
            showNavigation={true}
            showPagination={true}
            cardWidth="clamp(220px, 26vw, 320px)"
          />
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
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
      )}
    </section>
  );
}
