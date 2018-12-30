import React, { Component } from 'react';
import UserContainer from '../UserContainer/UserContainer';
import TodoContainer from '../TodoContainer/TodoContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <UserContainer />
        <TodoContainer />
      </div>
    )
  }
}

export default App;
