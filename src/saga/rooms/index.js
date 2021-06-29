import { takeLatest, call, put } from "redux-saga/effects";
import {roomsFailed, roomsRequested, roomsSucceeded} from "../../redux/slices/rooms";
import {fetchRooms} from "./api";


function* roomsRequest() {
    try {
        const response = yield call(fetchRooms);
        yield put(roomsSucceeded({ rooms: response}));
    } catch (error) {
        yield put(roomsFailed({ error }));
    }
}

function* rooms() {
    yield takeLatest(roomsRequested, roomsRequest);
}

export default rooms;
