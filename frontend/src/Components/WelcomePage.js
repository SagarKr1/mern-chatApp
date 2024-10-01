import React from 'react';
import Icon from '../image/icon.png';

const WelcomePage = () => {
    return (
        <div className='welcome'>
            <img
                src={Icon}
                alt='logo'
                className='welcome-logo' />
            <p>
                View and text directly to people
                present in the chat Rooms.
            </p>
        </div>
    )
}

export default WelcomePage