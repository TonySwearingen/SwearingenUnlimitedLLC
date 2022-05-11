import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
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
    </div>
  )
}

export default User;
