import React from 'react'
import {Avatar} from "@mui/material"
import { FaUserAlt } from 'react-icons/fa';
import styles from './Message.module.css'
import { useSelector } from 'react-redux';

const Message = ({message, author}) => {

    const { name } = useSelector(state => state.user)

  return (
    <div className={`${styles.container} ${author === name ? styles.container__reverse : ""}`}>
          <div className={`${styles.avatar} ${author === name ? styles.avatar__reverse : ""}`}>
             <FaUserAlt />
        </div>
          <div className={`${styles.message} ${author === name ? styles.message__reverse: ""} `}>
            <p className={styles.author}>{author}</p>
            <p>{message}</p>
        </div>

    </div>
  )
}

export default Message