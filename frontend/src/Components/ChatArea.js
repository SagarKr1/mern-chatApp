import React from 'react';
import './componentStyle.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import OtherChat from './OtherChat';
import SelfChat from './SelfChat';

const ChatArea = () => {
    return (
        <div className='chatArea'>
            <div className='chat-header'>
                <p className='con-icon'>
                    t
                </p>
                <div className='header-text'>
                    <p className='con-title'>Test</p>
                    <p className='con-timeStamp'>Online</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className='chat-body'>
                <OtherChat/>
                <SelfChat/>

                <OtherChat/>
                <SelfChat/>

                <OtherChat/>
                <SelfChat/>

                <OtherChat/>
                <SelfChat/>
            </div>
            <div className='chat-input' >
                <input
                    placeholder='Type your message here'
                    className='search-box'
                    style={{
                        width:"80%"
                    }}
                />
                <IconButton>
                    <SendIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea;