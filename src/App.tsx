import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Tracks from './components/Tracks';
import Home from './screens/Home';


function App() {
  return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/@MuftiTM" element={<Tracks/>}/>
    </Routes>
  );
}

export default App;
