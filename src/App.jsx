import { useState } from 'react'
import Header from './componentes/Header'
import HeroSection from './componentes/HeroSection'
import AboutSection from './componentes/AboutSection'
import Resume from './componentes/Resume'
import Skills from './componentes/Skills'
import Projects from './componentes/Projects'
import Contact from './componentes/Contact'
import Footer from './componentes/Footer'
import Services from './componentes/Services'



function App() {

  return (
    <main >
      <Header />
      <HeroSection />
      <AboutSection />
      <Skills />
       <Projects />
      <Services />
     
      <Resume />
      <Contact />
      <Footer />

      
    </main>
  )
}

export default App
