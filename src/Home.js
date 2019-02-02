import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import portrait from './images/me.jpg';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';
// import './fontawesome/css/font-awesome.min.css';

const Home = (props) => {

  return (
    <Element name="home" className="element">
      <div className="App-section">
        <div className="Home-portrait--wrapper">
          <img src={portrait} className="Home-portrait--image" alt="portrait" />
        </div>
        <div className="Home-intro--wrapper">
          <h1 className="Home-intro header-text">Sidney J Hackney</h1>
          <h3 className="Home-intro header-text">a full-stack web developer</h3>
          <p className="Home-intro copy-text">
            A snappy tagline about solutions and design!
          </p>
          <p className="Home-intro copy-text">
            This website is still in its infancy. Features yet to come:
            <ul>
              <li>Accessibility settings (font size, contrast, etc.)</li>
              <li>Responsive styles</li>
              <li>More detailed descriptions of my past projects</li>
              <li>A much spiffier design!</li>
            </ul>
          </p>
        </div>
        <div className="Home-links--wrapper">
        </div>
        <div className="Next-bar" id="to-projects">
        </div>
      </div>
    </Element>
  );
};

export default Home;