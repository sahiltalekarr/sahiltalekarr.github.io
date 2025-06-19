import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="font-sans scroll-smooth">
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}

export default App
