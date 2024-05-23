import React from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/mail.png";
import lock_icon from "../Assets/padlock.png";
import { useState } from "react";

function LoginSignup() {
  let [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <h2>{action}</h2>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div className="name_input"></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Enter Your Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>

          <div className="input">
            <img src={lock_icon} alt="" />
            <input type="Password" placeholder="Enter Your Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot_password">
            Lost Password? <span>Click Hare</span>
          </div>
        )}

        <div className="btn">
          <button
            className={action === "Login" ? "sibmit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "sibmit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div> // container
  );
}

export default LoginSignup;
