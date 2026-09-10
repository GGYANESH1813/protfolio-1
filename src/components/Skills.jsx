import React, { useState } from 'react';

export default function Skills({ skills = [] }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];

  const displayedSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return (
    <section id="skills">
      <div className="section-header-wrap">
        <span className="section-prefix">03 // PROFICIENCIES</span>
        <h2 className="section-title">Technical Toolkit & Disciplines</h2>
        <p className="section-subtitle">
          Core programming competencies, relational database management, and problem-solving domains.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skill-filter-tabs">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="card-grid grid-2-col">
        {displayedSkills.map((categoryGroup, index) => (
          <div className="card skill-card" key={index}>
            <div className="card-header-clean">
              <h3 className="card-title">{categoryGroup.category}</h3>
              <span className="skill-count-badge">{categoryGroup.items.length} proficiencies</span>
            </div>

            <div className="skill-bars-list">
              {categoryGroup.items.map((item, i) => (
                <div className="skill-item-row" key={i}>
                  <div className="skill-item-header">
                    <span className="skill-name">
                      {item.highlight && <span className="highlight-star">★ </span>}
                      {item.name}
                    </span>
                    <span className="skill-level-text">{item.level}</span>
                  </div>
                  <div className="skill-progress-track">
                    <div 
                      className={`skill-progress-fill ${item.highlight ? 'accent-fill' : ''}`}
                      style={{ width: `${item.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
