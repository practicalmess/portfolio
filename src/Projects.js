    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import './App.css';
    // import './fontawesome/css/font-awesome.min.css';

    const Projects = (props) => {
      const getStyle = () => {
        const topValue = props.shown === 'projects' ? '150px' : '-1000px';
        // const dispValue = props.shown === 'home' ? 'block' : 'none';
        return {
          top: topValue,
          // display: dispValue
        };
      };

      return (
        <div style= {getStyle()} className="App-section">
          <div className="App-card">
            <h2>Project 1</h2>
            <div className="App-card--column1">
              <img src="/" alt="A screenshot of [[something]]"/>
            </div>
          </div>
          <div className="App-card">
            <h2>Project 2</h2>
            <div className="App-card--column1">
              <img src="/" alt="A screenshot of [[something]]"/>
            </div>
          </div>
          <div className="Next-bar" id="to-resume">
          </div>
        </div>
      );
    };

    export default Projects;
  