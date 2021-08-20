import { useSelector } from 'react-redux';
import { selectAllTodos } from '../../../redux/todosSlice';
import TodoItem from './TodoItem/TodoItem';

function TodosList() {
  const todos = useSelector(selectAllTodos);

  const renderedTodo = todos.map(todo => (
    <TodoItem key={todo.id} {...todo} />
  ));

  return (
    <ul>{renderedTodo}</ul>
  );
}

export default TodosList;