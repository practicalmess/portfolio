/**
 * About.js
 *
 * Written "about me" section
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './styles/App.css';

const About = (props) => {

  return (
    <Element name="about" className="element">
      <div className="App-section">
        <h1 className="App-section--header">About Me</h1>
        <p>
          A Boston, MA native, I spent one year at the University of Texas at Austin before returning to Boston to take a series of evening courses in topics ranging from the history of photography to calculus before focusing exclusively on computer science courses. The moment that made me realize I wanted to be a software engineer was when, after deciding on a whim that I wanted to play a computer game from my childhood (The Legend of Kyrandia), I spent a joyous five hours researching and configuring DOS emulators. Even though all I got out of it was a short adventure game that was perhaps not as challenging as I remembered, the experience of trial and discovery from diving into programs and concepts I had never interacted with before stuck with me.
        </p>
        <p>
          As a person, I am patient, diligent, and kind. I grew up in a Quaker household, and though I am not a Quaker now I still believe that the best way to grow and advance is as a community. I am a dedicated geek interested in cosplay and sci-fi, which is why helping run the Boston Whovians, a Boston-based meetup group for fans of the BBC phenomenon Doctor Who, is such a fun and meaningful part of my life. My pronouns are "they/them/their".
        </p>
      </div>
    </Element>
  );
};

export default About;