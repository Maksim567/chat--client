import { combineReducers } from '@reduxjs/toolkit'
import rooms from "./slices/rooms"
import messages from "./slices/messages"

export default combineReducers({
    rooms,
    messages
})