/**
 * Projects.js
 *
 * List of my sites and projects with short descriptions and links
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';
import pdp from './images/pdpscreenshot.png';
import beatbox from './images/bbscreenshot-sq.png';
import pmrp from './images/pmrp-screenshot.png';

const Projects = (props) => {

  return (
    <Element name="projects" className="element">
      <div className="App-section">
        <h1 className="App-section--header">Projects</h1>
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="https://www.wayfair.com/furniture/pdp/loon-peak-urbana-1-drawer-iron-nightstand-w002783661.html">
              <img src={pdp} alt="A screenshot of the Wayfair product details page."/>
            </a>
          </div>
          <div className="Project-card--column2">
            <a href="https://www.wayfair.com/furniture/pdp/loon-peak-urbana-1-drawer-iron-nightstand-w002783661.html">
              <h2>Wayfair Product Details Page</h2>
            </a>
            <p>Since November 2019 I have worked on the dedicated product details page team at Wayfair, supporting or leading many projects - from deprecating the "mweb" version of the page in favor of a single responsive layout to converting from working in a monolith to owning a fully decoupled and self-deployed webpack app.</p>
            <p>Examples of components I deployed include the cards beneath the "What We Offer" header and the review summary block containing the numerical average and histogram view of customer ratings.</p>
          </div>
        </div>
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="http://pmrp.org/static/plan9/program/">
              <img src={pmrp} alt="A screenshot of a digital program for a live theater performance."/>
            </a>
          </div>
          <div className="Project-card--column2">
            <a href="http://pmrp.org/static/plan9/program/">
              <h2>Post Meridian Radio Players digital program</h2>
            </a>
            <p>This digital program I made served as a COVID friendly replacement for paper programs at a Halloween performance of the classic so-bad-its-good Plan 9 From Outer Space, adapted into an old fashioned radio play and read live. See the code on GitHub here: <a href="https://github.com/practicalmess/pmrp-plan-9">github.com/practicalmess/pmrp-plan-9</a></p>
          </div>
        </div>
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="https://invis.io/WSLJFVHMC7V#/304593239_main_Page">
              <img src={beatbox} alt="A screenshot of the final design of my Beat.Box project for General Assembly."/>
            </a>
          </div>
          <div className="Project-card--column2">
            <a href="https://invis.io/WSLJFVHMC7V#/304593239_main_Page">
              <h2>Beat.Box (mockup)</h2>
            </a>
            <p>Built as the final project for a General Assembly design course, this is a mockup for a long-scroll landing page for an imaginary music curation service.</p>
            
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
