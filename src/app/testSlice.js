import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    windowWidth: 600,
    windowHeight: 1200,
    mobileLayout: true,
  };

  export const testSlice = createSlice({
    name: 'testState',
    initialState,
    reducers: {
        setWindowWidth: (state, action) => {
            state.windowWidth = action.payload;
            if (state.windowHeight > state.windowWidth || state.windowWidth < 1300) {
                state.mobileLayout = true;
            } else {
                state.mobileLayout = false;
            }
        },
        setWindowHeight: (state, action) => {
            state.windowHeight = action.payload;
            if (state.windowHeight > state.windowWidth || state.windowWidth < 1300) {
                state.mobileLayout = true;
            } else {
                state.mobileLayout = false;
            }
        },
        setMobileTrue: (state) => {
            state.mobileLayout = true;
        },
        setMobileFalse: (state) => {
            state.mobileLayout = false;
        }
    }
});

export const { setMobileFalse, setMobileTrue, setWindowHeight, setWindowWidth } = testSlice.actions;

export default testSlice.reducer;