import React, { Component } from 'react';
import './App.css';
import Persons from 'components/Persons/Persons';
import Cockpit from 'components/Cockpit/Cockpit';
import withClass from 'hoc/WithClass';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    persons: [
      {
        name: 'Max',
        age: 16
      },
      {
        name: 'Manu',
        age: 20
      },
      {
        name: 'Stephanie',
        age: 32
      }
    ],
    shouldShowPersons: true
  };

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  changeAgeHandler = (name, age) => {
    const persons = this.state.persons.map(person => person.name === name
      ? {
        ...person,
        age
      }
      : person);

    this.setState({persons});
  }

  togglePersons = () => {
    this.setState({shouldShowPersons: !this.state.shouldShowPersons});
  }

  render() {
    const persons = this.state.shouldShowPersons
      ? <Persons persons={this.state.persons} changeAge={this.changeAgeHandler}></Persons>
      : null;

    return (
        <div>
          <Cockpit tooglePersons={this.togglePersons}>
            {persons}
          </Cockpit>
        </div>
    );
  }
}

export default withClass(App, 'App');
