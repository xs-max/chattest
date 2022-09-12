import { useEffect } from 'react';
import './App.css';
import ChatLayout from './Layout/ChatLayout';

function App() {


  useEffect(() => {

  },[])

  return (
    <div className="App">
      <div className='prompt'>
        <input type="text" placeholder='name' />
        <button>Submit</button>
      </div>

    <ChatLayout>

    </ChatLayout>
    </div>
  );
}

export default App;
