/**
 * Home.js
 *
 * Top level content and summary
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';

const Home = (props) => {

  return (
    <Element name="home" className="element">
      <div className="App-section">
        <div className="Home-intro--wrapper">
          <h1 className="Home-intro header-text">Sidney J Hackney</h1>
          <h3 className="Home-intro header-text">a full-stack web developer</h3>
          <p className="Home-intro copy-text">
            This website is still in its infancy. Features yet to come:
            <ul>
              <li>Accessibility settings (font size, contrast, etc.)</li>
              <li>More detailed descriptions of my past projects</li>
            </ul>
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Home;