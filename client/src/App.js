import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Tony from './Users/Tony';
import Nicki from './Users/Nicki';
import Freedom from './Users/Freedom';
import Autumn from './Users/Autumn';
import TJ from './Users/TJ';

function App() {
  return (
    <div className="App">
      <h2>Swearingen Unlimited LLC</h2>
        <br/>
        <br/>
        <h2>By Tony J. Swearingen</h2>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Tony" element={<Tony />} />
          <Route path="/Nicki" element={<Nicki />} />
          <Route path="/Freedom" element={<Freedom />} />
          <Route path="/Autumn" element={<Autumn />} />
          <Route path="/TJ" element={<TJ />} />
        </Routes>
    </div>
  );
}

export default App;
