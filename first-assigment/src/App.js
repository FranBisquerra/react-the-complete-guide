import React from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

function App() {
  return (
    <div className="App">
      <UserOutput username="Fran"></UserOutput>
      <UserOutput username="Pepe"></UserOutput>
    </div>
  );
}

export default App;
