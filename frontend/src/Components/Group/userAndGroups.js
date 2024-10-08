import React, { useState } from 'react';
import '../componentStyle.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence, motion } from "framer-motion";



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
        <AnimatePresence>
            <motion.div 
            className='list-container'
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:1,scale:1}}
            transition={{
                ease:"anticipate",
                duration:0.3
            }}
            >
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
                            return <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.97 }}
                                className='conversation-item list-item'
                                key={index}
                            >
                                <p className='con-icon'>{item.name[0]}</p>
                                <p className='con-title'>{item.name}</p>
                            </motion.div>
                        })
                    }
                </div>

            </motion.div>
        </AnimatePresence>
    )
}

export default UserAndGroups;