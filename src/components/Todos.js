import React from 'react'
import  '../App.css'

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

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const completedTask = (check) => {
    if(check === true){
      return 'complete'
    }else {
      return 'notCompleted'
    }
  }
  
  return (
    <div>
      <h1>My todos: </h1>
      {
        todos.map((todo, index) => {
          return(
            
            <div className={completedTask(todo.completed)} key={index}> hello
            <li  className={completedTask(todo.completed)} style={{display: 'inline-block'}} >{todo.task}</li>
            <input  className={completedTask(todo.completed)} style={{display: 'inline-block' }} type={'checkbox'} onClick={() => toggleComplete(todo)}></input>
            <button  className={completedTask(todo.completed)} style={{display: 'inline-block'}} onClick={e => deleteTodo(todo.id)} >Delete</button>
            </div>
            
           
            
           
          )
         
        })
      }
    </div>
  )
}
