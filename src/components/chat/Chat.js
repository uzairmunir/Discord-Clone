import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { selectUser } from '../../features/userSlice';
import './chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import db from '../../FireBase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapShot) =>
          setMessages(snapShot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput('');
  };
  return (
    <div className='chat'>
      {/* Header */}
      <ChatHeader channelName={channelName} />
      {/* Messages */}
      <div className='chat-messages'>
        <FlipMove>
          {messages.map((message) => (
            <Message
              timestamp={message.timestamp}
              user={message.user}
              message={message.message}
            />
          ))}
        </FlipMove>
      </div>
      {/* Bottom Input */}
      <div className='chat-input'>
        <AddCircle fontSize='large' />
        <form>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
            placeholder={`Message #${channelName}`}
          />
          <button type='submit' className='btn-input' onClick={sendMessage}>
            Send Message
          </button>
        </form>
        <div className='input-icons'>
          <CardGiftcard fontSize='large' />
          <Gif fontSize='large' />
          <EmojiEmotions fontSize='large' />
        </div>
      </div>
    </div>
  );
};

export default Chat;
