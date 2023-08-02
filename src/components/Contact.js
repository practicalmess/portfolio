/**
 * Contact.js
 *
 * Contact info section (WIP - not currently implemented)
 * Sid Hackney 2019
 */

import React from 'react';
import './styles/App.css';
import { Element } from 'react-scroll';
import './fontawesome/css/font-awesome.min.css';

const Contact = () => {
  return (
    <Element name="contact" className="element">
      <div className="App-section">
        <h1 className="App-section--header">Contact Me</h1>
        <div className="Contact-link">
          <a href="https://www.linkedin.com/in/sidney-j-hackney-9711b1ab/">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <span>LinkedIn</span>
            <br />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
