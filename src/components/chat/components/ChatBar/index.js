import React from 'react';
import {map} from "lodash";
import {useSelector} from "react-redux";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import {useStyles} from "./style";
import {useTheme} from "@material-ui/core/styles";

function ChatBar() {

    const room = useSelector((state) => state.rooms.roomLoad);
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            {map(room, (roomId, index) =>
                <List key={index}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={roomId.src}/>
                        </ListItemAvatar>
                        <ListItemText primary={roomId.title}/>
                        <ListItemSecondaryAction classes={{ListItemSecondaryAction: classes.ListItemSecondaryAction}}>
                            <Button variant="contained" color="primary"><PhoneIcon/></Button>
                            <Button variant="contained"><VideocamIcon/></Button>
                            <Button variant="contained" color="secondary">
                                ...
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>)}
        </>
    );
}

export default ChatBar;