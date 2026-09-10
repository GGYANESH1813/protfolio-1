import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { personal, stats, about, skills, projects, education, achievements } = portfolioData;

  return (
    <div className="portfolio-app">
      <Navbar personal={personal} />
      <main className="main-content-container">
        <Hero personal={personal} stats={stats} />
        <About about={about} personal={personal} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education education={education} />
        <Achievements achievements={achievements} />
        <Contact personal={personal} />
        <Footer personal={personal} />
      </main>
    </div>
  );
}
