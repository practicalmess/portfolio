/**
 * Hero.js
 *
 * Hero display section
 * Sid Hackney 2022
 */

import React from "react";
// import ReactDOM from "react-dom";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import githublogo from "./images/ghlogo.png";
import lilogo from "./images/linkedinlogo2.png";
import "./processed-styles/Hero.css";

const Hero = () => {
  const { ref, inView } = useInView({
    initialInView: true,
    threshold: 0,
  });
  return (
    <Element name="Hero" className="element">
      <div className="Hero" ref={ref}>
        <div className="Hero-top">
          <h1>Sid Hackney</h1>
          {inView && (
            <div className="Hero--links">
              <a href="https://github.com/practicalmess">
                <img src={githublogo} alt="The circular logo for Github" />
              </a>
              <a href="https://www.linkedin.com/in/sidney-j-hackney/">
                <img src={lilogo} alt="The circular logo for LinkedIn" />
              </a>
            </div>
          )}
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
