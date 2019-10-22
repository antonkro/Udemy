import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steffi', age: 26 }

    ]
  });
  const [otherState, setOtherState]= useState ('some Other State');

  console.log(otherState,personsState);
  const switchNameHandler = () => {
    // console.log('was clicked');
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Steffi', age: 27 }
      ]
    })
    // DONT DO THIS: this.state.persons[0].name='Maximilian';
  }

  return (
    <div className="App">
      <h1>Hi, i am a React App</h1>
      <p>this is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>

  );
  // return React.createElement('div',null,'h1','Hi, I\'m a React App!!!');
}




export default App;
