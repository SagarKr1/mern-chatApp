import React from 'react';
import './componentStyle.css';
import {useNavigate} from "react-router-dom";


const ConversationItems = ({props}) => {
    const navigate = useNavigate();
    function Nav(url){
        navigate(url);
    }
    return (
        <div className='conversation-item' onClick={()=>Nav("chat")}>
            <p className='con-icon'>{props.name[0]}</p>
            <p className='con-title'>{props.name}</p>
            <p className='con-lastMessage'>{props.lastMessage}</p>
            <p className='con-timestamp'>{props.timeStamp}</p>
        </div>
    )
}

export default ConversationItems