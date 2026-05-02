import Projects from '../components/Projects/Projects.tsx'
import Hero from '../components/Hero/Hero'
import Career from '../components/Career/Career'
import Education from '../components/Education/Education'
import Skills from '../components/Skills/Skills'
import ContactConsole from '../components/Inspiration/ContactConsole.tsx'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import { setSeo } from '../utils/seo'

export default function Home() {
  useEffect(() => {
    setSeo({
      title: 'Norbert Fila - Software Developer Portfolio',
      description:
        'Portfolio of Norbert Fila, a full-stack software developer and Computer Science student building modern web applications, cross-platform mobile products, and low-level engineering solutions.',
      canonicalUrl: 'https://norbertfila.com/portfolio/',
    })
  }, [])

  return (
    <div className="page">
      <Hero />
      <Projects />
      <Career />
      <Education />
      <Skills />
      <ContactConsole />
      <Footer />
    </div>
  )
}
