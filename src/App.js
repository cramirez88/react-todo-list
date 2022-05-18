import React, {useState} from 'react'

function App() {
  // We will need state to keep track of changes in input and list of todos 
  // first state takes care of the input changes
  const [todo, setTodo] = useState('') 
  // second state takes care of the list that will get rendered everytime a new todo is added. Stored in an array because there will be more than one
  const [todos, setTodos] = useState([])

  return (
    <div>
      {/* In the input, the user will enter a todo item. The todo will constantly chnage, so we have to keep track of state and resetting it */}
      <input type="text" onChange={e => {setTodo(e.target.value)}}></input>
      <button>Add Todo</button>
    </div>
  )


}

export default App;
