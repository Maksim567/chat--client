import React from 'react';
import {useDispatch} from "react-redux";
import {messagesRequested} from "../../../../redux/slices/messages";
import {roomLoad} from "../../../../redux/slices/rooms";
import {Avatar, Badge, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";

function User({room}) {

    const dispatch = useDispatch();

    const loadMessage = (id) => dispatch(messagesRequested(id))
    const loadUser = (id) => dispatch(roomLoad(id))

    function status() {
        if (room.is_status === true) {
            return (<>
                    <small>online</small>
                </>
            )
        } else {
            return (<>
                <small>offline</small>
            </>)
        }
    }

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <>
            <ListItemLink onClick={() => {
                loadMessage({id: room.id})
                loadUser({id: room.id})
            }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={room.src}/>
                </ListItemAvatar>
                <ListItemText primary={room.title} secondary={status()}/>
                <ListItemSecondaryAction>
                    <Badge
                        badgeContent={room.badgeContent}
                    >
                    </Badge>
                </ListItemSecondaryAction>
            </ListItemLink>
        </>
    );
}

export default User;