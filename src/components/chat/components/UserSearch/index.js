import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {roomsFillter, roomsRequested} from "../../../../redux/slices/rooms";
import {InputBase} from "@material-ui/core";

function UserSearch() {

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    function handleChange(e) {
        setInputValue(e.target.value)
        if (e.target.value == '') {
            dispatch(roomsRequested())
        } else {
            dispatch(roomsFillter({title: e.target.value}))
        }
    }

    return (
        <>
            <InputBase
                type="text"
                placeholder="  search…"
                inputProps={{'aria-label': 'search'}}
                fullWidth
                value={inputValue}
                onChange={handleChange}
            />
        </>
    );
}

export default UserSearch;