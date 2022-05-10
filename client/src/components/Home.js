import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Tony from '../Users/Tony';
import Nicki from '../Users/Nicki';
import Freedom from '../Users/Freedom';
import Autumn from '../Users/Autumn';
import TJ from '../Users/TJ';


function Home() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Tony" element={<Tony />} />
          <Route path="/Nicki" element={<Nicki />} />
          <Route path="/Freedom" element={<Freedom />} />
          <Route path="/Autumn" element={<Autumn />} />
          <Route path="/TJ" element={<TJ />} />
        </Routes>
      
    </div>
  )
}

export default Home;
