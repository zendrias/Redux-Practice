import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem.js/index.js'



export default function TodoList(props) {

  let todos = useSelector(state => state.todos)

  return (
    <div>
      <ul>
        {todos.map(todo => {
          < TodoItem title={todo.title} id={todo.id} completed={todo.completed} key={todo.id} />
        })}
      </ul>
    </div>
  )
}