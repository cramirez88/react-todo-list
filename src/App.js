import React, { useState } from 'react'
import Form from './components/Form';
import Todos from './components/Todos'


function App() {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </div>
      
  )
 

  

}

export default App;
