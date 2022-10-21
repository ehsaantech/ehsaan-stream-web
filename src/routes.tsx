import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home  from './screens/Home';
import Tracks from './container/tracks-container';

const Approutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/channels/:channelName" element={<Tracks/>}/>
    </Routes>
  )
}

export default Approutes;