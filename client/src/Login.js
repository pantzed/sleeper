import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInput(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state),
    })
    .then((res) => res.text())
    .then(text=> JSON.parse(text))
    .then(data => {
      if(data.error) {
        let errorMessage = new Error(data.error);
        return Promise.reject(errorMessage);
      }
      else {
        this.props.activateUser(data[0]);
        this.props.history.push('/profile');
      }
    })
    .catch(error => {
      this.setState({
        loginError: true,
        errorMsg: 'Username does not exist!',
      });
      console.error('error: ', error.message);
    });
  }

  render() {
    return(
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-4 text-center">
          <h3 className="text-light">Login</h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <input name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => this.handleInput(e)}/>
            </div>
            <div className="form-group">
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => this.handleInput(e)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);