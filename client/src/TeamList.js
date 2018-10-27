import * as React from 'react';

const TeamList = (props) => {
  let teamList = props.team.map((user, index) => {
    return (
      <div key={index} className="row text-light">
        <div className="col-6">
          <span>{`${user.first} ${user.last}`}</span>
        </div>
        <div className="col-6">
          <span>{`6`}</span>
        </div>
      </div>
    )
  })
  return teamList;
}

export default TeamList;