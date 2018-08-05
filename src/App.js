import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PaperRefined from './GlobalComponents/PaperRefined'
import ToDo from './ToDo'

class App extends Component {
  render() {
    return (
      <div>
        < MuiThemeProvider >
          <PaperRefined>
            {<ToDo />}
          </PaperRefined>
        </MuiThemeProvider >
      </div>
    );
  }
}

export default App;
