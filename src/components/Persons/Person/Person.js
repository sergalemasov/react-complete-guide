import React, { Component } from 'react';
import styles from './Person.module.css';

class Person extends Component {
  render() {
    return (
      <p className={styles.Person}>
        I am a {this.props.name} and I am {this.props.age} years old. {this.props.children}
        <input type="text" onChange={event => this.props.changeAge(event.target.value)}/>
      </p>
    );
  }
}

export default Person;
