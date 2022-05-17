import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import db, { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer'




function Login() {
  const [state, dispatch] = useStateValue()
  const signIn = () => {
    //sign in
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type:actionTypes.SET_USER,
          user: result.user,
        })
        console.log(result.user)
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          width="150"
          viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
        >
          <path
            d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
            fill="#1877f2"
          />
          <path
            d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
            fill="#fff"
          />
        </svg>

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          width="150px"
          height="50px"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
