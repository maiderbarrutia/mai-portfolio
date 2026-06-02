import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '1rem',
      padding: '2rem',
      textAlign: 'center',
      background: 'var(--color-background)',
      color: 'var(--color-text)',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
        404
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', margin: 0 }}>
        Página no encontrada
      </p>
      <Link
        href="/"
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          background: 'var(--color-primary)',
          color: '#fff',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Volver al inicio
      </Link>
    </main>
  )
}
