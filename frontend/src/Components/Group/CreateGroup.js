import React from 'react';
import '../componentStyle.css';
import { IconButton } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const CreateGroup = () => {
    return (
        <div className='create-group'>
            <input
            placeholder='Enter Group Name'
            className='search-box'
            />
            <IconButton>
                <DoneOutlineIcon/>
            </IconButton>
        </div>
    )
}

export default CreateGroup;