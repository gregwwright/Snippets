import React, { Component } from 'react';
import './App.css';
import {ShallowMerge} from './ShallowMerge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ShallowMerge />
        </header>
      </div>
    );
  }
}

export default App;
