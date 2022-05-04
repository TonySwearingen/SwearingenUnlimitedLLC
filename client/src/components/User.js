import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

function User() {

  const {currentUser} = useContext(UserContext);

  // useEffect(() => {
  //   fetch('/me')
  //     .then((res) => res.json())
  //     .then(setCurrentUser)
  // }, [])
  
  return (
    <div>

    </div>
  )
}

export default User;
