/**
 * App.js
 *
 * Main app file, contains scroll component for navigating between all child components
 * Sid Hackney 2019
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo-proto.png';
import githublogo from './images/ghlogo.png';
import lilogo from './images/linkedinlogo2.png';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import './styles/App.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      skin: 'default'
    };
  }

  // Scroll component functions
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  };

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header--wrapper">
          <div className="App-nav">
            <div className="App-nav--hamburger" onClick={this.toggleMenu.bind(this)}>
              <div className={`${this.state.menuOpen ? 'change' : ''} bar1`} />
              <div className={`${this.state.menuOpen ? 'change' : ''} bar2`} />
              <div className={`${this.state.menuOpen ? 'change' : ''} bar3`} />
            </div>
            <div className="App-logo">
              <img src={logo} alt="My logo: an outlined, teal silhouette of a sea turtle with the letters 'SH' superimposed." />
            </div>
            <div className={this.state.menuOpen ? 'show' : 'hide'}>
              <ul className="App-nav--wrapper">
                <li className="App-nav--item">
                  <Link activeClass="active" to="home" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                    HOME
                  </Link>
                </li>
                <li className="App-nav--item">
                  <Link activeClass="active" to="projects" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                    PROJECTS
                  </Link>
                </li>
                <li className="App-nav--item">
                  <Link activeClass="active" to="resume" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                    RESUME
                  </Link>
                </li>
                <li className="App-nav--item">
                  <Link activeClass="active" to="about" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                    ABOUT ME
                  </Link>
                </li>
              </ul>
            </div>
            <div className="App-header--links">
              <a href="https://github.com/practicalmess">
                <img src={githublogo} alt="The circular logo for Github"/>
              </a>
              <a href="https://www.linkedin.com/in/sidney-j-hackney/">
                <img src={lilogo} alt="The circular logo for LinkedIn"/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="App-body">
          <Home />
          <Projects />
          <Resume />
          <About />
        </div>

        <div className="App-footer">
          <span>Copyright &copy; 2021 Sidney Hackney</span>
        </div>
      </div>
      
    );
  }
}

export default App;
