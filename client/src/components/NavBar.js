import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './User';
// import Login from './Login';
import Home from './Home';
import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

function NavBar() {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then(setCurrentUser)
  }, [])

  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<User />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default NavBar;
