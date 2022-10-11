import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Tracks from './components/Tracks';


function App() {
  return (
    <Routes>
        <Route path = "/" element={<Tracks/>}/>
    </Routes>
  );
}

export default App;
