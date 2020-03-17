import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
    {name: 'Max', age: 30},
    {name: 'Fran', age: 29},
    {name: 'Stephanie', age: 26},
  ],
  otherState: 'Some other values'
} 

switchNameHandler = () => {
  this.setState({
    persons: [
      {name: 'Maximilian', age: 30},
      {name: 'Fran', age: 29},
      {name: 'Stephanie', age: 27},
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi!, I'm a react App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App;
