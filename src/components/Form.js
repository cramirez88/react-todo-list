import React, {useState} from "react";
import '../styles/Form.css'

export default function Form(props) {
  const [todo, setTodo] = useState('')
  const {todos, setTodos} = props

  const submitHandler = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo('')
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <label>TODO</label>
        <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo}></input>
        <button>Add</button>
      </form>
    </div>
  );
  }
  
  
