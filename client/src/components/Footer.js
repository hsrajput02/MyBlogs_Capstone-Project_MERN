import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer id="about" className="footer">

            {/* LEFT */}
            <div className="footer-left">
                <h2 className="logo">MyBlogs</h2>
                <p>A modern platform for writers and creators.</p>
            </div>

            {/* MIDDLE LINKS */}
            <div className="footer-links">
                <div>
                    <h4>Community</h4>
                    <p>Blog</p>
                    <p>Writers</p>
                    <p>Categories</p>
                </div>

                <div>
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4>Support</h4>
                    <p>Help</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
            </div>

            {/* RIGHT */}
            <div className="footer-right">
                <div className="socials">
                    <FaGlobe />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
                <button className="footer-btn">
                    Join MyBlogs Today
                </button>
            </div>
        </footer>
    );
}

export default Footer;