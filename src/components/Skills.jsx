import React from 'react';

export default function Skills({ skills = [] }) {
  return (
    <section id="skills">
      <span className="section-prefix">03 // PROFICIENCIES</span>
      <h2 className="section-title">Skills & Toolkit</h2>
      <p className="section-subtitle">
        Technical proficiencies, data management systems, and analytical competencies from profile.
      </p>

      <div className="card-grid grid-3-col">
        {skills.map((categoryGroup, index) => (
          <div className="card card-hover-depth" key={index}>
            <h3 className="card-title">{categoryGroup.category}</h3>
            <p className="card-body">
              {categoryGroup.description}
            </p>
            <div className="tag-list" style={{ marginTop: '16px' }}>
              {categoryGroup.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`tag-chip ${categoryGroup.isAccent ? 'accent' : ''} interactive-chip`}
                  tabIndex={0}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
