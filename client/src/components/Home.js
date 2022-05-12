import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Tony from '../Users/Tony';
import Nicki from '../Users/Nicki';
import Freedom from '../Users/Freedom';
import Autumn from '../Users/Autumn';
import TJ from '../Users/TJ';
import User from './User';
import Login from './Login'


function Home() {

  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/user")
      };
    });
  }, [history]);

  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Tony" element={<Tony user={user} setUser={setUser} />} />
          <Route path="/Nicki" element={<Nicki user={user} setUser={setUser} />} />
          <Route path="/Freedom" element={<Freedom user={user} setUser={setUser} />} />
          <Route path="/Autumn" element={<Autumn user={user} setUser={setUser} />} />
          <Route path="/TJ" element={<TJ user={user} setUser={setUser} />} />
          <Route path="/User" element={<User />} />
          <Route exact path="/login" element={<Login onLogin={setUser} />} />
        
        </Routes>
      
    </div>
  )
}

export default Home;
