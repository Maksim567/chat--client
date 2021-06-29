import {createSlice} from "@reduxjs/toolkit";
import {filter} from "lodash";

const initialState = {
    collection: [],
    choiseCollection: [],
    roomLoad: [],
    loading: false,
    error: null,
};

const slice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        reset: () => initialState,
        roomsRequested: (state, action) => {
            state.loading = true
        },
        roomsSucceeded: (state, action) => {
            state.collection = action.payload.rooms
            state.choiseCollection = state.collection
            state.loading = false
        },
        roomsFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
        roomsFillter: (state, action) => {
            state.choiseCollection = filter(state.collection, action.payload)
            state.loading = false
        },
        roomLoad: (state, action) => {
            state.roomLoad = filter(state.collection, action.payload)
            state.loading = false
        },
    },
});

export const { reset, roomsRequested, roomsSucceeded, roomsFailed, roomsFillter, roomLoad} = slice.actions;

export default slice.reducer;
