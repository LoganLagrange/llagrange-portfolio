import React from 'react'
import './style.css'
import profilePic from '../../assets/PXL_20240111_025422342-cropped.jpg'

function About(props) {

    return (
        <div className='about-div'>
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile Picture" />
            <p>
            I'm baby poke kinfolk live-edge brunch, fingerstache man braid tacos. 
            8-bit same helvetica direct trade. Same dreamcatcher single-origin coffee beard. 
            Butcher glossier dreamcatcher tumblr kickstarter, sriracha praxis retro actually XOXO sustainable fashion axe.
            </p>
        </div>

    )
}

export default About;