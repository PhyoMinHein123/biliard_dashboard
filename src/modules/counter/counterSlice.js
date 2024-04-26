import { createSlice } from "@reduxjs/toolkit";
import { counterPayload } from "./counterPayload";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        tables: [],
        paginateParams: counterPayload.paginateParams,
    },
    reducers: {
        tables: (state, action) => {
            state.tables = action.payload;
            return state;
        },
        setPaginate: (state, action) => {
            state.paginateParams = action.payload;
            return state;
        },
    },
});

export const { tables, setPaginate } = counterSlice.actions;
export default counterSlice.reducer;