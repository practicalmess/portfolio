/**
 * Hero.js
 *
 * Hero display section
 * Sid Hackney 2022
 */

import React from 'react';
// import ReactDOM from "react-dom";
import { Element } from 'react-scroll';
import '../processed-styles/Hero.css';

const Hero = () => {
  return (
    <Element name="Hero" className="element">
      <div className="Hero">
        <div className="Hero-top">
          <h1>Sid Hackney</h1>
        </div>
      </div>
      <h2>Beautiful, modern websites for all</h2>
      <span className="Hero-intro copy-text">
        I am a full stack software engineer with a specialty in front-end web
        development. I pride myself on my ability to quickly become familiar
        with systems and concepts I have never encountered.
      </span>
    </Element>
  );
};

export default Hero;
