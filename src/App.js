import React, {useState} from 'react'

function App() {
  // We will need state to keep track of changes in input and list of todos 
  // first state takes care of the input changes
  const [todo, setTodo] = useState('') 
  // second state takes care of the list that will get rendered everytime a new todo is added. Stored in an array because there will be more than one
  const [todos, setTodos] = useState([])

  const handleClickTodo = e => {
    // To avoid adding empty strings into array:
    if (todo === ''){
      return
    }
    e.preventDefault()
    setTodos([...todos, todo])
    // Calling setTodo will clear the state, but due to the one way flow of data, it will only clear the state. We have to connect the value of the input to the state
    setTodo('')

  }

  return (
    <div>
      {/* In the input, the user will enter a todo item. The todo will constantly chnage, so we have to keep track of state and resetting it */}
      <input type="text" onChange={e => {setTodo(e.target.value)}} value={todo}></input>
      {/* When the user adds a todo (by clicking on button), the todo will get saved to the array, added to screen, and clear input field */}
      <button onClick={handleClickTodo}>Add Todo</button>
      {
        todos.map((todo, index) => {
          return (
            <div key={index}>{todo}</div>
          )
        })
      }
    </div>
      
  )
  // I want to go through the array of my todos and display them on the screen

  

}

export default App;
