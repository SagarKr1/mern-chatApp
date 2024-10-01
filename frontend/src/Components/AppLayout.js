import React from 'react';
import './componentStyle.css';
import AppBar from './AppBar';
import ChatArea from './ChatArea';
import WelcomePage from './WelcomePage';
import CreateGroup from './Group/CreateGroup';
import UserAndGroups from './Group/userAndGroups';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='main'>
            <AppBar/>
            <Outlet/>
            {/* <UserAndGroups/> */}
            {/* <CreateGroup/> */}
            {/* <WelcomePage/> */}
            {/* <ChatArea/> */}
        </div>
    )
}

export default AppLayout