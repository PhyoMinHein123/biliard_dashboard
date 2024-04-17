import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: "dashboard",
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

export const { uservote, totaluser } = dashboardSlice.actions;
export default dashboardSlice.reducer;