import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  return props.persons.map(person => (
    <Person
      name={person.name}
      age={person.age}
      changeAge={age => props.changeAge(person.name, age)}>
      My hobbies: Racing
    </Person>
  ));
}

export default persons;
