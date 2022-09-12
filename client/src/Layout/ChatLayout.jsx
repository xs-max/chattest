import React from 'react'
import MesssageInput from '../Components/MessageInput'
import styles from './ChatLayout.module.css'

const ChatLayout = () => {
  return (
    <div className={styles.container}>
        <div></div>
        <MesssageInput />
    </div>
  )
}

export default ChatLayout