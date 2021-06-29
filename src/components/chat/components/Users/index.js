import React from 'react';
import {List} from "@material-ui/core";
import {map} from "lodash";
import User from "../User";
import {useSelector} from "react-redux";

function Users() {

    const rooms = useSelector((state) => state.rooms.choiseCollection);

    return (
        <>
            <List>
                {
                    (map(rooms, (room, index) =><User room={room} key={index}/>))
                }

            </List>
        </>
    );
}

export default Users;