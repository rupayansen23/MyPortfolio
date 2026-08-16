import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { getSectionIdFromPath } from './utils/navigation.js'

function App() {
  useEffect(() => {
    const scrollToPathSection = () => {
      const sectionId = getSectionIdFromPath(window.location.pathname)
      const element = document.getElementById(sectionId)

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    }

    scrollToPathSection()
    window.addEventListener('popstate', scrollToPathSection)

    return () => {
      window.removeEventListener('popstate', scrollToPathSection)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
