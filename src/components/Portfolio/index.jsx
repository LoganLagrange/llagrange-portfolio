import React from 'react'
import Project from '../Project'

function Portfolio() {

    const projects = [
        {
            imgSrc: '../../assets/crud-talker-ss',
            deployedLink: 'https://crudtalker-a62963a0a4c5.herokuapp.com/',
            heading: 'CRUD-Talker',
            githubLink: 'https://github.com/LoganLagrange/CRUD-Talker',
            techs: 'Express, MySQL, Sequelize, Handlebars, Socket.io'
        }
    ]
  return (
    <div className='portfolio-div'>
        {projects.map((project, index) => {
            console.log(project);
            return <Project key={index} project={project} />
        })}
    </div>
  )
}

export default Portfolio;