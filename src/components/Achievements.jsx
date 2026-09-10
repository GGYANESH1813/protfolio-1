import React from 'react';

export default function Achievements({ achievements = [] }) {
  return (
    <section id="achievements">
      <div className="section-header-wrap">
        <span className="section-prefix">06 // VERIFIED_CREDENTIALS</span>
        <h2 className="section-title">Achievements & Recognitions</h2>
        <p className="section-subtitle">
          Academic achievements, technical evaluations, and operational leadership awards.
        </p>
      </div>

      <div className="card-grid grid-3-col">
        {achievements.map((item, index) => (
          <div className="card achievement-card" key={index}>
            <div className="achievement-icon-wrap">
              <span className="achievement-icon">🏆</span>
              <span className="achievement-year">{item.year}</span>
            </div>
            <h3 className="card-title" style={{ marginTop: '12px' }}>{item.title}</h3>
            <span className="achievement-issuer">{item.issuer}</span>
            <p className="card-body" style={{ marginTop: '8px' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
