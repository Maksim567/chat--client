import React from 'react';
import {map} from "lodash";
import {useSelector} from "react-redux";
import Message from "../Message";

function Messages() {

    const messages = useSelector((state) => state.messages.collection);

    return (
        <>
            {map(messages, (message, index) => <Message key={index} message={message}/>)}
        </>
    );
}

export default Messages;