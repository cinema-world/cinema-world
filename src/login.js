import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./log.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button id='login-btn'
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;