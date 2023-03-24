import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import appStateReducer from './appSlice';
import testStateReducer from './testSlice';

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    counter: counterReducer,
  },
});




export const testStore = configureStore({
  reducer: {
    appState: testStateReducer,
  }
});