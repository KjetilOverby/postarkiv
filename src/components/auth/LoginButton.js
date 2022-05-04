import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ from }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect();
  };
  return (
    !isAuthenticated && (
      <p className="button" onClick={loginHandler}>
        Login
      </p>
    )
  );
};

export default LoginButton;
