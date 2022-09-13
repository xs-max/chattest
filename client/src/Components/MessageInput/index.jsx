import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../Store/Slices/messageSlice';
import styles from "./MessageInput.module.css"

const MessageInput = ({ socket, room }) => {

    const [currentMessage, setCurrentMessage] = useState("");
    const { name } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: "chatroom",
                author: name,
                message: currentMessage,
            };
            await socket.emit("send_message", messageData);
            const messageList = localStorage.getItem("messages");
            let messages = [];
            let storageMessages
            console.log(messageList)
            if(!messageList || messageList.length < 1) {
                messages.push(messageData)
                localStorage.setItem("messages", JSON.stringify(messages))
                dispatch(getMessages({messages: messageData}))
            } else {
                storageMessages = JSON.parse(localStorage.getItem("messages"))
                storageMessages.push(messageData);
                dispatch(getMessages({messages: storageMessages}))
                localStorage.setItem("messages", JSON.stringify(storageMessages))
            }
            setCurrentMessage("");
        }
    }

  return (
    <div className={styles.container}>
          <input type="text" value={currentMessage} placeholder='Enter message' onChange={(event) => {
              setCurrentMessage(event.target.value);
          }} />
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default MessageInput