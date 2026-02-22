import { Github, Linkedin, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.cta}>
        <h2 className={styles.heading}>Let’s build something real.</h2>
        <p className={styles.subhead}>
          If you have a project, idea, or collaboration in mind, I’m open to talk.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="mailto:nubet2137@gmail.com">
            <Mail size={18} /> Start a conversation
          </a>
          <div className={styles.secondaryActions}>
            <a href="https://linkedin.com/in/norbert-fila" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/norbertfila" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
      <p className={styles.text}>&copy; {new Date().getFullYear()} Norbert Fila. All rights reserved.</p>
    </footer>
  )
}
