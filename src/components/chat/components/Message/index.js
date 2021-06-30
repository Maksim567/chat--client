import React from 'react';
import {Avatar, Grid} from "@material-ui/core";

function Message({message}) {

    let isSentByCurrentUser = false;

    if (message.id === '4') {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <Grid container>
                    <Grid>
                        <span>You</span>
                        <div>{message.messageText}</div>
                    </Grid>
                    <Grid>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <span>{message.createAt}</span>
                    </Grid>
                </Grid>
            ): (
                <Grid container>
                    <Grid>
                        <span>{message.name}</span>
                        <div>{message.messageText}</div>
                    </Grid>
                    <Grid>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <span>{message.createAt}</span>
                    </Grid>
                </Grid>
            )
    );
}

export default Message;