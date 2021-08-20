import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/todosSlice';

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
    <div>
      <h2>Add a new todo</h2>
      <form>
        <label htmlFor='todoText'>Todo text:</label>
        <textarea
          name='todoText'
          id='todoText'
          onChange={handleTextChange}
          value={text}
          cols='30'
          rows='1'
        />
        <button onClick={handleSaveTodoClick} type='button' disabled={!canSave}>Save todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;