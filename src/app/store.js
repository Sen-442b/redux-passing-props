import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../app/resultsSlice';


export const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});
