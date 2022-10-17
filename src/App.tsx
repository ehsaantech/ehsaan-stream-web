import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Tracks from './container/tracks-container';
import Home from './screens/Home';


function App() {
  return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/channels/:channelName" element={<Tracks/>}/>
    </Routes>
  );
}

export default App;
