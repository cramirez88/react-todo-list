import React from 'react'
import '../styles/Todos.css'

export default function Todos(props) {
  const {todos, setTodos} = props

  const toggleComplete = (todo) => {
   if(todo.completed === false){
    todo.completed = true
   }else {
    todo.completed = false
   }
   setTodos([...todos])
  }

  const lineThroughTodos = (todo) => {
    if(todo.completed === true){
      return 'completed'
    }else {
      return 'notCompleted'
    }
  }

  const deleteTodos = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    )
  }
  return (
    <div>
      {
        todos.map((todo, index) => {
          return (
            <div key={index} className='parentDiv' >
              <div className='contentDiv '>   
              <li className={lineThroughTodos(todo)}>{todo.todo}</li>
               <input type='checkbox' onChange={() => toggleComplete(todo)}></input>
               <button onClick={() => deleteTodos(todo.id)}>Delete</button>
              </div>
            </div>
           
          )
        })
      }
    </div>
  )
}
