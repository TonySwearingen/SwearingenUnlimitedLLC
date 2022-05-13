import React, { useState } from "react";
import LoginForm from "./LoginForm";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          
          <p>
            Not accepting new users at this time. &nbsp;
            <br/>
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Log In
            </button>
          </p>
        </>
      ) : (
        <>
        <LoginForm onLogin={onLogin} />
          <p>
            Go ahead Click it again!!! &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Click Bait
            </button>
          </p>
        </>
      )}
    </div>
  );
}


export default Login;