import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hey I'm {props.username}</p>
      <p>And I'm happy to help</p>
    </div>
  );
}

export default UserOutput;
