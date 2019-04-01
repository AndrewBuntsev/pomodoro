import React, { Component } from 'react';
import {Provider} from 'react-redux';

import './App.css';
import {store} from './store';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Clock></Clock>
      </Provider>
    );
  }
}

export default App;
