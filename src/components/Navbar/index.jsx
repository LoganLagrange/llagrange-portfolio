import React from 'react';
import './style.css'

function NavBar(props) {
    return (
        <nav>
            <a className="navbar-link" href="">About Me</a>
            <a className="navbar-link" href="">Portfolio</a>
            <a className="navbar-link" href="">Contact</a>
            <a className="navbar-link" href="">Resume</a>
        </nav>

    )
}

export default NavBar;