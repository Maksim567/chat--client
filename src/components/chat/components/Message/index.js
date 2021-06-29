import React from 'react';

function Message({message}) {

    let isSentByCurrentUser = false;

    if (message.id === '4') {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <>
                  1
                </>
            ): (
                <>
                2
                </>
            )
    );
}

export default Message;