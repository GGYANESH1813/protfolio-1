import React from 'react';

export default function Education({ education = [] }) {
  return (
    <section id="education">
      <span className="section-prefix">05 // ACADEMIC_JOURNEY</span>
      <h2 className="section-title">Education & Foundations</h2>
      <p className="section-subtitle">
        Formal university engineering program and academic milestones.
      </p>

      {education.map((item, index) => (
        <div className="card card-hover-depth" key={index}>
          <div className="card-header">
            <div>
              <h3 className="card-title">{item.institution}</h3>
              <p className="card-body" style={{ marginBottom: '4px', color: 'var(--text-high)', fontWeight: '500' }}>
                {item.degree}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-low)', fontFamily: 'var(--font-mono)' }}>
                📍 {item.location}
              </p>
            </div>
            <span className="tag-chip accent">{item.batch}</span>
          </div>
          {item.focus && (
            <p className="card-body" style={{ marginTop: '12px', fontSize: '0.9rem', borderTop: '1px solid var(--surface-3)', paddingTop: '12px' }}>
              <strong>Academic Pillars:</strong> {item.focus}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
