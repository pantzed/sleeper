import * as React from 'react';
import './profile.css';
import InfoBlock from './InfoBlock.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center mt-3 mb-5">
          <div className="col-11">
            <h2>Welcome, {`${this.props.user.first}!`}</h2>
            <div className="row">
              <div className="col-12">
                <span className="color-peach">
                  Here is where you can find and edit your personal informaiton!
                </span>
              </div>
            </div>
            <InfoBlock title={'Average Sleep Duration'} data={"7.2 hrs"} />
            <InfoBlock title={'Most Recent Sleep Duration'} data={"8.1 hrs"} />
            <InfoBlock title={'Average Productivity'} data={"5"} />
            <InfoBlock title={'Max Productivity'} data={"8"} />
            <InfoBlock title={'Min Productivity'} data={"1"} />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;