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
  return (
    <div>
      {
        todos.map((todo, index) => {
          return (
            <div key={index} className='parentDiv'>
              <div className='contentDiv'>   
              <li >{todo.todo}</li>
               <input type='checkbox' onChange={() => toggleComplete(todo)}></input>
               <button>Delete</button>
              </div>
            </div>
           
          )
        })
      }
    </div>
  )
}
