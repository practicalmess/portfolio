import React from "react";
import logo from "../images/logo-proto.png";
import githublogo from "../images/ghlogo.png";
import lilogo from "../images/linkedinlogo2.png";
import "../processed-styles/App.css";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

interface NavProps {
  isOpen: boolean;
  toggleMenu: () => null;
}

const Nav = ({ isOpen, toggleMenu }: NavProps) => {
  return (
    <div className="App-nav">
      <div className="App-nav--hamburger" onClick={toggleMenu}>
        <div className={`${isOpen ? "change" : ""} bar1`} />
        <div className={`${isOpen ? "change" : ""} bar2`} />
        <div className={`${isOpen ? "change" : ""} bar3`} />
      </div>
      <div className="App-logo">
        <img
          src={logo}
          alt="My logo: an outlined, teal silhouette of a sea turtle with the letters 'SH' superimposed."
        />
      </div>
      <div className={isOpen ? "show" : "hide"}>
        <ul className="App-nav--wrapper">
          <li className="App-nav--item">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li className="App-nav--item">
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li className="App-nav--item">
            <Link
              activeClass="active"
              to="resume"
              smooth={true}
              offset={-70}
              duration={500}
            >
              RESUME
            </Link>
          </li>
          <li className="App-nav--item">
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT ME
            </Link>
          </li>
        </ul>
      </div>
        <div className="App-header--links">
          <a href="https://github.com/practicalmess">
            <img src={githublogo} alt="The circular logo for Github" />
          </a>
          <a href="https://www.linkedin.com/in/sidney-j-hackney/">
            <img src={lilogo} alt="The circular logo for LinkedIn" />
          </a>
        </div>
    </div>
  );
};

export default Nav;
