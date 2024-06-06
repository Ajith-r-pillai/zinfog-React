import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;
    setUsernameError("");
    setPasswordError("");

    if (!username) {
      setUsernameError("Username is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);

      try {
        const res = await axios.post(
          "https://accesslabbeta.stagingserverhub.com/api/b2b/login",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        setResponse(res.data);
        console.log(res.data);
        if (res.data.status == "nok") {
          setErrorMessage(res.data.error.message);
        } else {
          setErrorMessage("");
          alert(res.data.message);
          // navigate('/dashboard');
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            "An unexpected error occurred. Please try again later."
          );
        }
      }
    }
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="first-vector">
          <img
            src="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
            alt="First vector"
          />
        </div>
        <div className="logo-img">
          <img
            src="https://i.postimg.cc/Ssfj76mz/Screenshot-8-removebg-preview.png"
            alt="Logo"
          />
        </div>
        <div className="second-vector">
          <img
            src="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
            alt="Second vector"
          />
        </div>
        <div className="login-para">
          <p>Report Download portal</p>
        </div>
        <div className="login-input">
          <p>Login</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              value={username}
              style={{ borderColor: usernameError ? "red" : "" }}
            />
            {usernameError && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "12px" }}
              >
                {usernameError}
              </div>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
              style={{ borderColor: passwordError ? "red" : "" }}
            />
            {passwordError && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "12px" }}
              >
                {passwordError}
              </div>
            )}
            <div className="form-btn">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
          <Link
            style={{ marginTop: "1rem", color: "black", fontFamily: "Outfit" }}
          >
            Reset Password
          </Link>
        </div>
        {errorMessage && <div className="err-mesg">{errorMessage}</div>}
        <div className="login-contact">
          <div className="third-vector">
            <img
              src="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
              alt="Third vector"
            />
          </div>
          <p>
            <i className="fa-solid fa-phone"></i> (+91)9288008801
          </p>
        </div>
        <div className="login-container-footer">
          <p>
            I hereby agree and accept the <span>Terms of service</span> and{" "}
            <span>Privacy policy</span>
          </p>
        </div>
      </div>
      <div className="login-footer-main">
        <div className="login-footer">
          <p>Copyright © 2023 Access Home Lab Solutions</p>
          <p>
            All Rights Reserved | <span>Terms and Conditions</span> |{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
