import React from 'react';
import {Grid} from "@material-ui/core";
import ChatBar from "../ChatBar";
import Messages from "../Messages";
import SendMessageForm from "../SendMessageForm";
import {useSelector} from "react-redux";

function ChatField() {

    const room = useSelector((state) => state.rooms.roomLoad);
    let CurrentUser = false;

    if (room.length != 0) {

        CurrentUser = true;
    }

    return (
        CurrentUser
            ? (<>
                    <ChatBar/>
                    <Messages/>
                    <SendMessageForm/>
                </>
            ) :
            (<Grid></Grid>)

    );
}

export default ChatField;