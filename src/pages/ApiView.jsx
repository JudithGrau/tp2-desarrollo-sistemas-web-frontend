import {useEffect, useState} from 'react';
import "./pages-mauro.css";


//API publica: github REST API
const INTEGRANTES = [
  {nombre: "Judith Grau", usuario: "JudithGrau" },
  {nombre: "Matias Jara", usuario: "matijara11" },
  {nombre: "Lucas Luccaroni", usuario: "lucasluccaroni" },
  {nombre: "Mauro Flores", usuario: "floresmauroezequiel1992-beep" },
]

export default function ApiView() {
  const [perfiles, setPerfiles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function cargar() {
      try {
        setCargando(true);
        setError(null);
        const respuestas = await Promise.all(
          INTEGRANTES.map(async (i) => {
            const res = await fetch(`https://api.github.com/users/${i.usuario}`, { 
              signal: controller.signal 
            });
            if (!res.ok) 
              throw new Error(`github respondio ${res.status} para ${i.usuario}`);
            const data = await res.json();
            return { ...data, nombreReal: i.nombre };
})
        )
        setPerfiles(respuestas);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
        } finally {
          setCargando(false);
        }
    }
    cargar();
    return () => controller.abort()
  }, [])

  return (
    <section className="page-mauro">
      <h1>API publica: GitHub </h1>
      <p className="page-intro"> Esta sección consulta la API pública de GitHub (<code>api.github.com/users</code>) y muestra, para cada integrante del equipo, su avatar, repositorios públicos, seguidores y fecha de creación de la cuenta. No requiere clave privada.</p>

{cargando && <p className="estado estado-carga"> Cargando perfiles de Github... </p>}

{error && (
  <p className="estado estado-error" role="alert"> 
  No se pudieron cargar los datos: {error}. Probá de nuevo en unos minutos.</p>
)}

{!cargando && !error && (
  <div className="api-grid">
    {perfiles.map((p) => (
      <article key={p.id} className="api-card">
        <img src={p.avatar_url} alt={"avatar de ${p.nombreReal}"} width="80" height="80"/>
        <h2>{p.nombreReal}</h2>
        <p className="api-user">@{p.login}</p>
        <ul>
          <li>Repositorios públicos: {p.public_repos}</li>
          <li>Seguidores: {p.followers}</li>
          <li>Cuenta creada: {new Date(p.created_at).toLocaleDateString("es-AR")}</li>
        </ul>
        <a href={p.html_url} target="_blank" rel="noreferrer">Ver en GitHub</a>
       </article>
      ))}
  </div>
)}
</section>
  )
  }

