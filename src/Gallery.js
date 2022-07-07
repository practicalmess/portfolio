/**
 * Gallery.js
 *
 * Hero display section
 * Sid Hackney 2019
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./styles/App.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="Card-wrapper">
      <img src={project.imgSrc} alt={project.imgAltText} />
      <div className="Card-caption">{project.caption}</div>
    </div>
  );
};

const ProjectPreview = (props) => {
  const { projectName, projectDesc, projectImg, projectSrc } = props;
  return (
    <div className="Modal">
      <h1>{projectName}</h1>
      <img src={props.imgSrc} alt={props.imgAltText} />
      <p>{projectDesc}</p>
      <div className="Links">
        <button>View Live</button>
        <button className={!!projectSrc ? "" : "noSource"}>Source Code</button>
      </div>
    </div>
  );
};

const Gallery = (props) => {
  return (
    <Element name="Gallery" className="element">
      <div className="App-section">
        <h1>Past Work</h1>
        <div className="Gallery-wrapper">
          {props.projects.map((project) => {
            <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </Element>
  );
};

export default Gallery;
