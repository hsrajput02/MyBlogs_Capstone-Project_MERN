import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [line1, setLine1] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        gender,
        age,
        address: {
          line1,
          city,
          country
        }
      });

      alert("Registered Successfully");

      navigate("/login"); // Redirect to login page after successful registration

    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container register-container">
      <div className="auth-box">
        <h2>Create Account </h2>
        <p>Join MyBlogs and start sharing your stories</p>

        <input
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <div className="gender-section">
          <p className="label">Select Gender</p>

          <div className="gender-options">
            <div
              className={`gender-card ${gender === "Male" ? "active" : ""}`}
              onClick={() => setGender("Male")}
            >
              Male
            </div>

            <div
              className={`gender-card ${gender === "Female" ? "active" : ""}`}
              onClick={() => setGender("Female")}
            >
              Female
            </div>

            <div
              className={`gender-card ${gender === "Other" ? "active" : ""}`}
              onClick={() => setGender("Other")}
            >
              Other
            </div>
          </div>
        </div>

        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          placeholder="Address Line 1"
          onChange={(e) => setLine1(e.target.value)}
        />

        <input
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;