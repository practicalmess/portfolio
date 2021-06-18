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
