import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Yeison",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5 col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 ">
      <h1 className="text-center">Login</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary mb-2">
        Login
      </button>
    </div>
  );
};
