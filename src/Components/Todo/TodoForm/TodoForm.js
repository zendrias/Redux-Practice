import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../TodoSlice.js'

function TodoForm(props) {

  // Variables 
  const [inputValue, setInputValue] = useState("")
  let dispatch = useDispatch()

  // Event Handlers
  const handleInputChange = (e) => setInputValue(() => e.target.value)

  const handleFormSubmission = (e) => {
    e.preventDefault()
    dispatch(addTodo(inputValue))
  }

  // JSX 
  return (
    <form onSubmit={handleFormSubmission}>
      <input type="text" placeholder="Add Todo" value={inputValue} onChange={handleInputChange} />
      <button type="submit" >Add Todo</button>
    </form>
  );
}

export default TodoForm;