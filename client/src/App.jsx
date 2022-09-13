import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import io from "socket.io-client";
import './App.css';
import ChatLayout from './Layout/ChatLayout';
import { getMessages } from './Store/Slices/messageSlice';
import { saveName } from './Store/Slices/userSlice';

const socket = io("http://localhost:3009");

function App() {

  const [userName, setUserName] = useState("")
  const [chat, setChat] = useState([...JSON.parse(localStorage.getItem("messages"))])
  const {name} = useSelector(state => state.user)
  const dispatch = useDispatch()

  
  const joinRoom = () => {
    socket.emit("join_room", "chatroom");
  };


  const saveUserName = () => {
    if(userName) {
      dispatch(saveName(userName))
      joinRoom()
    }
  }

  useEffect(() => {
    if (localStorage.getItem("messages") && JSON.parse(localStorage.getItem("messages")).length > 0) {
      dispatch(getMessages({ messages: JSON.parse(localStorage.getItem("messages")) }))
    }
  }, [])


  return (
    <div className="App">
      {
        !name ? (
          <div className='prompt'>
            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder='please enter your name' />
            <button onClick={saveUserName}>Submit</button>
          </div>

        ) : (
        <ChatLayout chat={chat} setChat={setChat} socket={socket} />
        )
      }

    </div>
  );
}

export default App;
