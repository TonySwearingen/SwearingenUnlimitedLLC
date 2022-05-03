import { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {

    })
  }

}


