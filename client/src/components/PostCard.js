import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <h2>{post.title}</h2>

        <div className="meta">
          <span>By {post.author?.name}</span>
          <span>
            {new Date(post.updatedAt || post.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <p className="preview">
        {post.content}
      </p>

      <button
        className="read-btn"
        onClick={() => navigate(`/post/${post._id}`, { state: post })}
      >
        Read More →
      </button>
    </div>
  );
}

export default PostCard;