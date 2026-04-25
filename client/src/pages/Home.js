import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import API from "../services/api";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import "./Home.css";
import { FaPen } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const postsRef = useRef(null);
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get(`/posts?search=${search}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [search]);

  useEffect(() => {
    if (search && posts.length > 0 && postsRef.current) {
      postsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [posts, search]);

  const checkAuthAndRedirect = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/register"); // redirect to register if not authenticated
      return false;
    }

    return true;
  };

  return (
    <>

      <div className="hero">
        <div className="hero-content">
          <h1>
            Write.<br />
            Share.<br />
            <span>Inspire.</span>
          </h1>

          <p>
            MyBlogs is a platform for writers and readers to connect, share ideas, and inspire the world.
          </p>
          <button className="hero-btn" onClick={() => {
            if (checkAuthAndRedirect()) {
              navigate("/create");
            }
          }}>
           <FaPen/> Start Writing for Free
          </button>
        </div>
      </div>


      <div className="features">

        <div className="feature-card">
          <div className="icon">✏️</div>
          <p>Seamless Editor</p>
        </div>

        <div className="feature-card">
          <div className="icon">📈</div>
          <p>Audience Growth</p>
        </div>

        <div className="feature-card">
          <div className="icon">🎨</div>
          <p>Beautiful Themes</p>
        </div>

        <div className="feature-card">
          <div className="icon">👥</div>
          <p>Engaging Community</p>
        </div>

      </div>
      {/* Blog Section */}
      <h1 className="section-title">Latest Blogs</h1>
      <div id="posts" ref={postsRef} className="posts-container">
        {loading ? <p>Loading...</p> : posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <Footer />
    </>
  );
}


export default Home;