import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/aquarium.jpg';
import './App.css';
// import './fontawesome/css/font-awesome.min.css';

const About = (props) => {
  const getStyle = () => {
    const topValue = props.shown === 'about' ? '150px' : '-1000px';
    // const dispValue = props.shown === 'home' ? 'block' : 'none';
    return {
      top: topValue,
      // display: dispValue
    };
  };

  return (
    <div style= {getStyle()} className="App-section">
      <h3>About Me</h3>
      <p>
        A Boston, MA native, I spent one year at the University of Texas at Austin before returning to Boston to take a series of evening courses in topics ranging from the history of photography to calculus before focusing exclusively on computer science courses. The moment that made me realize I wanted to be a software engineer was when, after deciding on a whim that I wanted to play a computer game from my childhood (The Legend of Kyrandia), I spent a joyous five hours researching and configuring DOS emulators. Even though all I got out of it was a short adventure game that was perhaps not as challenging as I remembered, the experience of trial and discovery from diving into programs and concepts I had never interacted with before stuck with me.
      </p>
      <p>
        As a person, I am patient, diligent, and kind. I grew up in a Quaker household, and though I am not a Quaker now I still believe that the best way to grow and advance is as a community. I am a dedicated geek interested in cosplay and sci-fi, which is why running the Boston Whovians, a Boston-based meetup group for fans of the BBC phenomenon Doctor Who, is such a fun and meaningful part of my life. I also identify as transgender and my pronouns are "they/them/their".
      </p>
    </div>
  );
};

export default About;