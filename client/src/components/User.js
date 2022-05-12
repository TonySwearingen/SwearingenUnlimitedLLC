import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "../styles";



function User({ user, setUser}) {

  const history = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const formData = {
      user
    }
    fetch('/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => setUser(data))
  }

  function handleLogoutClick(e) {
    e.preventDefault();
      fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
          setUser(null);
          history.push("/")
      }
      });
  }
  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Enter username" />
        <input type="text" placeholder="Enter password" />
        <button className="submit-btn" type="submit" onChange={(e) => setUser(e.target.value)}>Login</button>
        <button className="submit-btn" type="submit" onClick={handleLogoutClick}>Logout</button>
      </form>
    </div>
  )
}

export default User;
