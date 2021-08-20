import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../../../redux/todosSlice';

function TodoItem({ text, id, isComleted }) {

  const dispatch = useDispatch();

  const handleTodoDeleteClick = e => {
    dispatch(removeTodo({ id }));
  }
  const handleTodoCompletedClick = e => {
    dispatch(toggleTodo({ id }))
  }

  return (
    <li onClick={handleTodoCompletedClick}>
      <span style={{ textDecoration: isComleted ? 'line-through' : 'auto' }}>{text}</span>{" "}
      <button onClick={handleTodoDeleteClick}>delete</button>
    </li>
  );
}

export default TodoItem;