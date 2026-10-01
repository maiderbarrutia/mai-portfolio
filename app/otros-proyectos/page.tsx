'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import styles from './page.module.scss';

interface ConfidentialProject {
  title: string;
  url: string;
  description?: string;
  tech: string[];
  accent?: boolean;
}

type GateError = 'invalid' | 'rate-limit' | 'server' | null;

const ERROR_MESSAGES: Record<Exclude<GateError, null>, string> = {
  invalid: 'Contraseña incorrecta. Inténtalo de nuevo.',
  'rate-limit': 'Demasiados intentos. Espera unos minutos y vuelve a probar.',
  server: 'No se pudo verificar. Inténtalo más tarde.',
};

export default function OtrosProyectosPage() {
  const [mounted, setMounted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [projects, setProjects] = useState<ConfidentialProject[]>([]);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GateError>(null);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem('otros-proyectos-auth') === 'true') {
      try {
        const cached = sessionStorage.getItem('otros-proyectos-data');
        if (cached) {
          setProjects(JSON.parse(cached));
          setAuthenticated(true);
          return;
        }
      } catch {
        /* cache corrupto */
      }
      sessionStorage.removeItem('otros-proyectos-auth');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/otros-proyectos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        setProjects(data.projects);
        setAuthenticated(true);
        sessionStorage.setItem('otros-proyectos-auth', 'true');
        sessionStorage.setItem('otros-proyectos-data', JSON.stringify(data.projects));
        setPassword('');
      } else if (res.status === 401) {
        setError('invalid');
        setPassword('');
      } else if (res.status === 429) {
        setError('rate-limit');
      } else {
        setError('server');
      }
    } catch {
      setError('server');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setProjects([]);
    sessionStorage.removeItem('otros-proyectos-auth');
    sessionStorage.removeItem('otros-proyectos-data');
    setPassword('');
    setShowPassword(false);
    setError(null);
  };

  if (!mounted) {
    return (
      <>
        <Header />
        <main id="main-content" className={styles.gate} aria-busy="true">
          <div className={styles['gate__card']}>
            <div className={styles['gate__spinner']} aria-hidden="true" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!authenticated) {
    const showError = error !== null;

    return (
      <>
        <Header />
        <main id="main-content" className={styles.gate}>
          <form
            onSubmit={handleSubmit}
            className={`${styles['gate__card']} ${styles['gate__card--enter']}`}
            noValidate
          >
            <div className={styles['gate__icon']} aria-hidden="true">
              <Lock size={26} strokeWidth={2} />
            </div>

            <span className={styles['gate__tag']}>Área restringida</span>

            <h1 className={styles['gate__title']}>Otros proyectos</h1>

            <div className={styles['gate__field']}>
              
              <div className={styles['gate__input-wrap']}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles['gate__input']} ${showError && error === 'invalid' ? styles['gate__input--error'] : ''}`}
                  placeholder="Introduce la contraseña"
                  autoComplete="current-password"
                  required
                  aria-invalid={error === 'invalid'}
                  aria-describedby={showError ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className={styles['gate__toggle']}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  aria-pressed={showPassword}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {showError && (
                <p id="password-error" className={styles['gate__error']} role="alert">
                  {ERROR_MESSAGES[error]}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={styles['gate__submit']}
              disabled={!password.trim() || loading}
            >
              <span>{loading ? 'Verificando…' : 'Acceder'}</span>
              {!loading && <ArrowRight size={18} aria-hidden="true" />}
            </button>
          </form>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles['page__container']}>
          <header className={styles['page__header']}>
            <span className={styles['page__tag']}>Acceso autorizado</span>
            <h1 className={styles['page__title']}>Otros proyectos</h1>
            
            <button onClick={handleLogout} className={styles['page__logout']}>
              <Lock size={15} aria-hidden="true" />
              <span>Cerrar sesión</span>
            </button>
          </header>

          <section className={styles['page__grid']} aria-label="Proyectos confidenciales">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={[
                  styles['page__card'],
                  project.accent ? styles['page__card--accent'] : '',
                  styles['page__card--enter'],
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <h2 className={styles['page__card-title']}>{project.title}</h2>
                {project.description && (
                  <p className={styles['page__card-desc']}>{project.description}</p>
                )}
                {project.tech.length > 0 && (
                  <ul className={styles['page__card-tags']}>
                    {project.tech.map((item) => (
                      <li key={item} className={styles['page__card-tag']}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['page__card-url']}
                >
                  {project.url}
                </a>
                
              </article>
            ))}
          </section>

          <p className={styles['page__foot']}>
            ¿Necesitas ver alguno de estos proyectos en detalle?{' '}
            <a href="/#contact" className={styles['page__foot-link']}>
              Escríbeme
            </a>{' '}
            y te lo comparto de forma privada.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}