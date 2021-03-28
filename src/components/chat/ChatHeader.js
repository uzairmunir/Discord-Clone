import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  Search,
  SendRounded,
} from '@material-ui/icons';
import React from 'react';
import './chatheader.css';

const ChatHeader = ({ channelName }) => {
  return (
    <div className='chat-header'>
      {/* Header Left Side */}
      <div className='header-left'>
        <h3>
          <span className='header-hash'>#</span>
          {channelName}
        </h3>
      </div>
      {/* Header Right Side */}
      <div className='header-right'>
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />
        <div className='header-search'>
          <input placeholder='Search' />
          <Search />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
};
export default ChatHeader;
