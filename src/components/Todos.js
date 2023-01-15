import React from 'react'

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
  return (
    <div>
      <h1>My todos: </h1>
      {
        todos.map((todo, index) => {
          return(
            
            <div key={index}>
            <li style={{display: 'inline'}} >{todo.task}</li>
            <input  style={{display: 'inline'}} type={'checkbox'} onClick={() => toggleComplete(todo)}></input>
            <button style={{display: 'inline'}} onClick={e => deleteTodo(todo.id)} >Delete</button>
            </div>
            
            
           
          )
         
        })
      }
    </div>
  )
}
