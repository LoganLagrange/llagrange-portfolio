import { useState } from 'react'
import './App.css'
import profilePic from './assets/PXL_20240111_025422342-cropped.jpg'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import Resume from './components/Resume'
import CRUDTalkerPicture from './assets/crud-talker-ss.png'

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const projects = [
    {
        imgSrc: CRUDTalkerPicture,
        deployedLink: 'https://crudtalker-a62963a0a4c5.herokuapp.com/',
        heading: 'CRUD-Talker',
        githubLink: 'https://github.com/LoganLagrange/CRUD-Talker',
        techs: 'Express, MySQL, Sequelize, Handlebars, Socket.io'
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
    {activeSection === 'contact' && <Contact/>}
    {activeSection === 'resume' && <Resume />}
    <Footer />
    </>
  )
}

export default App
