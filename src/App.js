import React, { Component } from 'react';
import './App.css';
import Button from "./Button";

// ルーティングの処理を追記(#3)
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ThreeSampleMoji from "./components/ThreeSampleMoji.js";
import ThreeSampleCube from "./components/ThreeSampleCube.js";
import './ThreeSample.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>React.jsはじめました。</h3>
          <Router>
            <Route className="ThreeSampleMoji" path='/ThreeSampleMoji' component={ThreeSampleMoji}/>
            <Route path='/ThreeSampleCube' component={ThreeSampleCube}/>
            <Button linkName="ThreeSampleCube" name="3Dキューブを表示" />
            <Button linkName="ThreeSampleMoji" name="3Dタイトルを表示" />
            <Button linkName="" name="何も表示しない" />
          </Router>
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
