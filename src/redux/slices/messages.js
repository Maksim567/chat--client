import {createSlice} from "@reduxjs/toolkit";
import {concat} from "lodash";

const initialState = {
    collection: [],
    loading: false,
    error: null,
};


const slice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        reset: () => initialState,
        messagesRequested: (state, action) => {
            state.chatroomName = action.payload
            state.loading = true
        },
        messagesSucceeded: (state, action) => {
            state.collection = action.payload.messages
            state.loading = false
        },
        messagesFailed: (state, action) => {
            state.error = action.payload.error
            state.loading = false
        },
        messagesPush: (state, action) => {
            state.collection = concat(state.collection, action.payload)
            state.loading = false
    }

    },
});

export const {reset, messagesRequested, messagesSucceeded, messagesFailed, messagesPush} = slice.actions;

export default slice.reducer;




