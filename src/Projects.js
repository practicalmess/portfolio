/**
 * Projects.js
 *
 * List of my sites and projects with short descriptions and links
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';
import pdp from './images/pdpscreenshot.png';
import beatbox from './images/bbscreenshot-sq.png';
import bwhovians from './images/bwscreenshot.png';

const Projects = (props) => {

  return (
    <Element name="projects" className="element">
      <div className="App-section">
        <h1 className="App-section--header">Projects</h1>
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="https://invis.io/WSLJFVHMC7V#/304593239_main_Page">
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
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="http://bostonwhovians.com">
              <img src={bwhovians} alt="A screenshot of the homepage for the Boston Whovians"/>
            </a>
          </div>
          <div className="Project-card--column2">
            <a href="http://bostonwhovians.com">
              <h2>The Boston Whovians</h2>
            </a>
            <p>This is the current homepage for the meetup and cosplay group, the Boston Whovians. It is built in Wordpress with an out-of-the-box theme.</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
