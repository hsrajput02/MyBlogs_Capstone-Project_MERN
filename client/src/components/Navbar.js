import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [search, setSearch] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <h2 className="logo" onClick={() => navigate("/")}>MyBlogs</h2>
            <input className="search-input"
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        navigate(`/?search=${search}`);
                    }
                }}
            />
            <div className="nav-links">
                <Link to="/">Home</Link>
                <a href="#posts">Explore</a>
                <span
                    className="btn"
                    onClick={() => {
                        const token = localStorage.getItem("token");

                        if (!token) {
                            navigate("/register");
                        } else {
                            navigate("/create");
                        }
                    }}
                >
                    Write
                </span>
                <a href="#about">About</a>

            </div>

            <div className="nav-buttons">
                {user ? (
                    <>
                        <div className="profile-container" ref={dropdownRef}>
                            <div
                                className="profile"
                                onClick={() => setOpen(!open)}
                            >
                                <FaUserCircle className="profile-icon" />
                                <span>{user.name}</span>
                            </div>

                            {open && (
                                <div className="dropdown">
                                    <p onClick={() => navigate("/profile")}>
                                        My Profile
                                    </p>

                                    <p onClick={() => navigate("/dashboard")}>
                                        Dashboard
                                    </p>

                                    <p>Settings</p>

                                    <p onClick={handleLogout} className="logout">
                                        Logout
                                    </p>
                                </div>
                            )}

                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="login">Login</Link>
                        <Link to="/register" className="btn">Get Started</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;