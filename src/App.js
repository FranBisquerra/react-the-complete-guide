import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

state = {
  persons: [
    {name: 'Max', age: 30},
    {name: 'Fran', age: 29},
    {name: 'Stephanie', age: 26},
  ],
  otherState: 'Some other values'
} 

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {name: name, age: 30},
        {name: 'Fran', age: 29},
        {name: 'Stephanie', age: 27},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 30},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27},
      ]
    })
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi!, I'm a react App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian') }>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Max!')}>My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App;
