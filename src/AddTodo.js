import React, { Component } from 'react'
import Todos from './Todos';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit = (event) => {
    // do not let page submited and refresh page
    // need function in Todos.js to handle change
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
      <div>
        {/* to enter or press button */}
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          {/* onChange handler controll when text in this field changes */}
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default AddTodo