import TodosList from './TodosList/TodosList';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import styles from "./Todos.module.css";

function Todos() {
  return (
    <div className={styles.todos}>
      <AddTodoForm />
      <TodosList />
    </div>
  );
}

export default Todos;