import React, { useState } from 'react';
import './componentStyle.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItems from './conversationItems';
import {useNavigate} from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector ,useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


const AppBar = () => {
    const dispatch= useDispatch();
    const theme = useSelector((state)=>state.theme);

    // console.log(lightTheme);
    const [Conversation,setConversation] = useState([
        {
            name:"test1",
            lastMessage:"Hello",
            timeStamp:"today"
        },
        {
            name:"test2",
            lastMessage:"Hello jj",
            timeStamp:"today"
        },
        {
            name:"test3",
            lastMessage:"Hello jis",
            timeStamp:"today"
        },
        {
            name:"test1",
            lastMessage:"Hello",
            timeStamp:"today"
        },
        {
            name:"test2",
            lastMessage:"Hello jj",
            timeStamp:"today"
        },
        {
            name:"test3",
            lastMessage:"Hello jis",
            timeStamp:"today"
        },
        {
            name:"test1",
            lastMessage:"Hello",
            timeStamp:"today"
        },
        {
            name:"test2",
            lastMessage:"Hello jj",
            timeStamp:"today"
        },
        {
            name:"test3",
            lastMessage:"Hello jis",
            timeStamp:"today"
        },
        {
            name:"test1",
            lastMessage:"Hello",
            timeStamp:"today"
        },
        {
            name:"test2",
            lastMessage:"Hello jj",
            timeStamp:"today"
        },
        {
            name:"test3",
            lastMessage:"Hello jis",
            timeStamp:"today"
        }
    ]);
    const navigate = useNavigate();

    function Nav(url){
        navigate(url);
    }
    return (
        <div className='appBar'>
            <div className={"bar-header"+(theme?"":" dark")}>
                <div>
                    <IconButton>
                        <AccountCircleIcon className={'icon'+(theme?"":" dark")} />
                    </IconButton>
                </div>

                <div className='mobile-icon'>
                    <IconButton>
                        <QuestionAnswerIcon className={'icon'+(theme?"":" dark")} />
                    </IconButton>
                </div>

                <div>
                    <IconButton onClick={()=>Nav("users")}>
                        <PersonAddIcon className={'icon'+(theme?"":" dark")} />
                    </IconButton>
                    <IconButton onClick={()=>Nav("groups")}>
                        <GroupAddIcon className={'icon'+(theme?"":" dark")} />
                    </IconButton>
                    <IconButton onClick={()=>Nav("createGroup")}>
                        <AddCircleIcon className={'icon'+(theme?"":" dark")} />
                    </IconButton>
                    <IconButton onClick={()=>{
                        // console.log(toggleTheme())
                        dispatch(toggleTheme())
                    }}>
                        {
                            theme && <NightlightIcon className={'icon'+(theme?"":" dark")} />
                        }
                        {
                            !theme && <LightModeIcon className={'icon'+(theme?"":" dark")} />
                        }
                    </IconButton>
                </div>
            </div>
            <div className={'bar-search' +(theme?"":" dark")}>
                <IconButton>
                    <SearchIcon className={'icon'+(theme?"":" dark")} />
                </IconButton>
                <input placeholder='search' className={'search-box' +(theme?"":" dark")} />
            </div>
            <div className={'bar-conversation'+(theme?"":" dark")}>
                {
                    Conversation.map((items,index)=>{
                        return <ConversationItems props={items} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default AppBar