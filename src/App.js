import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/aquarium.jpg';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import './styles/App.css';
// import './fontawesome/css/font-awesome.min.css';

class App extends Component {
  state = {
    shown: 'home',
    skin: 'default'
  };

  showHide(section) {
    return {
      top: this.state.shown === section ? '150px' : '-1000px',
      display: this.state.shown === section ? 'block' : 'none'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header--wrapper">
          <div className="App-logo" />
          <div className="App-nav">
            <ul className="App-nav--wrapper">
              <li className="App-nav--item" onClick={() => this.setState({shown: 'home'})}>Home</li>
              <li className="App-nav--item" onClick={() => this.setState({shown: 'projects'})}>Projects</li>
              <li className="App-nav--item" onClick={() => this.setState({shown: 'resume'})}>Resume</li>
              <li className="App-nav--item" onClick={() => this.setState({shown: 'about'})}>About Me</li>
              <li className="App-nav--item" onClick={() => this.setState({shown: 'contact'})}>Contact</li>
            </ul>
          </div>
          <div className="App-header-links"/>
        </div>
        <Home shown={this.state.shown} />
        
        <div className="App-body">
          <About shown={this.state.shown} />
          <Projects shown={this.state.shown} />
          <Resume shown={this.state.shown} />
          <Contact shown={this.state.shown} />
        </div>
      </div>
    );
  }
}

export default App;
