import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Routes, Route} from 'react-router-dom';
import About from './About';
import Tony from '../Users/Tony';
import Nicki from '../Users/Nicki';
import Freedom from '../Users/Freedom';
import Autumn from '../Users/Autumn';
import TJ from '../Users/TJ';
import User from './User';
import Login from './Login';
import Projects from './Projects'



function Home() {

  const [user, setUser] = useState("");

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      };
    });
  }, []);

  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Tony" element={<Tony  />} />
          <Route path="/Nicki" element={<Nicki />} />
          <Route path="/Freedom" element={<Freedom />} />
          <Route path="/Autumn" element={<Autumn />} />
          <Route path="/TJ" element={<TJ />} />
          <Route path="/User" element={<User user={user} setUser={setUser}  />} />
          <Route exact path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/Projects" element={<Projects user={user} setUser={setUser} />} />
        </Routes>
      
    </div>
  )
}

export default Home;
