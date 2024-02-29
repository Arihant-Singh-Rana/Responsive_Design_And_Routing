import React from 'react'
import './App.css';
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom'
import Memes from './Components/Memes';
import News from './Components/News';
import Notes from './Components/Notes';
import About from './Components/About';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Memes" element={<Memes />} />
      <Route path="/News" element={<News />} />
      <Route path="/Notes" element={<Notes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
