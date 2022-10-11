import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../TodoSlice.js'

export default function TodoItem({ title, id, completed }) {
  let dispatch = useDispatch()

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id))
  }

  const handleToggleComplete = () => {
    dispatch(toggleComplete(id))
  }

  return (
    <li>
      <h3>{title}</h3>
      <button onClick={() => handleToggleComplete()}></button>
      <button onClick={() => handleDeleteTodo()}></button>
    </li>
  )
}