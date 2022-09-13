import React from 'react'
import MessageContainer from '../Components/MessageContainer'
import MesssageInput from '../Components/MessageInput'
import styles from './ChatLayout.module.css'

const ChatLayout = ({socket, room, chat, setChat}) => {
  return (
    <div className={styles.container}>
      <MessageContainer chat={chat} setChat={setChat} socket={socket} />
        <MesssageInput chat={chat} setChat={setChat} socket={socket} room={room} />
    </div>
  )
}

export default ChatLayout