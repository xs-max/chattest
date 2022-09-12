import React from 'react'
import styles from './ChatLayout.module.css'

const ChatLayout = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default ChatLayout