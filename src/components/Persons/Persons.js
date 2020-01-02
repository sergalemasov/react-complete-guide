import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons | getDerivedStateFromProps');

  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons | shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons | getSnapshotBeforeUpdate');

    return null;
  }

  componentDidUpdate() {
    console.log('Persons | componentDidUpdate');
  }

  render() {
    console.log('Persons | render');

    return this.props.persons.map(person => (
      <Person
        key={person.name}
        name={person.name}
        age={person.age}
        changeAge={age => this.props.changeAge(person.name, age)}>
        My hobbies: Racing
      </Person>
    ));
  }
}

export default Persons;
