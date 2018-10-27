import * as React from 'react';
import InfoBlock from './InfoBlock.js';
import TeamList from './TeamList.js';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
    };
  }

  componentDidMount() {
    if (this.props.user.admin) {
      fetch(`/teams/${this.props.user.team_id}`, {
        method: 'GET', 
        mode: 'cors',
        redirect: "follow",
        referrer: "no-referrer"
      })
      .then(res => res.text())
      .then(text => JSON.parse(text))
      .then((data) => {
        this.setState({
          team: data,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center mt-3 mb-5">
          <div className="col-11">
            <h2>Welcome, {`${this.props.user.first}!`}</h2>
            <h4 className="text-light">Role: <span className="color-peach">{this.props.user.admin ? `Team Leader` : `Team Member`}</span></h4>
            <h4 className="text-light">Team: <span className="color-peach">{this.props.user.team_name}</span></h4>
              {this.state.team && this.props.user.admin &&
              <div className="row mt-5">
                <div className="col-6"> 
                  <h4 className="color-blue">Team Status</h4>
                  <div className="row mb-2 text-light">
                    <div className="col-6">
                      <span className="font-weight-bold">Name</span>
                    </div>
                    <div className="col-6">
                      <span className="font-weight-bold">Productivity Est.</span>
                    </div>
                  </div>
                  <TeamList team={this.state.team} self={this.props.user.id} />
                </div>
              </div>
              }
              <div className="row mt-5">
                <div className="col-6">
                  <h4 className="color-blue">My Stats</h4>
                  <InfoBlock title={'Average Sleep Duration'} data={"7.2 hrs"} />
                  <InfoBlock title={'Most Recent Sleep Duration'} data={"8.1 hrs"} />
                  <InfoBlock title={'Average Productivity'} data={"5"} />
                  <InfoBlock title={'Max Productivity'} data={"8"} />
                  <InfoBlock title={'Min Productivity'} data={"1"} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Profile;