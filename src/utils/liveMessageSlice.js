import { createSlice } from "@reduxjs/toolkit";

const liveMessage = createSlice({
    name: 'liveMessage',
    initialState: {
        liveChats: []
    },
    reducers: {
        addLiveMessages: (state, action) => {
            state.liveChats.splice(25, 1)
            state.liveChats.unshift(action.payload)
        }
    }
});


export const {addLiveMessages} = liveMessage.actions;

export default liveMessage.reducer;