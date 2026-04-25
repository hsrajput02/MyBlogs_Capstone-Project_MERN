import React, { useState, useRef, useEffect } from "react";
import {
    FaUserCircle, FaBars, FaTimes, FaHome, FaPen, FaCompass, FaInfoCircle, FaUser, FaTachometerAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
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

            {/* LOGO */}
            <div className="logo-container" onClick={() => navigate("/")}>
                <img src="/logo.png" alt="logo" className="logo-img" />
                <h2 className="logo-text">MyBlogs</h2>
            </div>

            {/* SEARCH */}
            <input
                className="search-input"
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

            {/* DESKTOP NAV */}
            <div className="nav-links desktop">
                <Link to="/">Home</Link>
                <a href="#posts">Explore</a>
                <span className="nav-write"
                    onClick={() => {
                        const token = localStorage.getItem("token");
                        if (!token) navigate("/register");
                        else navigate("/create");
                    }}
                >
                     Write
                </span>
                <a href="#about"> About</a>
            </div>

            <div className="nav-buttons desktop">
                {user ? (
                    <div className="profile-container" ref={dropdownRef}>
                        <div className="profile" onClick={() => setOpen(!open)}>
                            <FaUserCircle className="profile-icon" />
                            <span>{user.name}</span>
                        </div>

                        {open && (
                            <div className="dropdown">
                                <p onClick={() => navigate("/profile")}><FaUser /> My Profile</p>
                                <p onClick={() => navigate("/dashboard")}><FaTachometerAlt /> Dashboard</p>
                                <p onClick={handleLogout} className="logout">  Logout</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="login">Login</Link>
                        <Link to="/register" className="btn">Get Started</Link>
                    </>
                )}
            </div>

            {/* HAMBURGER */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* MOBILE MENU  */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

                <Link to="/" onClick={() => setMenuOpen(false)}><FaHome />Home</Link>
                <a href="#posts" onClick={() => setMenuOpen(false)}><FaCompass />Explore</a>

                <span className="nav-write"
                    onClick={() => {
                        setMenuOpen(false);
                        const token = localStorage.getItem("token");
                        if (!token) navigate("/register");
                        else navigate("/create");
                    }}
                >
                    <FaPen /> Write
                </span>

                <a href="#about" onClick={() => setMenuOpen(false)}><FaInfoCircle />About</a>

                {user ? (
                    <>
                        <p onClick={() => { setMenuOpen(false); navigate("/profile") }}><FaUser />My Profile</p>
                        <p onClick={() => { setMenuOpen(false); navigate("/dashboard") }}><FaTachometerAlt />Dashboard</p>
                        <p onClick={() => { setMenuOpen(false); handleLogout(); }} className="logout" >  Logout</p>
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