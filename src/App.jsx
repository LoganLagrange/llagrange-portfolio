import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Resume from './components/Resume'
import CRUDTalkerPicture from './assets/crud-talker-ss.png'
import pictionarEhPicture from "./assets/pictionar-eh-picture.png"

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const projects = [
    {
        imgSrc: CRUDTalkerPicture,
        deployedLink: 'https://crudtalker-a62963a0a4c5.herokuapp.com/',
        heading: 'CRUD-Talker',
        githubLink: 'https://github.com/LoganLagrange/CRUD-Talker',
        techs: 'Express, MySQL, Sequelize, Handlebars, Socket.io'
    },
    {
      imgSrc: pictionarEhPicture,
      deployedLink: 'https://pictionar-eh.netlify.app/',
      heading: 'Pictionar-Eh',
      githubLink: 'https://github.com/LoganLagrange/pictionar-eh',
      techs: 'React, Socket.io, Express, Sequelize'
    }
]
  return (
    <>
    <Header setActiveSection={setActiveSection} />
    {activeSection === 'about' && <About />}
    {activeSection === 'portfolio' && 
    <div className='portfolio-div'>
        {projects.map((project, index) => {
            console.log(project);
            return <Project key={index} project={project} />
        })}
    </div>
    }
    {/* {activeSection === 'contact' && <Contact/>} */}
    {activeSection === 'resume' && <Resume />}
    <Footer />
    </>
  )
}

export default App
