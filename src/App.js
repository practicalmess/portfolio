import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/aquarium.jpg';
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
                <Link activeClass="active" to="home" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                  Home
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="projects" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                  Projects
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="resume" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                  Resume
                </Link>
              </li>
              <li className="App-nav--item">
                <Link activeClass="active" to="about" smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                  About Me
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
        
        <div className="App-body">
          <Home />
          <Projects />
          <Resume />
          <About />
        </div>

        <div className="App-footer">
          <span>Copyright &copy; 2019 Sidney Hackney</span>
        </div>
      </div>
      
    );
  }
}

export default App;
