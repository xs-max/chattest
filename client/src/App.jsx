import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import './App.css';
import ChatLayout from './Layout/ChatLayout';
import { saveName } from './Store/Slices/userSlice';

function App() {

  const [userName, setUserName] = useState("")
  const {name} = useSelector(state => state.user)
  const dispatch = useDispatch()


  const saveUserName = () => {
    if(userName) {
      dispatch(saveName(userName))
    }
  }

  useEffect(() => {

  },[])

  return (
    <div className="App">
      {
        name ? (
          <div className='prompt'>
            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder='please enter your name' />
            <button onClick={saveUserName}>Submit</button>
          </div>

        ) : (
        <ChatLayout />
        )
      }

    </div>
  );
}

export default App;
