import { useState } from 'react'
import './App.css'
import profilePic from './assets/PXL_20240111_025422342-cropped.jpg'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
    <Header />

    <Footer />
    </>
  )
}

export default App
