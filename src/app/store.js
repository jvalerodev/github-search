import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import loadingReducer from '../features/loadingSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loading: loadingReducer
  }
});