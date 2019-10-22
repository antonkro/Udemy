import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age:28},   
      {name: 'Manu', age:29},
      {name: 'Steffi', age:26}
      
    ]
  }
  
  switchNameHandler = () =>{
    // console.log('was clicked');
    this.setState({persons: [
      {name: "Maximilian", age:28},   
      {name: 'Manu', age:29},
      {name: 'Steffi', age:26}
      
    ]})
    // DONT DO THIS: this.state.persons[0].name='Maximilian';
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>this is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> 
      </div>
      
    );
    // return React.createElement('div',null,'h1','Hi, I\'m a React App!!!');
  }
}

export default App;
