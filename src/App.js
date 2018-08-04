import React, { Component } from 'react';
import ToDo from './ToDo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ToDo />
        </MuiThemeProvider>
    );
  }
}

export default App;
