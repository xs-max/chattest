import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../Store/Slices/messageSlice'
import Message from '../Message'
import styles from "./MessageContainer.module.css"

const MessageContainer = ({socket}) => {

    

    const messageRef = useRef()
    const {messages} = useSelector(state => state.messages);
    const messageToDisplay = [...messages]; 
    const dispatch = useDispatch();

  useEffect(() => {
    messageRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      let messageList;
      messageList = localStorage.getItem("messages");
      // console.log("mess", messageList)
      // console.log('data')
      if (!messageList) {
        messageList = [data]
        localStorage.setItem("messages", JSON.stringify(messageList))
        dispatch(getMessages({ messages: messageList }))
      } else {
        messageList = JSON.parse(localStorage.getItem("messages"))
        messageList.push(data)
        // localStorage.setItem(JSON.stringify(messageList))
        console.log(messageList)
        localStorage.setItem("messages", JSON.stringify(messageList))
        dispatch(getMessages({messages: messageList}))
      }
    });

    return() => {
      socket.off("receive_message")
    }

  },[socket]) 

  return (
    <div  className={styles.container}>
        {
            messageToDisplay?.map(({message, author}, index) => (
                <Message key={index} message={message} author={author} />
            ))
        }
      <div ref={messageRef}></div>
    </div>
  )
}

export default MessageContainer