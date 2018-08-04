import React, { Component } from 'react';
import ToDo from './ToDo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PaperRefined from './GlobalComponents/PaperRefined'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <PaperRefined>
          {<ToDo />}
        </PaperRefined>
        </MuiThemeProvider>
    );
  }
}

export default App;
