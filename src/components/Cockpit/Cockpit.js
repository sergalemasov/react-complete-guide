import React from 'react';

const cockpit = (props) => (
  <React.Fragment>
    <h1>I am a React App</h1>
    <button onClick={props.tooglePersons}>Toggle</button>
    {props.children}
  </React.Fragment>
);

export default cockpit;
