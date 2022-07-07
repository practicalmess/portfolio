/**
 * Hero.js
 *
 * Hero display section
 * Sid Hackney 2022
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Element
} from "react-scroll";
import { useInView } from 'react-intersection-observer';
import githublogo from "./images/ghlogo.png";
import lilogo from "./images/linkedinlogo2.png";
import "./styles/Hero.css";

const Hero = () => {
  const { ref, inView, entry } = useInView({initialInView: true, threshold: 0,});
  return (
    <Element name="Hero" className="element">
      <div className="Hero" ref={ref}>
        <div className="Hero-top">
          <h1>Sid Hackney</h1>
          {inView &&
            <div className="Hero--links">
              <a href="https://github.com/practicalmess">
                <img src={githublogo} alt="The circular logo for Github" />
              </a>
              <a href="https://www.linkedin.com/in/sidney-j-hackney/">
                <img src={lilogo} alt="The circular logo for LinkedIn" />
              </a>
            </div>
          }
        </div>
        <span className="Hero-intro copy-text">
          I am a full stack software engineer with a specialty in front-end web
          development. I pride myself on my ability to quickly become familiar
          with systems and concepts I have never encountered.
        </span>
      </div>
      <h3>Beautiful, modern websites for all</h3>
    </Element>
  );
};

export default Hero;
