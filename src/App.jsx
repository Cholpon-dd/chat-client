import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Chat from './components/chat/Chat';
import io from 'socket.io-client';

const serverUrl = 'https://chat-server-65qg.onrender.com/';
const socket = io.connect(serverUrl);

function App() {
  const [info, setInfo] = useState('');
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} info={info} setInfo={setInfo} />} />
      <Route path="/chat" element={<Chat socket={socket} info={info} setInfo={setInfo} />} />
    </Routes>
  );
}

export default App;
