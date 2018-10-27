import React, { Component } from 'react';
import Home from './Home.js';
import Profile from './Profile.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      activeUser: {first: "Ed", last: "Pantzar"},
      team: null,
    }
    this.activateUser = this.activateUser.bind(this);
  }

  activateUser(data) {
    this.setState({
      activeUser: data,
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => (
              <Home {...props} user={this.state.activeUser} activateUser={this.activateUser}/>
            )}/>
            <Route path='/profile' render={(props) => (
              <Profile {...props} user={this.state.activeUser}/>
            )}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
