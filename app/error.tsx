'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
        Error
      </h1>
      <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', margin: 0 }}>
        Algo salió mal. Intenta de nuevo.
      </p>
      <button
        onClick={reset}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          background: 'var(--color-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.75rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Intentar de nuevo
      </button>
    </main>
  )
}
