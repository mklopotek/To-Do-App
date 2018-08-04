import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RenderToDo from './RenderToDo';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact component={RenderToDo} />
        </Router>
      </div>
    );
  }
}

export default App;
