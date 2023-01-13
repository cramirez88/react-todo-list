import React, {useState} from "react";

export default function Form(props) {
  const [todo, setTodo] = useState('')
  const {todos, setTodos} = props
  const formHandler = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo('')
    
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        <label>ADD TODOS: </label>
        <input type={'text'} onChange={e => setTodo(e.target.value)} value={todo}></input>
        <button>ADD TODO</button>
      </form>
      
    </div>
  );
  }
  
  
