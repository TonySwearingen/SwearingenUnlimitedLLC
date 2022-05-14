import React from "react";
import Login from "./Login";
import { useNavigate } from 'react-router';


function User({ user, setUser }) {

  const history = useNavigate()

  function handleLogoutClick(e) {
    e.preventDefault();
      fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
          setUser(null);
        history('/Login')
      }
      });
  }
  
  return (
    <div>
        <Login user={user} setUser={setUser} />
      <button className="submit-btn" type="submit" onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default User;
