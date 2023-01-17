import React from 'react'
import '../styles/Todos.css'

export default function Todos(props) {
  const {todos, setTodos} = props
  return (
    <div>
      {
        todos.map((todo, index) => {
          return (
            <li key={index}>{todo}</li>
          )
        })
      }
    </div>
  )
}
