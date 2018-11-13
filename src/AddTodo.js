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
    // pass props with addTodo function to update state
    event.preventDefault();
    // console.log(this.state);
    this.props.addTodo(this.state);
    // to empty input after submitted
    // and emptied rendered input as well 'html'
    this.setState({
      content: ''
    })
  }
  render(){
    return(
      <div>
        {/* to enter or press button */}
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          {/* onChange handler controll when text in this field changes */}
          {/* value={this.state.content} to emptied the field */}
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTodo