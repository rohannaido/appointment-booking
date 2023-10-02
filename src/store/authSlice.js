import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: "",
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.value;

export default authSlice.reducer;
