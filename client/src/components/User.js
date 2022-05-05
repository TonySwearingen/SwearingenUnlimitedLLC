import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import Tony from '../Users/Tony';
import Nicki from '../Users/Nicki';
import Freedom from '../Users/Freedom';
import Autumn from '../Users/Autumn';
import TJ from '../Users/TJ';
import Login from './Login'



function User() {

  const {currentUser} = useContext(UserContext);

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then(currentUser)
  }, [currentUser])
  
  return (
    <div>
      <Login />
      <Tony />
      <Nicki />
      <Freedom />
      <Autumn />
      <TJ />
    </div>
  )
}

export default User;
