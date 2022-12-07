import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          {" "}
          <span className="signupScreen__gray">New to netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
