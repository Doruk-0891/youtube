import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videoData',
    initialState: {
        videosList: []
    },
    reducers: {
        setVideosList: (state, action) => {
            state.videosList = [...action.payload];
        },
        clearVideosList: (state) => {
            state.videosList = [];
        }
    }
});

export const {setVideosList, clearVideosList} = videoSlice.actions;

export default videoSlice.reducer;