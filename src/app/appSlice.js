import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
    windowWidth: 900,
    windowHeight: 500,
    mobileLayout: false,
};

export const appSlice = createSlice({
    name: 'appState',
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

export const { setMobileFalse, setMobileTrue, setWindowHeight, setWindowWidth } = appSlice.actions;

export const selectWindowWidth = (state) => state.appState.windowWidth;
export const selectWindowHeight = (state) => state.appState.windowHeight;
export const selectMobileLayout =  (state) => state.appState.mobileLayout;

export default appSlice.reducer;