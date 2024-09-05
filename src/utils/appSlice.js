import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true
    }, 
    reducers: {
        toggleMenu: (state, action) => {
            state.isMenuOpen = action.payload === false || action.payload === true ? action.payload : !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export const {toggleMenu, closeMenu} = appSlice.actions;
export default appSlice.reducer;
