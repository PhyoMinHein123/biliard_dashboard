import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        votes: [],
        totaluser: []
    },
    reducers: {
        uservote: (state, action) => {
            state.votes = action.payload;
            return state;
        },
        totaluser: (state, action) => {
            state.totaluser = action.payload;
            return state;
        },
    },
});

export const { uservote, totaluser } = counterSlice.actions;
export default counterSlice.reducer;