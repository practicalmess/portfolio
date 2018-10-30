import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/aquarium.jpg';
import './App.css';
// import './fontawesome/css/font-awesome.min.css';

const Home = (props) => {
  const getStyle = () => {
    const topValue = props.shown === 'home' ? '150px' : '-1000px';
    // const dispValue = props.shown === 'home' ? 'block' : 'none';
    return {
      top: topValue,
      // display: dispValue
    };
  };

  return (
    <div style= {getStyle()} className="App-section">
      <div className="Home-portrait--wrapper">
        <img src="/" className="Home-portrait--image" alt="portrait" />
      </div>
      <div className="Home-intro--wrapper">
        <h1 className="Home-intro header-text">Sidney J Hackney</h1>
        <h3 className="Home-intro header-text">a full-stack web developer</h3>
        <p className="Home-intro copy-text">
          A snappy tagline about solutions and design.
          //I am a Boston-based full stack web developer with a passion for self teaching and taking ownership of projects. My background of personal projects and piecemeal education has given me a foundation of flexibility and a drive to find the most relevant and interesting topics and languages to research and utilize.
        </p>
      </div>
      <div className="Home-links--wrapper">
      </div>
      <div className="Next-bar" id="to-projects">
      </div>
    </div>
  );
};

export default Home;