import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <NavLink to="/" className="navbar-brand">Blog</NavLink>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/create" className="nav-link">Create Post</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
