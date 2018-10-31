import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/aquarium.jpg';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import './styles/App.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import './fontawesome/css/font-awesome.min.css';

class App extends Component {
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

  state = {
    skin: 'default'
  };

  render() {
    return (
      <div className="App">
        <div className="App-header--wrapper">
          <div className="App-logo" />
          <div className="App-nav">
            <ul className="App-nav--wrapper">
              <li className="App-nav--item">
                <Link activeClass="active" to="home" smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                  Home
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="projects" smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  Projects
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="resume" smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  Resume
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="about" smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  About Me
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="contact" smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="App-header-links"/>
        </div>
        
        <div className="App-body">
          <Home />
          <Projects />
          <Resume />
          <About />
          <Contact />
        </div>
      </div>
      
    );
  }
}

export default App;
