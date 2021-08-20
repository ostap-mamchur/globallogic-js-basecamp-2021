import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/userApi';

const initialState = {
  users: [],
  status: "idle",
  error: null
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users = await api.getUsers();
    return users;
  }
);

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async id => {
    const user = await api.getUser(id);
    return user;
  }
);

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async initialUser => {
    const user = await api.createUser(initialUser);
    return user;
  }
)

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async initialUser => {
    const user = await api.editUser(initialUser);
    return user;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async initialUser => {
    const user = await api.deleteUser(initialUser);
    return user;
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.users = state.users.concat(action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
 /*   [fetchUser.fulfilled]: (state, action) => {

    },*/
    [addNewUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [updateUser.fulfilled]: (state, action) => {
      const { id, username, age, role, timestamp } = action.payload;
      const user = state.users.find(user => user.id == id);
      if (user) {
        user.username = username;
        user.age = age;
        user.role = role;
        user.timestamp = timestamp;
      }
    },
    [deleteUser.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter(user => user.id !== id);
    }
  }
});

export default usersSlice.reducer;