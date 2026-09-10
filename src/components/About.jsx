import React from 'react';

export default function About({ about = [], personal }) {
  return (
    <section id="about">
      <div className="section-header-wrap">
        <span className="section-prefix">02 // WHO_I_AM</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Academic foundations, technical mindset, and engineering principles.
        </p>
      </div>

      <div className="card-grid grid-2-col">
        {about.map((item, index) => (
          <div className="card about-card" key={index}>
            <div className="card-top-row">
              <span className="card-index">0{index + 1}</span>
              {item.subtitle && <span className="card-pill">{item.subtitle}</span>}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.description}</p>
          </div>
        ))}
      </div>

      {personal && (
        <div className="location-banner">
          <div className="location-info">
            <span className="location-pin">📍</span>
            <span>Based in <strong>{personal.location}</strong> — Studying at <strong>{personal.institution}</strong></span>
          </div>
          <span className="location-tag">B.Tech Batch 2025</span>
        </div>
      )}
    </section>
  );
}
