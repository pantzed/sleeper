import * as React from 'react';
import './InfoBlock.css';

const InfoBlock = (props) => {
  return (
    <div className="row mt-1">
      <div className="col p-1 pl-3">
        <span className="text-light">{ `${props.title}:` }</span>
        <span className="color-peach pl-2">
          { props.data }
        </span>
      </div>
    </div>
  );
}

export default InfoBlock;