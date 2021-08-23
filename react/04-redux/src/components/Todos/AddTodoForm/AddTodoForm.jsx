import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/todosSlice';
import styles from "./AddTodoForm.module.css";

function AddTodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleTextChange = e => setText(e.target.value);
  const canSave = Boolean(text);
  const handleSaveTodoClick = e => {
    dispatch(addTodo({ text }));
    setText("");
  }

  return (
    <div className={styles.formContainer}>
      <h2>Add a new todo</h2>
      <form className={styles.form}>
        <label htmlFor='todoText'>Todo text:</label>
        <div>
          <textarea
            className={styles.todoText}
            name='todoText'
            id='todoText'
            onChange={handleTextChange}
            value={text}
            cols='30'
            rows='1'
          />
        </div>
        <button onClick={handleSaveTodoClick} type='button' disabled={!canSave}>Save todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;