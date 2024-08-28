import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videoData',
    initialState: {
        videosList: []
    },
    reducers: {
        setVideosList: (state, action) => {
            state.videosList = Array.from(action.payload);
        }
    }
});

export const {setVideosList} = videoSlice.actions;

export default videoSlice.reducer;