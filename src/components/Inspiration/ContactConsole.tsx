import styles from './ContactConsole.module.css'

export default function ContactConsole() {
  return (
    <section className="section" id="inspiration">
      <div className={styles.container}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <div className={styles.windowDots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.windowTitle}>bash — contact</div>
          </div>
          <pre className={styles.terminal}>
            <code>
              <span className={styles.line}>
                <span className={styles.tokenPrompt}>norbert@portfolio</span>
                <span className={styles.tokenPunct}>:</span>
                <span className={styles.tokenPath}>~</span>
                <span className={styles.tokenPunct}>$</span>{' '}
                <span className={styles.tokenCommand}>curl</span>{' '}
                <span className={styles.tokenCommand}>-X</span>{' '}
                <span className={styles.tokenCommand}>POST</span>{' '}
                <span className={styles.tokenUrl}>https://api.norbertfila.dev/contact</span>{' \\'}
              </span>
              <span className={styles.line}>
                <span className={styles.tokenIndent} />
                <span className={styles.tokenCommand}>-H</span>{' '}
                <span className={styles.tokenString}>{'"Content-Type: application/json"'}</span>{' \\'}
              </span>
              <span className={styles.line}>
                <span className={styles.tokenIndent} />
                <span className={styles.tokenCommand}>-d</span>{' '}
                <span className={styles.tokenString}>
                  &apos;{'{'}&quot;intent&quot;: &quot;build_something_great&quot;{'}'}&apos;
                </span>
              </span>
              <span className={styles.line}>
                <span className={styles.tokenStatus}>HTTP/1.1 202 Accepted</span>
              </span>
              <span className={styles.line}>
                <span className={styles.tokenPunct}>{'{'}</span>
              </span>
              <span className={styles.line}>
                <span className={styles.tokenIndent} />
                <span className={styles.tokenKey}>{'"status"'}</span>
                <span className={styles.tokenPunct}>:</span>{' '}
                <span className={styles.tokenString}>{'"success"'}</span>
                <span className={styles.tokenPunct}>,</span>
              </span>
              <span className={styles.line}>
                <span className={styles.tokenIndent} />
                <span className={styles.tokenKey}>{'"message"'}</span>
                <span className={styles.tokenPunct}>:</span>{' '}
                <span className={styles.tokenString}>{'"Connection established. Ready to collaborate."'}</span>
                <span className={styles.tokenPunct}>,</span>
              </span>
              <span className={styles.line}>
                <span className={styles.tokenIndent} />
                <span className={styles.tokenKey}>{'"action"'}</span>
                <span className={styles.tokenPunct}>:</span>{' '}
                <a className={styles.tokenLink} href="#contact">
                  {'"Initialize Contact"'}
                </a>
              </span>
              <span className={styles.line}>
                <span className={styles.tokenPunct}>{'}'}</span>
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
