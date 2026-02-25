import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.cta}>
        <h2 className={styles.heading}>LET'S BUILD SOMETHING.</h2>
        <p className={styles.subhead}>
          HAVE A PROJECT, IDEA, OR COLLABORATION IN MIND?
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="mailto:nubet2137@gmail.com">
            START A CONVERSATION <ArrowUpRight size={24} strokeWidth={3} />
          </a>
          <div className={styles.secondaryActions}>
            <a href="https://www.linkedin.com/in/nobert-fila/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={24} strokeWidth={2.5} /> LINKEDIN
            </a>
            <a href="https://github.com/nubet" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={24} strokeWidth={2.5} /> GITHUB
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.text}>&copy; {new Date().getFullYear()} NORBERT FILA. ALL RIGHTS RESERVED.</p>
        <div className={styles.shapes}>
           <div className={styles.shapeSmallCircle}></div>
           <div className={styles.shapeSmallSquare}></div>
        </div>
      </div>
    </footer>
  )
}
