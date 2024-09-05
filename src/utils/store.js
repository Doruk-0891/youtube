import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import videoSlice from './videoSlice';
import liveMessageSlice from './liveMessageSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        videos: videoSlice,
        liveChat: liveMessageSlice
    }
});

export default store;