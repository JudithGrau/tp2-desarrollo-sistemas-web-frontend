import { useEffect, useState } from 'react'

// API pública: GitHub REST API (sin clave, consultable desde el navegador)
const INTEGRANTES = [
  { nombre: 'Judith Grau', usuario: 'JudithGrau' },
  { nombre: 'Matías Jara', usuario: 'matijara11' },
  { nombre: 'Lucas Luccaroni', usuario: 'lucasluccaroni' },
  { nombre: 'Mauro Flores', usuario: 'floresmauroezequiel1992-beep' },
]

export default function ApiView() {
  const [perfiles, setPerfiles] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function cargar() {
      try {
        setCargando(true)
        setError(null)
        const respuestas = await Promise.all(
          INTEGRANTES.map(async (i) => {
            const res = await fetch(`https://api.github.com/users/${i.usuario}`, {
              signal: controller.signal,
            })
            if (!res.ok) throw new Error(`GitHub respondió ${res.status} para ${i.usuario}`)
            const data = await res.json()
            return { ...data, nombreReal: i.nombre }
          })
        )
        setPerfiles(respuestas)
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message)
      } finally {
        setCargando(false)
      }
    }

    cargar()
    return () => controller.abort()
  }, [])

  return (
    <div className="page-container">
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner">
            <span className="eyebrow">API pública</span>
            <h1 className="profile-name">GitHub REST API</h1>
            <p className="profile-bio-text">
              Esta sección consulta la API pública de GitHub (<code>api.github.com/users</code>) y
              muestra, para cada integrante del equipo, su avatar, repositorios públicos, seguidores
              y fecha de creación de la cuenta. No requiere clave privada.
            </p>
          </div>
        </div>
      </section>

      {cargando && (
        <p className="profile-bio-text" aria-live="polite">
          Cargando perfiles de GitHub…
        </p>
      )}

      {error && (
        <p className="profile-bio-text" role="alert" style={{ color: '#ef4444' }}>
          No se pudieron cargar los datos: {error}. Probá de nuevo en unos minutos.
        </p>
      )}

      {!cargando && !error && (
        <section className="profile-section">
          <div className="team-grid profile-cards-grid">
            {perfiles.map((p) => (
              <article key={p.id} className="double-bezel">
                <div className="double-bezel-inner h-100 text-center">
                  <div className="member-avatar-slot profile-avatar-wrapper">
                    <img
                      src={p.avatar_url}
                      alt={`Avatar de ${p.nombreReal}`}
                      className="member-avatar-img"
                    />
                  </div>
                  <span className="eyebrow">@{p.login}</span>
                  <h3 className="mb-3">{p.nombreReal}</h3>
                  <ul className="profile-list">
                    <li>
                      <strong className="text-blue">Repositorios públicos:</strong> {p.public_repos}
                    </li>
                    <li>
                      <strong className="text-blue">Seguidores:</strong> {p.followers}
                    </li>
                    <li>
                      <strong className="text-blue">Cuenta creada:</strong>{' '}
                      {new Date(p.created_at).toLocaleDateString('es-AR')}
                    </li>
                  </ul>
                  <a
                    href={p.html_url}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
