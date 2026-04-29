import styles from './ContactConsole.module.css'

export default function ContactConsole() {
  return (
    <section className="section" id="inspiration">
      <div className={styles.container}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <div className={styles.windowTitle}>HIRE_ME: FREELANCER MODE</div>
          </div>
          <div className={styles.terminal}>
            <div className={styles.line}>
              <span className={styles.tokenPrompt}>AVAILABLE FOR:</span>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenText}>WEB/MOBILE PROJECTS FOR BUSINESSES</span>
            </div>
            <div className={styles.line}>
               <br/>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenKey}>STATUS:</span>{' '}
              <span className={styles.tokenValue}>OPEN FOR FREELANCE WORK</span>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenKey}>FOCUS:</span>{' '}
              <span className={styles.tokenValue}>TRUST-BUILDING SITES THAT ATTRACT CLIENTS</span>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenKey}>MAINLY:</span>{' '}
              <span className={styles.tokenValue}>LANDING PAGES, CONTACT FORMS, ONE-PAGERS</span>
            </div>
            <div className={styles.line}>
               <br/>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenPrompt}>&gt;</span>{' '}
              <a className={styles.actionButton} href="https://useme.com/pl/roles/contractor/norbert-fila,272854/" target="_blank" rel="noopener noreferrer">
                HIRE ME ON USEME
              </a>
            </div>
          </div>
        </div>
        <div className="shape-square" style={{ position: 'absolute', left: '-20px', bottom: '-20px', zIndex: -1, background: 'var(--color-red)' }}></div>
      </div>
    </section>
  )
}
