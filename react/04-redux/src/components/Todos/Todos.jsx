import TodosList from './TodosList/TodosList';
import AddTodoForm from './AddTodoForm/AddTodoForm';

function Todos() {
  return (
    <div>
      <AddTodoForm />
      <TodosList />
    </div>
  );
}

export default Todos;