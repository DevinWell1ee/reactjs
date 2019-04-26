import React from 'react'
import Todo from './todo'

const TodoList = ({ todos, onTodoClick, addToDo, setFilter }) => {
  console.log(todos)
  console.log(onTodoClick)
  console.log(addToDo)
  console.log(setFilter)
  return (
    <div>
      <button onClick={() => addToDo('@@@@')}>add todo</button>
      <button onClick={() => setFilter('SHOW_COMPLETED')}>show complete</button>
      <button onClick={() => setFilter('SHOW_ACTIVE')}>show active</button>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
      </ul>
    </div>
  )
}
export default TodoList
