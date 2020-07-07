import React from 'react';
import {NavLink} from "react-router-dom";

type PropsType = {

}

const Navbar: React.FC<PropsType> = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <NavLink to="/" className="navbar-brand">Blog</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
};

export default Navbar;
