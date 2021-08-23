import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../../../redux/todosSlice';
import styles from "./TodoItem.module.css";

function TodoItem({ text, id, isComleted }) {

  const dispatch = useDispatch();

  const handleTodoDeleteClick = e => {
    dispatch(removeTodo({ id }));
  }
  const handleTodoCompletedClick = e => {
    dispatch(toggleTodo({ id }))
  }

  return (
    <li className={styles.item}>
      <p onClick={handleTodoCompletedClick} style={{ textDecoration: isComleted ? 'line-through' : 'auto' }}>{text}</p>
      <button onClick={handleTodoDeleteClick}>delete</button>
    </li>
  );
}

export default TodoItem;