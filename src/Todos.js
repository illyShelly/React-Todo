import React from 'react'

// assign name of component Todos to fce
// accept props here - we have list to loop through by map
// new deleteTodo props add
const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        // react expect unique key around every element inside map
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todos left ;D</p>
  )
  return(
    <div className="todos collection">
      {/* output todo list */}
      {todoList}
    </div>
  )
}

export default Todos