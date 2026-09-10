import React from 'react';

export default function About({ about = [] }) {
  return (
    <section id="about">
      <span className="section-prefix">02 // WHO_I_AM</span>
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Academic background, core interests, and foundational focus areas.
      </p>
      
      <div className="card-grid grid-2-col">
        {about.map((item, index) => (
          <div className="card card-hover-depth" key={index}>
            <div className="card-top-index">
              <span className="card-numeric">0{index + 1}</span>
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
