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
            I am a full stack software engineer with a specialty in front-end web development. I pride myself on my ability to quickly become familiar with systems and concepts I have never encountered, especially since engineering in particular is a career where constant learning is not only encouraged but largely inevitable. I am excited to use my skills to work on a wide variety of projects in the future as my knowledge and experience expand.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Home;