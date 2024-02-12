/**
 * App.js
 *
 * Main app file, contains scroll component for navigating between all child components
 * Sid Hackney 2019
 */

import React, { useState } from 'react';

import Hero from './components/Hero';
import Nav from './components/Nav.tsx';
import Gallery from './components/Gallery.tsx';
import Projects from './components/Projects';
import galleryData from './data/galleryData.json';
import './processed-styles/App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [heroInView, setHeroInView] = useState(true);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="App">
      <div className="background orange"></div>
      <div className="background blue"></div>
      <div className="App-header--wrapper">
        <Nav isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
      </div>

      <div className="App-body">
        <Hero />
        <Projects />
        <Gallery projects={Object.values(galleryData.galleryData)} />
      </div>

      <div className="App-footer">
        <span>Copyright &copy; {year} Sidney Hackney</span>
      </div>
    </div>
  );
};

export default App;
