
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Import the function
import { useState } from "react";
import "./login.css";

function Exp1() {
  const [data, setData] = useState({ email: "", password: "" });
  const { email, password } = data;

  const eventHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((err) => {
        console.log("Error from login:", err);

        if (err.code === "auth/user-not-found") {
          alert("You are not signed up. Please sign up first!");
        } else if (err.code === "auth/invalid-credential") {
          alert("You entered invalid credentials! or please Sign up if you are new.");
        } else {
          console.log("Unhandled error:", err.message);
        }
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((err) => {
        console.log("Error from signup:", err);
        if (err.code === "auth/email-already-in-use") {
          alert("Email already in use. Please login with different e-mail.");
        } else {
          console.log("Unhandled error:", err.message);
        }
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Authentication</h1>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email..."
          onChange={eventHandler}
          className="input-field"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password..."
          onChange={eventHandler}
          className="input-field"
        />
        <div className="button-container">
          <button onClick={logIn} className="auth-button">Login</button>
          <button onClick={signUp} className="auth-button">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Exp1;


