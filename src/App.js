import React, { useState } from 'react';
import Person from './Person/Person';

const App = props => {
  const [state, setState] = useState({
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Fran', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState('other state!!');

  console.log(state, otherState);

  const switchNameHandler = () => {
    setState({
      persons: [
        { name: 'Maximilian', age: 30 },
        { name: 'Fran', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi!, I'm a react App</h1>
      <button type="button" onClick={switchNameHandler}>Switch name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>My hobbies: Racing</Person>
      <Person name={state.persons[2].name} age={state.persons[2].age} />
    </div>
  );
};

export default App;
