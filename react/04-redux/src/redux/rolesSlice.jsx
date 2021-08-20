import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/userApi';

const initialState = {
  roles: [],
  status: "idle",
  error: null
};

export const fetchRoles = createAsyncThunk(
  "roles/fetchRoles",
  async () => {
    const roles = await api.getRoles();
    return roles;
  }
);

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRoles.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRoles.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.roles = state.roles.concat(action.payload);
    }
  }
});

export default rolesSlice.reducer;