import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <main id="main-content" className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>404</h1>
      <p className={styles['not-found__message']}>Página no encontrada</p>
      <Link href="/" className={styles['not-found__link']}>
        Volver al inicio
      </Link>
    </main>
  )
}
