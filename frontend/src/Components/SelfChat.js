import React from 'react'

const SelfChat = () => {
    var props = {
        name: "you",
        message: "This only for demo",
        lastMessage: "This only for demo"
    }
    return (
        <div className='selfChat'>
            <div className='messageBox'>
                <p>{props.message}</p>
                <p className='self-timeStamp'>12:00PM</p>
            </div>
        </div>
    )
}

export default SelfChat