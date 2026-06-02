import styles from './SkipLink.module.scss'

export default function SkipLink() {
  return (
    <a href="#main-content" className={styles['skip-link']}>
      Saltar al contenido principal
    </a>
  )
}
