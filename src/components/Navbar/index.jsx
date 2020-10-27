import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({setLanguage}) =>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Mon portolio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/About" className="nav-item nav-link ">About</Link>
                <Link to="/Contact" className="nav-item nav-link ">Contact</Link>
                <Link to="/Works" className="nav-item nav-link ">Works</Link>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                <button className="nav-link" onClick={() => setLanguage('fr')}>fr</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => setLanguage('en')}>en</button>
                </li>
            </ul>
        </div>
    </nav>


export default Navbar