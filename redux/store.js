import { configureStore } from '@reduxjs/toolkit';
import featuredReducer from './featuredSlice'

export const store = configureStore({
  reducer: {
    featured:featuredReducer
  },
});