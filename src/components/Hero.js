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
      <p>
        I am a full stack software engineer with a special interest in user
        focused, accessible front-end web development.
      </p>
      <span className="Hero-intro copy-text">
        I pride myself on my ability to quickly become familiar with systems and
        concepts I have never encountered, especially since engineering in
        particular is a career where constant learning is not only encouraged
        but largely inevitable. I am excited to use my skills to work on a wide
        variety of meaningful projects in the future as my knowledge and
        experience expand.
      </span>
    </Element>
  );
};

export default Hero;
