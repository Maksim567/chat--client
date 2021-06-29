import { takeLatest, call, put } from "redux-saga/effects";
import {messagesFailed, messagesRequested, messagesSucceeded} from "../../redux/slices/messages";
import {fetchMessages} from "./api";


function* messagesRequest(state) {
    try {
        const response = yield call(fetchMessages, state.payload);
        yield put(messagesSucceeded({ messages: response}));
    } catch (error) {
        yield put(messagesFailed({ error }));
    }
}

function* messages() {
    yield takeLatest(messagesRequested, messagesRequest);
}

export default messages;