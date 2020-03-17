import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {

  state = {
    username: 'Pepe'
  }

  changedUsernameHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  render() {
    return(
      <div className="App">
      <UserInput changed={this.changedUsernameHandler}></UserInput>
      <br/>
      <br/>
      <UserOutput username={this.state.username}></UserOutput>
      <UserOutput username={this.state.username}></UserOutput>
    </div>
    )
  }

}

export default App;
