/**
 * Resume.js
 *
 * Resume-style listing of my work experience
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jslogo from './images/Javascript-shield.png';
import reactlogo from './images/React-icon.svg';
import phplogo from './images/PHP-logo.svg';
import laravellogo from './images/laravel.jpg';
import sasslogo from './images/sass.svg';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';

const Resume = (props) => {

  return (
    <Element name="resume" className="element">
      <div className="App-section">
        <div className="Resume-experience">
          <h1 className="App-section--header">Work Experience</h1>
          <div className="Resume-experience--item">
            <h4>The Boston Whovians June 2013 - present | Administrator and Webmaster</h4>
              <ul>
                <li>Assisting with planning and running social events</li>
                <li>Setting up and maintaining group website using WordPress 4.5.2</li>
                <li>Managing online sales of merchandise and event tickets</li>
              </ul>
          </div>
          <div className="Resume-experience--item">
            <h4>Wayfair, LLC Oct. 2016 - Oct. 2017 | Software Engineer</h4>
              <ul>
                <li>Full stack development of internal browser-based tools</li>
                <li>Using React.js and proprietary MVC framework to build out stand-alone apps</li>
                <li>Translating designers’ wireframe mockups into functional code</li>
                <li>Collaborating with other team members on planning and code design</li>
              </ul>
          </div>
          <div className="Resume-experience--item">
            <h4>The Mothers' Milk Bank Northeast, Aug. 2013 - May 2014 | Office Assistant</h4>
              <ul>
                <li>Accepting, cataloging, and storing incoming milk donations</li>
                <li>Helping with computer tasks as needed</li>
              </ul>
          </div>
        </div>
        <div className="Resume-skills">
          <h3>Languages and Frameworks</h3>
          <div className="Resume-skills--item">
            <ul className="languages">
              <li><img src={jslogo} alt="Javascript logo"/></li>
              <li><img src={reactlogo} alt="React logo"/></li>
              <li><img src={phplogo} alt="PHP logo"/></li>
              <li><img src={laravellogo} alt="Laravel logo"/></li>
              <li><img src={sasslogo} alt="SaSS logo"/></li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Resume;
