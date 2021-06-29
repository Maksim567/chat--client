import React, {useEffect} from 'react';
import Main from "../Main";
import {useDispatch} from "react-redux";
import {roomsRequested} from "../../../../redux/slices/rooms";

function ChatComponent() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(roomsRequested())
    }, [dispatch]);

    return (
        <>
            <h1>Chat</h1>
            <Main/>
        </>
    );
}

export default ChatComponent;