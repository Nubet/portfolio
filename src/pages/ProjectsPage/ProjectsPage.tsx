import Projects from '../../components/Projects/Projects'
import { MoveLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ProjectsPage.module.css'
import { useEffect } from 'react'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>
          <MoveLeft size={20} strokeWidth={3} /> BACK TO HOME
        </Link>
        <h1 className={styles.title}>ALL PROJECTS.</h1>
      </header>

      <Projects all={true} />
    </div>
  )
}
