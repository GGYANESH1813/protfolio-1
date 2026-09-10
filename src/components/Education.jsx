import React from 'react';

export default function Education({ education = [] }) {
  return (
    <section id="education">
      <div className="section-header-wrap">
        <span className="section-prefix">05 // ACADEMIC_JOURNEY</span>
        <h2 className="section-title">Education & Milestones</h2>
        <p className="section-subtitle">
          Undergraduate engineering curriculum, university affiliations, and academic focuses.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div className="card education-card" key={index}>
            <div className="education-header">
              <div className="edu-title-group">
                <div className="edu-badge-row">
                  <span className="edu-icon">🏛️</span>
                  <span className="tag-chip accent">{item.duration}</span>
                  {item.current && <span className="status-live-pill">In Progress</span>}
                </div>
                <h3 className="card-title" style={{ fontSize: '1.35rem', marginTop: '8px' }}>
                  {item.institution}
                </h3>
                <p className="edu-degree-line">
                  {item.degree} — <strong>{item.field}</strong>
                </p>
                <p className="edu-location">📍 {item.location}</p>
              </div>
            </div>

            {item.highlights && item.highlights.length > 0 && (
              <div className="edu-highlights">
                <span className="highlights-label">Key Focus Areas:</span>
                <ul className="highlights-list">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
