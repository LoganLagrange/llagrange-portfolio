import React from 'react'
import './style.css'
import NavBar from '../Navbar'
// import profilePic from '../../assets/PXL_20240111_025422342-cropped.jpg'

function Header(props) {

    return (
        <header>
            {/* <img src={profilePic} alt="Profile Picture" /> */}
            <h1>Logan Lagrange</h1>
            <NavBar />
        </header>
    )
}


export default Header;