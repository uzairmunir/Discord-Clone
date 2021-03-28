import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './message.css';
import * as timeago from 'timeago.js';

const Message = forwardRef(({ timestamp, user, message }, ref) => {
  return (
    <div className='messages' ref={ref}>
      <Avatar src={user.photo} />
      <div className='message-info'>
        <h4>
          {user.displayName}
          <span className='message-timestamp'>
            {timeago.format(new Date(timestamp?.toDate()).toLocaleString())}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
});

export default Message;
