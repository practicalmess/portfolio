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
        Experienced Full Stack Developer recognized for bridging communication
        gaps across disciplines and swiftly learning new languages and systems.
        Proficient in JavaScript/TypeScript, React.js, and AWS, with a track
        record of streamlining processes and delivering impactful frontend
        solutions.
      </p>
      <span className="Hero-intro copy-text">
        I pride myself on my ability to quickly become familiar with systems and
        concepts I have never encountered, especially since engineering in
        particular is a career where constant learning is not only encouraged
        but largely inevitable. I am excited to use my skills to work on a wide
        variety of meaningful projects in the future as my knowledge and
        experience expand. Let&apos;s talk about how my knowledge and experience
        can serve your needs.
      </span>
    </Element>
  );
};

export default Hero;
