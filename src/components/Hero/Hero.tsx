import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Norbert Fila.</span>
          <h1 className={styles.title}>
              I'm Norbert, and I enjoy<br />
              <span>Transforming raw ideas</span>
              <span>Into working solutions.</span>
          </h1>
          <p className={styles.subhead}>Backend Developer</p>

        <div className={styles.socialLinks}>
           <a href="https://linkedin.com/in/norbert-fila" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
             <Linkedin size={20} />
           </a>
           <a href="https://github.com/norbertfila" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
             <Github size={20} />
           </a>
           <a href="mailto:nubet2137@gmail.com" className={styles.socialIcon} aria-label="Email">
             <Mail size={20} />
           </a>
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Resume / CV">
             <FileText size={20} />
           </a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <img
            src="https://placehold.co/600x800/2d2d2d/6ab0f3?text=Your+Image"
            alt="Portrait"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  )
}
