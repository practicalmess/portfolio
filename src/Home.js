/**
 * Home.js
 *
 * Top level content and summary
 * Sid Hackney 2019
 */

import React from 'react';
import { Element } from 'react-scroll';
import './styles/App.css';

const Home = () => {
  return (
    <Element name="home" className="element">
      <div className="App-section">
        <div className="Home-intro--wrapper">
          <h1 className="Home-intro header-text">Sidney J Hackney</h1>
          <h3 className="Home-intro header-text">a full-stack web developer</h3>
          <p className="Home-intro copy-text">
            I am a full stack software engineer with a special interest in user
            focused, accessible front-end web development. I pride myself on my
            ability to quickly become familiar with systems and concepts I have
            never encountered, especially since engineering in particular is a
            career where constant learning is not only encouraged but largely
            inevitable. I am excited to use my skills to work on a wide variety
            of meaningful projects in the future as my knowledge and experience
            expand.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Home;
