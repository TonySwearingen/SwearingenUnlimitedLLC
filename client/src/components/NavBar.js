import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  

  return (
    <>
      <NavLink
        to="/Home"
        style={linkStyles}
      >
        Home
      </NavLink> 
      <NavLink
        to="/Tony"
        style={linkStyles}
      >
        Tony
      </NavLink >
      <NavLink
        to="/Nicki"
        style={linkStyles}
      >
        Nicki
      </NavLink >
      <NavLink
        to="/Freedom"
        style={linkStyles}
      >
        Freedom
      </NavLink >
      <NavLink
        to="/Autumn"
        style={linkStyles}
      >
        Autumn
      </NavLink >
      <NavLink
        to="/TJ"
        style={linkStyles}
      >
        TJ
      </NavLink >
    </>
  )
}

export default NavBar;
