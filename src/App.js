import React, { Component } from 'react';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>React Calculator</h1>
        <Calculator />
      </div>
    );
  }
}
