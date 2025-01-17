import { createSlice } from "@reduxjs/toolkit";
import { counterPayload } from "./counterPayload";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        tables: [],
        table: null,
        category: [],
        paginateParams: counterPayload.paginateParams,
    },
    reducers: {
        tables: (state, action) => {
            state.tables = action.payload;
            return state;
        },
        category: (state, action) => {
            state.category = action.payload;
            return state;
        },
        setPaginate: (state, action) => {
            state.paginateParams = action.payload;
            return state;
        },
        update: (state, action) => {
            state.table = action.payload;
            return state;
        },
    },
});

export const { tables, setPaginate, category, update } = counterSlice.actions;
export default counterSlice.reducer;