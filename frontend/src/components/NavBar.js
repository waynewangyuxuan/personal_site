import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            {/* Clickable name that redirects to Home */}
            <Link to="/" className="navbar-title">Wayne Wang</Link>

            <ul className="navbar-links">
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="https://www.linkedin.com/in/wayne-wang-364174231/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/waynewangyuxuan/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://github.com/waynewangyuxuan" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;