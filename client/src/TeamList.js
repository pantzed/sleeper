import * as React from 'react';

const TeamList = (props) => {
  let teamList = props.team.map((user, index) => {
    return (
      <div key={index} className="row text-light">
        <div className="col">
          <span>{`${user.first} ${user.last}`}</span>
        </div>
        <div className="col">
          <span className="color-peach">{`${user.sleep_duration}`}</span>
        </div>
        <div className="col">
          {user.prod_est && <span className="color-peach">{`${user.prod_est}`}</span>}
          {!user.prod_est && <span className="color-peach">{`calculating...`}</span>}
        </div>
      </div>
    )
  })
  return teamList;
}

export default TeamList;