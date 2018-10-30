    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import jslogo from './images/Javascript-shield.png';
    import reactlogo from './images/React-icon.svg';
    import phplogo from './images/PHP-logo.svg';
    import laravellogo from './images/laravel.jpg';
    import sasslogo from './images/sass.svg';
    import './App.css';
    // import './fontawesome/css/font-awesome.min.css';

    const Resume = (props) => {
      const getStyle = () => {
        const topValue = props.shown === 'resume' ? '150px' : '-1000px';
        // const dispValue = props.shown === 'home' ? 'block' : 'none';
        return {
          top: topValue,
          // display: dispValue
        };
      };

      return (
        <div style= {getStyle()} className="App-section">
          <div className="Resume-experience">
            <h3>Work Experience</h3>
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
              <h4>The Boston Whovians June 2013 - present | Administrator and Webmaster</h4>
                <ul>
                  <li>Assisting with planning and running social events</li>
                  <li>Setting up and maintaining group website using WordPress 4.5.2</li>
                  <li>Managing online sales of merchandise and event tickets</li>
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
      );
    };

    export default Resume;
