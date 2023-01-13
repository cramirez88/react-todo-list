import React from 'react'

export default function Todos(props) {
  const {todos, setTodos} = props
  return (
    <div>
      <h1>My todos: </h1>
      {
        todos.map((todo, index) => {
          return(
            <>
           
            <li style={{display: 'inline'}} key={index}>{todo}</li>
            <input  style={{display: 'inline'}} type={'checkbox'}></input>
            <button style={{display: 'inline'}}>Delete</button>
          
         
           
            
            </>
           
          )
         
        })
      }
    </div>
  )
}
