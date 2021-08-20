import { createSlice, nanoid } from '@reduxjs/toolkit';


const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        isComleted: false
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo =>
        todo.id != action.payload.id);
    },
    toggleTodo(state, action) {
      const todo = state.todos.find(todo => todo.id == action.payload.id);
      todo.isComleted = !todo.isComleted;
    }
  }
});

export default todosSlice.reducer;

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export const selectAllTodos = state => state.todos.todos;