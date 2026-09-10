import React from 'react';

export default function Achievements({ achievements = [] }) {
  return (
    <section id="achievements">
      <span className="section-prefix">06 // VERIFIED_CREDENTIALS</span>
      <h2 className="section-title">Achievements & Recognitions</h2>
      <p className="section-subtitle">
        Verified certifications, honors, and competitive hackathons.
      </p>

      {achievements.length === 0 ? (
        <div className="empty-state-card card-hover-depth">
          <div className="empty-state-icon">🛡️</div>
          <p className="empty-state-title">[ No certifications or awards listed in profile.pdf ]</p>
          <span className="empty-state-tag">
            Section maintained as an empty scaffold. Verified certifications, licenses, and competition awards will populate here once verified.
          </span>
        </div>
      ) : (
        <div className="card-grid grid-2-col">
          {achievements.map((item, index) => (
            <div className="card card-hover-depth" key={index}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
