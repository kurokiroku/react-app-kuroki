import React, { Component } from 'react';
import './App.css';
import Button from "./Button";

// import ThreeSampleMoji from "./components/ThreeSampleMoji.js";
import ThreeSampleCube from "./components/ThreeSampleCube.js";
import './ThreeSample.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>React.jsはじめました。</h3>
          { /* コメントアウト
          <div className="ThreeSampleMoji">
            <ThreeSampleMoji />
          </div>
          */ } 
          <div>
            <ThreeSampleCube />
          </div>
          <Button name="menu1" />
          <Button name="menu2" />
          <Button name="menu3" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
