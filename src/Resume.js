/**
 * Resume.js
 *
 * Resume-style listing of my work experience
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import typelogo from './images/typescript_logo.svg';
import reactlogo from './images/React-icon.svg';
import phplogo from './images/PHP-logo.svg';
import laravellogo from './images/laravel.jpg';
import sasslogo from './images/sass.svg';
import kubernetesLogo from './images/kubernetes_logo.png';
import graphqlLogo from './images/graphql_logo.png';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';

const Resume = (props) => {

  return (
    <Element name="resume" className="element">
      <div className="App-section">
        <div className="Resume-experience">
          <h1 className="App-section--header">Work Experience</h1>
          <div className="Resume-experience--item">
            <h4>Software Engineer | Oct 2016 - Oct 2017, Nov 2019 - present</h4>
            <h4>Wayfair, LLC</h4>
              <ul>
                <li>Maintaining the product details page of a major ecommerce site that serves hundreds of thousands of visitors per day</li>
                <li>Owning multiple A/B tests of new user facing features as engineering lead, from technical planning to implementation and support</li>
                <li>Acting as team “stability captain” and taking ownership of error monitoring and alerting, documentation, test coverage, and code cleanliness</li>
              </ul>
          </div>
          <div className="Resume-experience--item">
            <h4>Shift Manager | April 2019 - present</h4>
            <h4>Barista/Barista Trainer | July 2018 - April 2019</h4>
            <h4>Starbucks</h4>
              <ul>
                <li>Opening and closing the store as a keyholder, including cash management</li>
                <li>Directing employees through daily routines, delegating tasks and responsibilities</li>
                <li>Creating a positive learning environment while coaching and training new employees</li>
              </ul>
          </div>
          <div className="Resume-experience--item">
            <h4>Administrator and Webmaster | June 2013 - June 2018</h4>
            <h4>The Boston Whovians</h4>
              <ul>
                <li>Creating and maintaining group website using WordPress</li>
                <li>Managing online sales of merchandise and event tickets</li>
                <li>Planning, organizing, and executing social events</li>
              </ul>
          </div>
          <div className="Resume-experience--item">
            <h4>The Mothers' Milk Bank Northeast, Aug. 2013 - May 2014 | Office Assistant</h4>
              <ul>
                <li>Managing record-keeping and administrative tasks for incoming milk donations</li>
                <li>Maintaining computerized database of donors, donations, and sales</li>
                <li>Providing office computer and technical support</li>
              </ul>
          </div>
        </div>
        <div className="Resume-skills">
          <h3>Languages and Frameworks</h3>
          <div className="Resume-skills--item">
            <ul className="languages">
              <li><img src={typelogo} alt="Typescript logo"/></li>
              <li><img src={reactlogo} alt="React logo"/></li>
              <li><img src={kubernetesLogo} alt="Kubernetes logo"/></li>
              <li><img src={graphqlLogo} alt="Graphql logo"/></li>
              <li><img src={sasslogo} alt="SaSS logo"/></li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Resume;
