    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
    import './styles/App.css';
    import beatbox from './images/bbscreenshot-sq.png';
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
                <h2>Beat.Box - mockup</h2>
              </div>
            </div>
          </div>
        </Element>
      );
    };

    export default Projects;
  