import React, { Component } from 'react';
import '../App.css';
import AppMenu from './AppMenu';
import AppApollo from './AppApollo';

class App extends Component {
  render() {
    return (
      <AppApollo>
        <AppMenu />
      </AppApollo>
    );
  }
}

export default App;
