import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { personal, about, skills, projects, education, achievements } = portfolioData;

  const [toast, setToast] = useState({
    visible: false,
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setToast({
      visible: true,
      message: `Copied to clipboard: ${personal.email}`,
    });

    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000);
  };

  const closeToast = () => {
    setToast({ visible: false, message: '' });
  };

  return (
    <>
      <Navbar personal={personal} onCopyEmail={handleCopyEmail} />

      <Hero personal={personal} onCopyEmail={handleCopyEmail} />

      <main>
        <About about={about} />
        <Skills skills={skills} />
        <Projects projects={projects} onCopyEmail={handleCopyEmail} />
        <Education education={education} />
        <Achievements achievements={achievements} />
        <Contact personal={personal} onCopyEmail={handleCopyEmail} />
        <Footer personal={personal} />
      </main>

      {/* Visual Toast Notification for Stage 4 */}
      <Toast 
        visible={toast.visible} 
        message={toast.message} 
        onClose={closeToast} 
      />
    </>
  );
}
