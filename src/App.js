import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'code in React'}
    ]
  }
deleteTodo = (id) => {
  // console.log(id);
  const filtertodos = this.state.todos.filter(todo => {
    // true if we want to keep in an Array, false if remove it
    // not equal (true) then stay in new filtered array
    return todo.id !== id
  });
  // new array to set to new state
  this.setState({
    todos: filtertodos
  })
}
addTodo = (newtodo) => {
    newtodo.id = Math.random();
    // new array from old one with spread operator and added new item
    let newtodos = [...this.state.todos, newtodo];
    this.setState({
      todos: newtodos
    })
}
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        {/* import other component with some props with property from state */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App