import styles from './ContactConsole.module.css'

export default function ContactConsole() {
  return (
    <section className="section" id="inspiration">
      <div className={styles.container}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <div className={styles.windowTitle}>SYSTEM_PROMPT: CONNECT</div>
          </div>
          <div className={styles.terminal}>
            <div className={styles.line}>
              <span className={styles.tokenPrompt}>ACTION REQUIRED:</span>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenText}>ESTABLISH CONNECTION WITH DEVELOPER</span>
            </div>
            <div className={styles.line}>
               <br/>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenKey}>STATUS:</span>{' '}
              <span className={styles.tokenValue}>READY FOR NEW CHALLENGES</span>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenKey}>TARGET:</span>{' '}
              <span className={styles.tokenValue}>NUBET2137@GMAIL.COM</span>
            </div>
            <div className={styles.line}>
               <br/>
            </div>
            <div className={styles.line}>
              <span className={styles.tokenPrompt}>&gt;</span>{' '}
              <a className={styles.actionButton} href="mailto:nubet2137@gmail.com">
                INITIALIZE CONTACT SEQUENCE
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="shape-square" style={{ position: 'absolute', left: '-20px', bottom: '-20px', zIndex: -1, background: 'var(--color-red)' }}></div>
      </div>
    </section>
  )
}
