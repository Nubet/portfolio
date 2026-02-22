import Projects from './components/Projects/Projects.tsx'
import Hero from './components/Hero/Hero'
import Career from './components/Career/Career'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import ContactConsole from './components/Inspiration/ContactConsole.tsx'
import Footer from './components/Footer/Footer'

function App() {
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

export default App
