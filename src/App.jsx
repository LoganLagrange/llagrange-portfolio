import { useState } from 'react'
import './App.css'
import profilePic from './assets/PXL_20240111_025422342-cropped.jpg'
import Header from './components/Header'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <Header />
  )
}

export default App
