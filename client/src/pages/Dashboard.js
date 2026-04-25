import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // Fetch posts
  const fetchPosts = async () => {
    const res = await API.get("/posts");

    const myPosts = res.data.filter(
      (post) => post.author?._id === user.id
    );

    setPosts(myPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // View
  const handleView = (post) => {
    navigate(`/post/${post._id}`, { state: post });
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await API.delete(`/posts/${id}`, {
        headers: { Authorization: token }
      });
      fetchPosts();
    } catch {
      alert("Delete failed");
    }
  };

  // Edit
  const handleEdit = (post) => {
    navigate("/create", { state: post });
  };

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="menu">
          <p className="active">📄 My Posts</p>
          <p>📝 Drafts</p>
          <p>📊 Analytics</p>
          <p>⚙️ Settings</p>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* CONTENT */}
        <div className="content">

          <div className="header">
            <h2>My Posts</h2>

            <button className="create-post-btn" onClick={() => navigate("/create")}>
              + Create New Post
            </button>
          </div>

          {/* POSTS */}
          <div className="post-list">
            {posts.map((post) => (
              <div key={post._id} className="post-row">

                <div className="post-info">
                  <h4>{post.title}</h4>
                  <p>{post.content.substring(0, 80)}...</p>
                </div>

                <div className="post-actions">
                  <span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                  <button onClick={() => handleView(post)}>View</button>
                  <button className="edit-btn" onClick={() => handleEdit(post)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(post._id)}>Delete</button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;