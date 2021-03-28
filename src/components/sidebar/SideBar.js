import { Avatar, Icon } from '@material-ui/core';
import {
  Call,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db, { auth } from '../../FireBase';

const SideBar = () => {
  const user = useSelector(selectUser);
  const [channel, setChannels] = useState([]);
  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, channel: doc.data() }))
      )
    );
  }, []);

  {
    /* Add Channel Method */
  }
  const addChannel = () => {
    const channelName = prompt('Enter Channel Name');
    if (channelName) {
      db.collection('channels').add({
        channelName: channelName,
      });
    }
  };
  return (
    <div className='sidebar'>
      {/* Side Bar Top */}

      <div className='sidebar-top'>
        <h3>Uzair Munir</h3>
        <ExpandMore />
      </div>

      {/* Side Bar Channels */}

      <div className='sidebar-channels'>
        <div className='sidebar-chanel-header'>
          <div className='sidebar-header'>
            <ExpandMore />
            <h4>Text Channel</h4>
          </div>
          <AddIcon onClick={addChannel} className='sidebar-addicon' />
        </div>

        {/* Rendering Channels */}

        <div className='sidebar-channel-list'>
          {channel.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      {/* Side Bar Bottom */}

      <div className='sidebar-voice'>
        <SignalCellularAlt fontSize='large' className='voice-icon' />
        <div className='sidebar-voiceinfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar-icons'>
          <InfoOutlined />
          <Call />
        </div>
      </div>

      {/* Side Bar Profile */}

      <div className='sidebar-profile'>
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className='sidebar-profileInfo'>
          <h3>{user.displayName}</h3>
          <p>{user.uid.substring(0, 5)}</p>
        </div>
        <div className='sidebar-profileIcons'>
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
