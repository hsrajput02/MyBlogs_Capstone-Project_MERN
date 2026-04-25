import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/");  // Redirect to home page after successful login

    } catch (error) {
      alert("Login Failed");
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back </h2>
        <p>Login to continue writing amazing blogs</p>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account?<span className="link" onClick={() => navigate("/register")}>Register here</span>
        </p>
        <p
          style={{ cursor: "pointer", color: "#0ea5a4", marginTop: "10px" }}
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default Login;