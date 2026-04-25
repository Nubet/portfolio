import { Home, MoveLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>

      <div className={styles.content}>
        <div className={styles.errorCodeContainer}>
          <h1 className={styles.errorCode}>404</h1>
          <span className={styles.badge}>NOT FOUND</span>
        </div>

        <div className={styles.messageBox}>
          <h2 className={styles.messageTitle}>LOST IN THE GRID?</h2>
          <p className={styles.messageText}>
              Sorry, that page doesn't exist.
          </p>
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.backButton}>
            <MoveLeft size={24} strokeWidth={3} />
            RETURN TO HOME
            <Home size={24} strokeWidth={3} />
          </Link>
        </div>
      </div>

      <div className={styles.gridOverlay}></div>
    </div>
  )
}
