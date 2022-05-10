import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Tony from './Users/Tony';
import Nicki from './Users/Nicki';
import Freedom from './Users/Freedom';
import Autumn from './Users/Autumn';
import TJ from './Users/TJ';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Tony" element={<Tony />} />
          <Route path="/Nicki" element={<Nicki />} />
          <Route path="/Freedom" element={<Freedom />} />
          <Route path="/Autumn" element={<Autumn />} />
          <Route path="/TJ" element={<TJ />} />
        </Routes>
        <img src="https://swearingenunlimited.com/wp-content/uploads/2021/11/FINAL.png" alt="Home" />
    </div>
  );
}

export default App;
