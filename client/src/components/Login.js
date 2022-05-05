import { useState, useContext } from 'react';
import { UserContext } from './UserContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setCurrentUser(currentUser))
      } else alert("Invalid login. Please try again.")
    })
  }

  return (
  <>
  <form className="login" onSubmit={handleLogin}>
    <input type="text" value={username} placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
    <input type="text" value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
    <button className="login-btn" onSubmit={handleLogin} >Login</button>
  </form>
  {/* {currentUser.admin ? (
    <AdminPortal 
  )} */}
  {/* <nav>
        {!user ? 
        <button as={Link} exact to="/login" onClick={handleLoginClick} >Login</button> 
        :
        <button variant="outline" onClick={handleLogoutClick}> Logout</button>
        }
      </nav> */}
  </>
  )
}


export default Login