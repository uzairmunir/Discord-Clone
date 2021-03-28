import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import { auth, provider } from '../../FireBase';

const LogIn = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div className='logo'>
        <img src='https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png' />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default LogIn;
