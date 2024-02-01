import React from 'react'
import './style.css'
import profilePic from '../../assets/PXL_20240111_025422342-cropped.jpg'

function About(props) {

    return (
        <div className='about-div'>
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile Picture" />
            <p>
            Born and raised in Northwestern Ontario with a background in the culinary arts and restaurant management. 
            I have a passion for technology as well as the outdoors and an attitude of always learning and improving in everything I do.
            Recently having earning a certificate in Full Stack Web Development from the University of Toronto this page is intended
            to outline some of my work and provide information on how to contact me. My resume is also available to download.
            </p>
        </div>

    )
}

export default About;