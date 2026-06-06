'use client'
import styles from './error.module.scss'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main id="main-content" className={styles['error-page']}>
      <h1 className={styles['error-page__title']}>Error</h1>
      <p className={styles['error-page__message']}>Algo salió mal. Intenta de nuevo.</p>
      <button className={styles['error-page__button']} onClick={reset}>
        Intentar de nuevo
      </button>
    </main>
  )
}
