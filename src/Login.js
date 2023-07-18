import React from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
       auth
        .signInWithPopup(provider)
        .then(({ user }) => {
            dispatch (
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            );
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login__container'>
            <img src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png" alt='' /> 
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>   
        </div> 
      
    </div>
  )
}

export default Login
