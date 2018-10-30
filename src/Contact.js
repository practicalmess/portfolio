    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import './App.css';
    // import './fontawesome/css/font-awesome.min.css';

    const Contact = (props) => {
      const getStyle = () => {
        const topValue = props.shown === 'contact' ? '150px' : '-1000px';
        // const dispValue = props.shown === 'home' ? 'block' : 'none';
        return {
          top: topValue,
          // display: dispValue
        };
      };

      return (
        <div style= {getStyle()} className="App-section">
          <div className="Contact-link">
            <a href="https://github.com/practicalmess">
              <i className="fa fa-github" aria-hidden="true"></i>
              <br/>
              <img src="/" alt="GitHub Profile"/>
            </a>
          </div>
          <div className="Contact-link">
            <a href="https://www.linkedin.com/in/sidney-j-hackney-9711b1ab/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              <br/>
              <img src="/" alt="LinkedIn Profile"/>
            </a>
          </div>
        </div>
      );
    };

    export default Contact;
  