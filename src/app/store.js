import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import appStateReducer from './appSlice'

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    counter: counterReducer,
  },
});
