import React from 'react'

const OtherChat = () => {
    var props = {
        name: "OtherUser",
        message: "This only for demo",
        lastMessage: "This only for demo"
    }
    return (
        <div className='OtherChat'>
            <div className='other-container'>
                <p className='con-icon'>{props.name[0]}</p>
                <div className='other-message'>
                    <p className='con-title chat-icon'>{props.name}</p>
                    <p className='con-lastMessage'>{props.lastMessage}</p>
                    <p className='self-timeStamp'>12:00PM</p>
                </div>
            </div>
        </div>
    )
}

export default OtherChat