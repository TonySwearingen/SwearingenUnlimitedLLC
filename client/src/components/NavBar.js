import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    justifyContent: "center",
    margin: "50px 10px 10px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px",
  };
  

  return (
    <>
      <NavLink
        to="/"
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        style={linkStyles}
      >
        About
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
      <NavLink
        to="/User"
        style={linkStyles}
      >
        User
      </NavLink >
    </>
  )
}

export default NavBar;
