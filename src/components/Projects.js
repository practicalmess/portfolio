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
import mancats from './../images/screenshot-manage-cats.png';

const Projects = () => {
  return (
    <Element className="element" name="resume">
      <div className="App-section">
        <h1>Professional Experience</h1>
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
            <h2>Front End Developer</h2>
            <h4>FOCUS CONSULTING, LLC | Aug 2022 – Aug 2023</h4>
            <a href="https://paidleave.mass.gov/">
              <h3>Massachusetts Paid Family and Medical Leave (PFML)</h3>
            </a>

            <p>
              I was hired as a frontend developer but ended up contributing both
              frontend and backend code as part of a scrum team responsible for
              the Massachusetts Paid Family and Medical Leave (PFML) website.
            </p>
            <ul>
              <li>
                Developed, documented, and implemented a new frontend code
                pattern, including presenting to key stakeholders, streamlining
                development of contextual content and conditional routing
                resulting in both a simpler developer experience and a more
                clear end user experience
              </li>
              <li>
                Developed and wrote the technical roadmap for an initiative
                enabling users to receive legal notices and email notifications
                in their preferred language, enhancing user accessibility and
                engagement
              </li>
              <li>
                Streamlined daily job processes by refactoring Python scripts,
                resulting in the removal of over 500 lines of redundant code
              </li>
              <li>
                Took ownership of a critical frontend update, delivering timely
                React.js code updates, conducting live demos for stakeholders
                from various disciplines, and overseeing ticketing and follow-up
                tasks
              </li>
            </ul>
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
            <h2>Software Engineer II</h2>
            <h4>WAYFAIR LLC BOSTON, MA | Nov 2019 – Feb 2022</h4>
            <a href="https://www.wayfair.com/furniture/pdp/loon-peak-urbana-1-drawer-iron-nightstand-w002783661.html">
              <h3>Product Details Page</h3>
            </a>
            <p>
              From November 2019 to March 2022 I worked on the dedicated product
              details page team at Wayfair, supporting or leading many projects
              - from deprecating the &quot;mweb&quot; version of the page in
              favor of a single responsive layout to converting from working in
              a monolith to owning a fully decoupled and self-deployed webpack
              app.
            </p>
            <ul>
              <li>
                Served as an on-call engineer, ensuring prompt response to
                stability and performance incidents during both regular and
                off-hours
              </li>
              <li>
                Oversaw multiple A/B tests of new user-facing features as
                engineering lead, planning and delegating the entire lifecycle
                from initial research to implementation and ongoing support
              </li>
              <li>
                Acted as the team&apos;s &quot;stability captain,&quot; taking
                ownership of critical aspects of the application such as real
                time error monitoring and alerting, documentation, test
                coverage, and code quality
              </li>
            </ul>
          </div>
        </div>
        <div className="Project-card">
          <div className="Project-card--column1">
            <img
              src={mancats}
              alt="A screenshot of the category browse dropdown on the modern Wayfair homepage."
            />
          </div>
          <div className="Project-card--column2">
            <h2>Software Engineer</h2>
            <h4>WAYFAIR LLC BOSTON, MA | Oct 2016 – Oct 2017</h4>
            <h3>Merchandising Tools</h3>
            <p>
              After completing the Wayfair Labs program I collaborated on
              developing and maintaining custom internal tools for the
              merchandising department, including a major refactoring of the
              Category Management tool using React.js
            </p>
            <ul>
              <li>
                Regularly pushed code to a monolithic codebase for custom
                internal tools in the merchandising department
              </li>
              <li>
                Independently created a comprehensive Department Management tool
                using PHP and Wayfair&apos;s in-house Javascript framework
              </li>
              <li>
                Recognized for the success of the Department Management tool,
                which was selected as the educational example for new hires
                participating in the Wayfair Labs program to understand the
                company&apos;s unique MVC framework
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
