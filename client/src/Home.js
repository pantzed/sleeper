import * as React from 'react';
import Login from './Login.js';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main bg-image">
        <div className="row d-flex justify-content-center">
          <div className="col text-center py-5">
            <h1 className="text-light">Sleeper</h1>
            <h2 className="text-light">The Application for Predicting Productivity</h2>
          </div>
        </div>
        <Login {...this.props} activateUser={this.props.activateUser}/>
      </div>
    )
  }
}

export default Home;