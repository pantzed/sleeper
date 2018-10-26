import * as React from 'react';
import './InfoBlock.css';

const InfoBlock = (props) => {
  return (
    <div className="row mt-5">
      <div className="col-4 border rounded border-light p-3">
        <h4 className="text-light">{ props.title }</h4>
        <span className="color-peach">
          { props.data }
        </span>
      </div>
    </div>
  );
}

export default InfoBlock;