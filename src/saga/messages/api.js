import {filter} from "lodash";

const rooms =
    [
        {
            id: '1', name: "Maksim", messageText: 'test', createAt: '12:40',
        },
        {
        id: '1', name: "Maksim", messageText: 'test', createAt: '12:02',
    }, {
        id: '1', name: "Maksim", messageText: 'test', createAt: '12:01',
    },
        {id: '2', name: "Oleg", messageText: 'test1', createAt: '12:03'},
        {id: '3', name: "test", messageText: 'test2', createAt: '12:05'}
    ]

const fetchMessages = (example) => (filter(rooms, example))

export {fetchMessages}