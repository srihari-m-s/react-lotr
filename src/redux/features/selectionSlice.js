import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selection: ""
}

export const selectionSlice = createSlice({
    name:"selection",
    initialState,
    reducers:{
        setSelection:(state,action) => {
            state.selection = action.payload;
        }
    }
})

export const { setSelection } = selectionSlice.actions;

export default selectionSlice.reducer;