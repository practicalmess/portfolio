    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
    import './styles/App.css';
    import beatbox from './images/bbscreenshot-sq.png';
    import bwhovians from './images/bwscreenshot.png';
    // import './fontawesome/css/font-awesome.min.css';

    const Projects = (props) => {

      return (
        <Element name="projects" className="element">
          <div className="App-section">
            <h1>Projects</h1>
            <div className="Project-card">
              <div className="Project-card--column1">
                <img src={beatbox} alt="A screenshot of the final design of my Beat.Box project for General Assembly."/>
              </div>
              <div className="Project-card--column2">
                <h2>Beat.Box (mockup)</h2>
                <p>Built as the final project for a General Assembly design course, this is a mockup for a long-scroll landing page for an imaginary music curation service.</p>
              </div>
            </div>
            <div className="Project-card">
              <div className="Project-card--column1">
                <img src={bwhovians}/>
              </div>
              <div className="Project-card--column2">
                <h2>The Boston Whovians</h2>
                <p>This is the current homepage for the meetup and cosplay group, the Boston Whovians. It is built in Wordpress with an out-of-the-box theme.</p>
              </div>
            </div>
          </div>
        </Element>
      );
    };

    export default Projects;
  