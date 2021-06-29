import React, {useState} from 'react';
import {Button, InputBase} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {messagesPush} from "../../../../redux/slices/messages";

function SendMessageForm() {

    const [Message, setMessage] = useState('');
    const roomLoad = useSelector((state) => state.rooms.roomLoad);
    const dispatch = useDispatch();

    function handleSubmit(e) {

        if (Message === '' || roomLoad.length === 0) {
            return e.preventDefault();
        } else {
            dispatch(messagesPush({
                id: '4',
                messageText: Message,
                createAt: '14:00'
            }))

            setMessage('')
            e.preventDefault();
        }

    }

    function handleChange(e) {
        setMessage(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputBase type="text" placeholder="Type your message" fullWidth
                           value={Message}
                           onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">Send
                </Button>
            </form>
        </>
    );
}

export default SendMessageForm;