import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {

    return (
        <footer>
        <FontAwesomeIcon icon={faGithub} style={{padding: '20px'}} className='social-icon'/>
        <FontAwesomeIcon icon={faLinkedin} style={{padding: '20px'}} className='social-icon'/>
        </footer>
    )
}

export default Footer;