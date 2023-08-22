import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from './features/selectionSlice'; 

export const store = configureStore({
    reducer:{
        selection: selectionReducer,
    },
})