import React, { useState } from 'react';
import '../componentStyle.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const UserAndGroups = () => {
    const [Conversation, setConversation] = useState([
        {
            name: "test1",
            lastMessage: "Hello",
            timeStamp: "today"
        },
        {
            name: "test2",
            lastMessage: "Hello jj",
            timeStamp: "today"
        },
        {
            name: "test3",
            lastMessage: "Hello jis",
            timeStamp: "today"
        },
        {
            name: "test1",
            lastMessage: "Hello",
            timeStamp: "today"
        },
        {
            name: "test2",
            lastMessage: "Hello jj",
            timeStamp: "today"
        },
        {
            name: "test3",
            lastMessage: "Hello jis",
            timeStamp: "today"
        },
        {
            name: "test1",
            lastMessage: "Hello",
            timeStamp: "today"
        },
        {
            name: "test2",
            lastMessage: "Hello jj",
            timeStamp: "today"
        },
        {
            name: "test3",
            lastMessage: "Hello jis",
            timeStamp: "today"
        },
        {
            name: "test1",
            lastMessage: "Hello",
            timeStamp: "today"
        },
        {
            name: "test2",
            lastMessage: "Hello jj",
            timeStamp: "today"
        },
        {
            name: "test3",
            lastMessage: "Hello jis",
            timeStamp: "today"
        }
    ])
    return (
        <div className='list-container'>
            <div className='list-header con-title'>
                <p>Available Groups</p>
            </div>
            <div className='bar-search'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='search' className='search-box' />
            </div>
            <div
                className='list-body'
            >
                {
                    Conversation.map((item, index) => {
                        return <div
                            className='conversation-item list-item'
                            key={index}
                            >
                            <p className='con-icon'>{item.name[0]}</p>
                            <p className='con-title'>{item.name}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default UserAndGroups;