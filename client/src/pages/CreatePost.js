import React, { useState, useEffect } from "react";
import API from "../services/api";
import "./CreatePost.css";
import { useLocation, useNavigate } from "react-router-dom";

function CreatePost() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/register");
    }
  }, [navigate]);

  const editPost = location.state; // receives data from dashboard

  const [title, setTitle] = useState(editPost ? editPost.title : "");
  const [content, setContent] = useState(editPost ? editPost.content : "");

  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!title || !content) {
      return alert("All fields required");
    }

    try {
      if (editPost) {
        //  UPDATE EXISTING POST
        await API.put(
          `/posts/${editPost._id}`,
          { title, content },
          {
            headers: { Authorization: token }
          }
        );

        alert("Post Updated Successfully");

      } else {
        //  CREATE NEW POST
        await API.post(
          "/posts",
          { title, content },
          {
            headers: { Authorization: token }
          }
        );

        alert("Post Created Successfully");
      }

      // Redirect to dashboard after action
      navigate("/dashboard");

    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>

      <div className="editor-container">

  {/* TOP BAR */}
  <div className="editor-header">
    <h2>{editPost ? "Edit Post" : "Create New Post"}</h2>

    <div className="actions">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <button className="publish-btn" onClick={handleSubmit}>
        {editPost ? "Update" : "Publish"}
      </button>
    </div>
  </div>

  {/* EDITOR BODY */}
  <div className="editor-box">

    <input
      className="title-input"
      placeholder="Enter your title..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      className="content-input"
      placeholder="Start writing your story..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />

  </div>

</div>
    </>
  );
}

export default CreatePost;