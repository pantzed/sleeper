import * as React from 'react';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-11">
            <h2>Welcome, {`${this.props.user.first}!`}</h2>
            <div className="row">
              <div className="col-12">
                <span className="color-peach">
                  Here is where you can find and edit your personal informaiton!
                  New text to check that git is working!
                </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;