import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete account?");

    if (!confirm) return;

    try {
      await API.delete("/auth/delete-account", {
        headers: { Authorization: token }
      });

      localStorage.clear();
      alert("Account deleted");

      navigate("/");

    } catch (error) {
      alert("Error deleting account");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>My Profile</h2>

        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Gender:</strong> {user?.gender}</p>
        <p><strong>Age:</strong> {user?.age}</p>

        <p><strong>Address:</strong></p>
        <p>{user?.address?.line1}</p>
        <p>{user?.address?.city}, {user?.address?.country}</p>

        <button className="delete-account" onClick={handleDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Profile;