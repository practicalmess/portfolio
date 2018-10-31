    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import './styles/App.css';
    import githublogo from './images/ghlogo.png';
    import linkedinlogo from './images/lilogo.png';
    import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
    import './fontawesome/css/font-awesome.min.css';

    const Contact = (props) => {

      return (
        <Element name="contact" className="element">
          <div className="App-section">
            <div className="Contact-link">
              <a href="https://github.com/practicalmess">
                <i className="fa fa-github" aria-hidden="true"></i>
                <br/>
              </a>
            </div>
            <div className="Contact-link">
              <a href="https://www.linkedin.com/in/sidney-j-hackney-9711b1ab/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <br/>
              </a>
            </div>
          </div>
        </Element>
      );
    };

    export default Contact;
  