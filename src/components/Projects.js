/**
 * Projects.js
 *
 * List of my sites and projects with short descriptions and links
 * Sid Hackney 2019
 */

import React from 'react';
import { Element } from 'react-scroll';
// import './../styles/App.css';
import pdp from './../images/screenshot-pdp.png';
import pfml from './../images/screenshot-pfml.png';

const Projects = () => {
  return (
    <Element className="element">
      <div className="App-section">
        <h1>Professional Work</h1>
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="https://paidleave.mass.gov/">
              <img
                src={pfml}
                alt="A screenshot of the Wayfair product details page."
              />
            </a>
          </div>
          <div className="Project-card--column2">
            <a href="https://paidleave.mass.gov/">
              <h2>MA Paid Family and Medical Leave</h2>
            </a>
            <p>
              From November 2019 to March 2022 I worked on the dedicated product
              details page team at Wayfair, supporting or leading many projects
              - from deprecating the &quot;mweb&quot; version of the page in
              favor of a single responsive layout to converting from working in
              a monolith to owning a fully decoupled and self-deployed webpack
              app.
            </p>
            <p>
              Examples of components I deployed include the cards beneath the
              &quot;What We Offer&quot; header and the review summary block
              containing the numerical average and histogram view of customer
              ratings.
            </p>
          </div>
        </div>
        <div className="Project-card">
          <div className="Project-card--column1">
            <a href="https://www.wayfair.com/furniture/pdp/loon-peak-urbana-1-drawer-iron-nightstand-w002783661.html">
              <img
                src={pdp}
                alt="A screenshot of the Wayfair product details page."
              />
            </a>
          </div>
          <div className="Project-card--column2">
            <a href="https://www.wayfair.com/furniture/pdp/loon-peak-urbana-1-drawer-iron-nightstand-w002783661.html">
              <h2>Wayfair Product Details Page</h2>
            </a>
            <p>
              From November 2019 to March 2022 I worked on the dedicated product
              details page team at Wayfair, supporting or leading many projects
              - from deprecating the &quot;mweb&quot; version of the page in
              favor of a single responsive layout to converting from working in
              a monolith to owning a fully decoupled and self-deployed webpack
              app.
            </p>
            <p>
              Examples of components I deployed include the cards beneath the
              &quot;What We Offer&quot; header and the review summary block
              containing the numerical average and histogram view of customer
              ratings.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
