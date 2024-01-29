import { useState } from 'react'
import './App.css'
import profilePic from './assets/PXL_20240111_025422342-cropped.jpg'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div id='body-div'>
    <Header />
    <About />

    <Footer />
    </div>
  )
}

export default App
