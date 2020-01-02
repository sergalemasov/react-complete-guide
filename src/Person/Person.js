import React from 'react';
import './Person.css';

const person = (props) => {
  const onInputChange = (event) => {
    props.changeAge(props.name, event.target.value);
  }

  throw new Error('fqnwekfnqklwefn');

  return <p className="Person">
    I am a {props.name} and I am {props.age} years old. {props.children}
    <input type="text" onChange={onInputChange}/>
  </p>
}

export default person;