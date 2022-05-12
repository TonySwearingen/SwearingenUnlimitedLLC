import React from "react";
import Login from "./Login"

function User({ user, setUser }) {

  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  // function handleLogin(e) {
  //   e.preventDefault();

  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({ username, password})
  //   })
  //   .then((res) => res.json())
  //   .then((user) => setUser(user))
  // }

  // function handleLogoutClick(e) {
  //   e.preventDefault();
  //     fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //         setUser(null);
  //     }
  //     });
  // }
  
  return (
    <div>
      {/* <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Enter username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-btn" type="submit" onChange={handleLogin}>Login</button>
        <br/>
        <button className="submit-btn" type="submit" onClick={handleLogoutClick}>Logout</button>
      </form> */}
      <Login user={user} setUser={setUser} />
    </div>
  )
}

export default User;
