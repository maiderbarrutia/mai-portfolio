'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Lock, Eye, EyeOff, ArrowRight, Copy, Check, ChevronDown, X } from 'lucide-react';
import styles from './page.module.scss';

interface ConfidentialProject {
  title: string;
  url: string;
  description?: string;
  tech: string[];
  accent?: boolean;
}

type GateError = 'invalid' | 'expired' | 'rate-limit' | 'server' | null;

const ERROR_MESSAGES: Record<Exclude<GateError, null>, string> = {
  invalid: 'Contraseña incorrecta. Inténtalo de nuevo.',
  expired: 'Este acceso ha caducado. Pídele una contraseña nueva.',
  'rate-limit': 'Demasiados intentos. Espera unos minutos y vuelve a probar.',
  server: 'No se pudo verificar. Inténtalo más tarde.',
};

interface GenResult {
  password: string;
  label: string;
  expiresAt: string;
}

const ACCESS_LIST_KEY = 'otros-proyectos-accesses';
const ACCESS_LIST_MAX = 100;

function loadAccessList(): GenResult[] {
  try {
    const raw = localStorage.getItem(ACCESS_LIST_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const today = new Date().toISOString().slice(0, 10);
    return parsed
      .filter(
        (item): item is GenResult =>
          Boolean(item) &&
          typeof (item as GenResult).password === 'string' &&
          typeof (item as GenResult).label === 'string' &&
          typeof (item as GenResult).expiresAt === 'string' &&
          item.password.length >= 16 && // códigos del formato antiguo (15) ya no sirven
          item.expiresAt >= today
      )
      .slice(0, ACCESS_LIST_MAX);
  } catch {
    return [];
  }
}

export default function OtrosProyectosPage() {
  const [mounted, setMounted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [projects, setProjects] = useState<ConfidentialProject[]>([]);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GateError>(null);
  const [authVia, setAuthVia] = useState<'master' | 'token' | null>(null);
  const [masterSession, setMasterSession] = useState<string | null>(null);
  const [accessLabel, setAccessLabel] = useState('');
  const [accessDays, setAccessDays] = useState('30');
  const [genLoading, setGenLoading] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const [genResult, setGenResult] = useState<GenResult | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [accessList, setAccessList] = useState<GenResult[]>([]);
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem('otros-proyectos-auth') === 'true') {
      try {
        const cached = sessionStorage.getItem('otros-proyectos-data');
        if (cached) {
          setProjects(JSON.parse(cached));
          setAuthenticated(true);
          const via = sessionStorage.getItem('otros-proyectos-via');
          if (via === 'master' || via === 'token') {
            setAuthVia(via);
            setMasterSession(sessionStorage.getItem('otros-proyectos-session'));
          }
          return;
        }
      } catch {
        /* cache corrupto */
      }
      sessionStorage.removeItem('otros-proyectos-auth');
    }
  }, []);

  useEffect(() => {
    if (authenticated && authVia === 'master') {
      setAccessList(loadAccessList());
    }
  }, [authenticated, authVia]);

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
        const via: 'master' | 'token' = data.via === 'master' ? 'master' : 'token';
        setAuthVia(via);
        sessionStorage.setItem('otros-proyectos-auth', 'true');
        sessionStorage.setItem('otros-proyectos-data', JSON.stringify(data.projects));
        sessionStorage.setItem('otros-proyectos-via', via);
        if (via === 'master' && data.session) {
          setMasterSession(data.session);
          sessionStorage.setItem('otros-proyectos-session', data.session);
        } else {
          setMasterSession(null);
          sessionStorage.removeItem('otros-proyectos-session');
        }
        setPassword('');
      } else if (res.status === 401) {
        const body = await res.json().catch(() => null);
        setError(body?.error === 'expired' ? 'expired' : 'invalid');
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

  const saveAccessList = (list: GenResult[]) => {
    setAccessList(list);
    try {
      localStorage.setItem(ACCESS_LIST_KEY, JSON.stringify(list));
    } catch {
      /* almacenamiento no disponible (modo privado, cuota…) */
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setProjects([]);
    setAuthVia(null);
    setMasterSession(null);
    setAccessLabel('');
    setGenError(null);
    setGenResult(null);
    setCopiedCode(null);
    setListOpen(false);
    sessionStorage.removeItem('otros-proyectos-auth');
    sessionStorage.removeItem('otros-proyectos-data');
    sessionStorage.removeItem('otros-proyectos-via');
    sessionStorage.removeItem('otros-proyectos-session');
    setPassword('');
    setShowPassword(false);
    setError(null);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (genLoading) return;

    setGenLoading(true);
    setGenError(null);
    setCopiedCode(null);

    try {
      const res = await fetch('/api/gen-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session: masterSession,
          label: accessLabel,
          days: Number(accessDays),
        }),
      });

      if (res.ok) {
        const data: GenResult = await res.json();
        setGenResult(data);
        setAccessLabel('');
        const today = new Date().toISOString().slice(0, 10);
        const next = [
          data,
          ...accessList.filter((a) => a.password !== data.password && a.expiresAt >= today),
        ].slice(0, ACCESS_LIST_MAX);
        saveAccessList(next);
      } else if (res.status === 401) {
        setGenError('Sesión caducada. Cierra sesión y vuelve a entrar con la contraseña maestra.');
      } else if (res.status === 429) {
        setGenError('Demasiadas generaciones. Espera un poco y vuelve a probar.');
      } else {
        const body = await res.json().catch(() => null);
        setGenError(
          body?.error === 'label'
            ? 'Nombre no válido: máximo 40 caracteres y sin puntos.'
            : 'No se pudo generar. Inténtalo más tarde.'
        );
      }
    } catch {
      setGenError('No se pudo conectar. Inténtalo más tarde.');
    } finally {
      setGenLoading(false);
    }
  };

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode((c) => (c === code ? null : c)), 2000);
    } catch {
      setGenError('No se pudo copiar. Selecciona y copia a mano.');
    }
  };

  const handleRemoveAccess = (code: string) => {
    saveAccessList(accessList.filter((a) => a.password !== code));
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

            <h1 className={styles['gate__title']}>Lista de proyectos</h1>

            <div className={styles['gate__field']}>
              
              <div className={styles['gate__input-wrap']}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles['gate__input']} ${showError && (error === 'invalid' || error === 'expired') ? styles['gate__input--error'] : ''}`}
                  placeholder="Introduce la contraseña"
                  autoComplete="current-password"
                  required
                  aria-invalid={error === 'invalid' || error === 'expired'}
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
            <h1 className={styles['page__title']}>Lista de proyectos</h1>
            
            <button onClick={handleLogout} className={styles['page__logout']}>
              <Lock size={15} aria-hidden="true" />
              <span>Cerrar sesión</span>
            </button>
          </header>

          {authVia === 'master' && (
            <section className={styles['page__access']} aria-label="Generar accesos para reclutadores">
              <h2 className={styles['page__access-title']}>Generar acceso para reclutadores</h2>
              <p className={styles['page__access-hint']}>
                Genera un código por reclutador: tu nombre y la fecha van cifrados dentro del
                código — el reclutador solo ve una cadena opaca, y a ti te aparece tu etiqueta
                en los logs al entrar. Guárdalo en la lista de abajo.
              </p>

              <form onSubmit={handleGenerate} className={styles['page__access-form']}>
                <div className={styles['page__access-field']}>
                  <label htmlFor="access-label" className={styles['page__access-label']}>
                    Nombre o empresa
                  </label>
                  <input
                    id="access-label"
                    type="text"
                    value={accessLabel}
                    onChange={(e) => setAccessLabel(e.target.value)}
                    className={styles['page__access-input']}
                    placeholder="Ej: Gentec Talent"
                    maxLength={40}
                    required
                  />
                </div>

                <div className={styles['page__access-field']}>
                  <label htmlFor="access-days" className={styles['page__access-label']}>
                    Duración
                  </label>
                  <select
                    id="access-days"
                    value={accessDays}
                    onChange={(e) => setAccessDays(e.target.value)}
                    className={styles['page__access-select']}
                  >
                    <option value="7">7 días</option>
                    <option value="30">1 mes</option>
                    <option value="60">2 meses</option>
                    <option value="90">3 meses</option>
                    <option value="180">6 meses</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={styles['page__access-submit']}
                  disabled={!accessLabel.trim() || genLoading}
                >
                  {genLoading ? 'Generando…' : 'Generar contraseña'}
                </button>
              </form>

              {genResult && (
                <div className={styles['page__access-result']}>
                  <p className={styles['page__access-result-title']}>
                    Contraseña para <strong>{genResult.label}</strong> · caduca el{' '}
                    {genResult.expiresAt.split('-').reverse().join('/')}
                  </p>
                  <div className={styles['page__access-token-wrap']}>
                    <code className={styles['page__access-token']}>{genResult.password}</code>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(genResult.password)}
                      className={styles['page__access-copy']}
                    >
                      {copiedCode === genResult.password ? (
                        <Check size={15} aria-hidden="true" />
                      ) : (
                        <Copy size={15} aria-hidden="true" />
                      )}
                      <span>{copiedCode === genResult.password ? 'Copiada' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
              )}

              {genError && (
                <p className={styles['page__access-error']} role="alert">
                  {genError}
                </p>
              )}

              <div className={styles['page__access-list']}>
                <button
                  type="button"
                  onClick={() => setListOpen((v) => !v)}
                  className={styles['page__access-list-toggle']}
                  aria-expanded={listOpen}
                >
                  <span>Códigos generados ({accessList.length})</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </button>

                {listOpen && (
                  <>
                    <ul className={styles['page__access-list-items']}>
                      {accessList.length === 0 && (
                        <li className={styles['page__access-list-empty']}>
                          Aún no has generado códigos en este dispositivo.
                        </li>
                      )}
                      {accessList.map((item) => (
                        <li key={item.password} className={styles['page__access-item']}>
                          <span className={styles['page__access-item-label']}>{item.label}</span>
                          <code className={styles['page__access-item-code']}>{item.password}</code>
                          <span className={styles['page__access-item-date']}>
                            Caduca {item.expiresAt.split('-').reverse().join('/')}
                          </span>
                          <div className={styles['page__access-item-actions']}>
                            <button
                              type="button"
                              onClick={() => handleCopyCode(item.password)}
                              className={styles['page__access-item-copy']}
                              aria-label={`Copiar código de ${item.label}`}
                            >
                              {copiedCode === item.password ? (
                                <Check size={14} aria-hidden="true" />
                              ) : (
                                <Copy size={14} aria-hidden="true" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemoveAccess(item.password)}
                              className={styles['page__access-item-remove']}
                              aria-label={`Quitar ${item.label} de la lista`}
                            >
                              <X size={14} aria-hidden="true" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {accessList.length > 0 && (
                      <p className={styles['page__access-list-note']}>
                        Quitar de la lista no invalida el código; para invalidar todos a la vez,
                        cambia la contraseña maestra.
                      </p>
                    )}
                  </>
                )}
              </div>
            </section>
          )}

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