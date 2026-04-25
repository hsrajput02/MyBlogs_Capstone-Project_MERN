import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PostDetails.css";

function PostDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const post = location.state;

    if (!post) {
        return <h2>No post found</h2>;
    }

    return (
        <div className="post-page">

            <button className="close-btn" onClick={() => navigate(-1)}>
                ✖ Close
            </button>

            <h1>{post.title}</h1>

            <p className="full-content">
                {post.content}
            </p>

        </div>
    );
}

export default PostDetails;