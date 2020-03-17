import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!, I'm a react App</h1>
        <Person name="Max" age="30"/>
        <Person name="Fran" age="29">My hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    )
  }
}

export default App;
