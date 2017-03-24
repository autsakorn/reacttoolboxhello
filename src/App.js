import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">

        </p>
        <Button raised primary>This is RT!!</Button>
        <TimePicker />
      </div>
    );
  }
}

export default App;
