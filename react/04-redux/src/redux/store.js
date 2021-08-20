import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import { logger } from 'redux-logger/src';
import usersReducer from './usersSlice';
import rolesReducer from './rolesSlice';

const store = configureStore({
 reducer: {
  todos: todosReducer,
  users: usersReducer,
  roles: rolesReducer
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;