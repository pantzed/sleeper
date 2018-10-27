import * as React from 'react';
import './profile.css';
import InfoBlock from './InfoBlock.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  render() {
    console.log(this.props.user);
    return (
      <div>
        <div className="row d-flex justify-content-center mt-3 mb-5">
          <div className="col-11">
            <h2>Welcome, {`${this.props.user.first}!`}</h2>
            <h4 className="color-peach">{this.props.user.admin ? `Team Leader` : `Team Member`}</h4>
            <div className="row border-bottom">
              <div className="col-6 pb-3">
                <span>{this.props.user.team_name}</span>
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