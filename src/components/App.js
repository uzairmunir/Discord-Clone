import React, { useEffect } from 'react';
import './App.css';
import SideBar from './sidebar/SideBar';
import Chat from './chat/Chat';
import { logIn, logOut, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import LogIn from './login/LogIn';
import { auth } from '../FireBase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          logIn({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, [dispatch]);
  return (
    <div className='app'>
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

export default App;
