import { useState } from 'react'
import { lazy, Suspense } from 'react'
import Header from './componentes/Header'
import HeroSection from './componentes/HeroSection'


const AboutSection = lazy(() => import('./componentes/AboutSection'))
const Skills = lazy(() => import('./componentes/Skills'))
const Projects = lazy(() => import('./componentes/Projects'))
const Services = lazy(() => import('./componentes/Services'))
const Resume = lazy(() => import('./componentes/Resume'))
const Contact = lazy(() => import('./componentes/Contact'))
const Footer = lazy(() => import('./componentes/Footer'))


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
