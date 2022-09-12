import React from 'react'
import styles from "./MessageInput.module.css"

const MessageInput = () => {
  return (
    <div className={styles.container}>
        <input type="text" placeholder='Enter message' />
        <button>Send</button>
    </div>
  )
}

export default MessageInput