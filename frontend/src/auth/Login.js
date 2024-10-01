import React from 'react';
import './auth.css';
import Icon from '../image/icon.png';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    return (
        <div className='login'>
            <div className='login-image'>
                <img src={Icon} alt='logo'
                    style={{
                        width: "30vw"
                    }}
                />
            </div>
            <div className='login-box'>
                <div className='login-body'>
                    <p
                        style={{
                            // textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
                            fontSize: "30px",
                        }}
                    >Login Here</p>
                    <TextField
                        id="standard-basic"
                        label="Enter UserName"
                        variant="standard"
                    />

                    <TextField
                        id="standard"
                        type='password'
                        label="Enter Password"
                        variant="standard"
                    />
                    <Button variant="outlined">Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;