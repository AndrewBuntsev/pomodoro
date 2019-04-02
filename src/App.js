import React, { Component } from 'react';
import {Provider} from 'react-redux';

import './App.css';
import {store} from './store';
import Timer from './components/Timer';
import ControlPanel from './components/ControlPanel';

const headerStyle = {
  color: '#AADDAA',
  fontSize: '90px',
  fontWeight: 'bold',
  fontFamily: 'Arial',
  margin: 'auto',
  marginTop: '20%',
  marginBottom: '20px',
  textAlign: 'center' 
};

const statusStyle = {
  color: '#FFFFFF',
  fontSize: '30px',
  fontWeight: 'bold',
  fontFamily: 'Arial',
  margin: 'auto',
  marginBottom: '20px',
  textAlign: 'center' 
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={headerStyle}>Pomodoro Clock</div>
        <Timer></Timer>
        <div style={statusStyle} id='timer-label'>Session</div>
        <ControlPanel></ControlPanel>
      </Provider>
    );
  }
}

export default App;
