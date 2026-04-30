import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* Decorative Bauhaus Shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>

      <div className={styles.copy}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
              NORBERT<br />
              FILA.
          </h1>
          <span className={styles.badge}>SOFTWARE DEV</span>
        </div>

        <p className={styles.subhead}>
          TRANSFORMING RAW IDEAS<br />
          INTO WORKING SOLUTIONS.
        </p>
        
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
              VIEW WORK <ArrowRight size={24} strokeWidth={3} />
          </a>

          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/nobert-fila/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={28} strokeWidth={2.5} />
            </a>
            <a href="https://github.com/nubet" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <Github size={28} strokeWidth={2.5} />
            </a>
            <a href="mailto:nubet2137@gmail.com" className={styles.socialIcon} aria-label="Email">
              <Mail size={28} strokeWidth={2.5} />
            </a>
            <Link to="/resume.pdf" target="_blank" className={styles.socialIcon} aria-label="Resume / CV">
              <FileText size={28} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.portraitWrapper}>
          <img
            src='profile/avatar.jpg'
            alt="Portrait"
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.portraitFrame}></div>
        </div>
      </div>
    </header>
  )
}
