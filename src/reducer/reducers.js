import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    a : 0,
};

export const customReducer = createReducer(initialState, {
    
    increment : (state) => {
        state.a += 1;
    },

    decrement : (state) => {
        state.a -= 1;
    },

    incrementBy25 : (state, action) => {
        state.a += action.payload;
    }
})

 