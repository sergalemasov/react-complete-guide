import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
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

  changeAgeHandler = (name, age) => {
    const persons = this.state.persons.map(person => person.name === name
      ? {
        ...person,
        age
      }
      : person);

    this.setState({persons});
  }

  tooglePersons = () => {
    this.setState({shouldShowPersons: !this.state.shouldShowPersons});
  }

  render() {
    const persons = this.state.shouldShowPersons
      ? this.state.persons.map(person =>
          <ErrorBoundary key={person.name}>
            <Person
              name={person.name}
              age={person.age}
              changeAge={this.changeAgeHandler}>
              My hobbies: Racing
            </Person>
          </ErrorBoundary>
        )
      : null;

    return (
      <div className="App">
        <h1>I am a React App</h1>
        <button onClick={this.tooglePersons}>Toggle</button>
        { persons }
      </div>
    );
  }
}

export default App;
