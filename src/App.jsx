import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <About />
    <Newsletter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <Footer />
    </>
  )
}

export default App
