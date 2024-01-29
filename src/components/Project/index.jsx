import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project(imgSrc, deployedLink, heading, githubLink, techs) {

    return (
        <div className='project-card'>
            <img src={imgSrc} alt="" className='project-image' />
            <div className='project-info-div'>
                <a href={deployedLink}>
                    <h3 className='card-heading'>{heading}</h3>
                </a>
                <a href={githubLink}>
                    <FontAwesomeIcon icon={faGithub} style={{ padding: '10px' }} className='project-social-icon' />
                </a>
                <p className='project-techs'>{techs}</p>
            </div>
        </div>
    )
}

export default Project;