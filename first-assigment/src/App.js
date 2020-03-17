import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {

  state = {
    username: 'Pepe'
  }

  render() {
    return(
      <div className="App">
      <UserOutput username={this.state.username}></UserOutput>
      <UserOutput username={this.state.username}></UserOutput>
    </div>
    )
  }

}

export default App;
