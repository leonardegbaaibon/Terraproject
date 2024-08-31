import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <About />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
