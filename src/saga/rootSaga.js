import { all } from "redux-saga/effects";
import rooms from "./rooms";
import messages from "./messages";

function* rootSaga() {
    yield all([
        rooms(),
        messages()
    ])
}

export default rootSaga;