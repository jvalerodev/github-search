import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    count: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setCount: (state, action) => {
      state.count = action.payload
    },
  }
});

export const { setUsers, setCount } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectCount = (state) => state.users.count;

export default usersSlice.reducer;