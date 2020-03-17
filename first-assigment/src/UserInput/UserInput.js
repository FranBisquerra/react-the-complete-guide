import React from 'react';

const style = {
  margin: 'auto',
  borderRadius: '3px',
  border: '2px solid rgb(206, 205, 205)',
  width: '40%',
  padding: '15px'
}

const UserInput = (props) => {
  return (
    <div>
      <input 
        type="text"
        style={style}
        onChange={props.changed}
        value={props.username}></input>
    </div>
  );
}

export default UserInput;
