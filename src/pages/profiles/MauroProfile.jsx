import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgMauro from "../../assets/mauro.png";

const mauroData = {
  name: "Mauro Flores",
  role: "Estudiante de Desarrollo de Software",
  teamRole: "Bitácora, API y árbol de renderizado",
  city: "Buenos Aires, Argentina",
  bio: "Estudio la Tecnicatura Superior en Desarrollo de Software en el IFTS N°29, en este TP2 me encargué del consumo de la API, el árbol de renderizado, la bitácora y mi perfil.",
  github: "https://github.com/floresmauroezequiel1992-beep",
  skills: [
    { title: "QA Manual", desc: "Diseño de casos de prueba y reporte de bugs (certificación Coderhouse)." },
    { title: "Bases de datos", desc: "SQL y MySQL (certificación GCBA)." },
    { title: "React & JavaScript", desc: "Componentes funcionales, estado y consumo de APIs con fetch." }
  ],
  movies: [
  { title: "Buenos muchachos", desc: "Martin Scorsese (1990). Sigue la vida de Henry Hill, desde que de adolescente se acerca a la mafia de Nueva York hasta convertirse en uno de sus integrantes. Un retrato crudo del atractivo y el precio de ese mundo, basado en hechos reales." },
  { title: "Perdidos en Tokio", desc: "Sofia Coppola (2003). En un viaje de trabajo a Japón, un actor veterano y una joven recién casada, ambos desorientados, se encuentran en un hotel y arman una amistad inesperada. Una película íntima sobre la soledad y la conexión." },
  { title: "Hereditary", desc: "Ari Aster (2018). Tras la muerte de su madre, una familia empieza a sufrir hechos cada vez más perturbadores. Terror psicológico sobre el duelo y los secretos familiares, con mucha tensión y poco recurso fácil." }

  ],
  albums: [
    { title: "Blood Sugar Sex Magik", artist: "Red Hot Chili Peppers" },
    { title: "Jar of Flies", artist: "Alice in Chains" },
    { title: "Discovery", artist: "Daft Punk" }
  ]
};

export default function MauroProfile() {
  const [recommendation, setRecommendation] = useState(null);

  // Interacción: elige al azar una película o un disco de Mauro
  const handleGenerateRecommendation = () => {
    const list = [
      ...mauroData.movies.map((m) => ({ type: "Cine", text: `${m.title} (${m.desc})` })),
      ...mauroData.albums.map((a) => ({ type: "Música", text: `${a.title} — ${a.artist}` }))
    ];
    const filtered = list.filter((item) => !recommendation || item.text !== recommendation.text);
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    setRecommendation(random);
  };

  return (
    <div className="profile-container">
      <Link to="/" className="btn-back">← Volver a la portada</Link>

      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner profile-hero-layout">
            <div className="member-avatar-slot profile-avatar-wrapper">
              <img src={imgMauro} 
              alt={`Foto de ${mauroData.name}`} 
              className="member-avatar-img"
              />
            </div>
            
            <div className="profile-details">
              <span className="eyebrow">{mauroData.teamRole}</span>
              <h1 className="profile-name">{mauroData.name}</h1>
              <p className="profile-role">{mauroData.role}</p>

              <div className="profile-meta-info">
                <p><strong>📍 Ciudad:</strong> {mauroData.city}</p>
              </div>

              <p className="profile-bio-text">{mauroData.bio}</p>

              <div className="profile-socials">
                <a
                  href={mauroData.github}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="team-grid profile-cards-grid">
          <article className="double-bezel">
            <div className="double-bezel-inner h-100">
              <span className="eyebrow">⚡ Skills</span>
              <h3 className="mb-3">Habilidades</h3>
              <ul className="profile-list">
                {mauroData.skills.map((skill, index) => (
                  <li key={index}>
                    <strong className="text-blue">{index + 1}. {skill.title}:</strong> {skill.desc}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="double-bezel">
            <div className="double-bezel-inner h-100">
              <span className="eyebrow">🎬 Cine</span>
              <h3 className="mb-3">Películas Favoritas</h3>
              <ul className="profile-list">
                {mauroData.movies.map((movie, index) => (
                  <li key={index}>
                    <strong className="text-accent">{index + 1}. {movie.title}:</strong> {movie.desc}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="double-bezel">
            <div className="double-bezel-inner h-100">
              <span className="eyebrow">💿 Música</span>
              <h3 className="mb-3">Discos Favoritos</h3>
              <ul className="profile-list">
                {mauroData.albums.map((album, index) => (
                  <li key={index}>
                    <strong className="text-blue">{index + 1}. {album.title}</strong> — {album.artist}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="profile-section-dynamic">
        <div className="double-bezel">
          <div className="double-bezel-inner text-center">
            <span className="eyebrow">Interacción Dinámica</span>
            <h3>¿Querés una recomendación de Mauro?</h3>
            <p className="profile-bio-text">
              Hacé clic para generar al azar una película o un disco de mis favoritos.
            </p>

            <button
              className="btn btn-primary"
              type="button"
              onClick={handleGenerateRecommendation}
            >
              Generar recomendación ✦
            </button>

            {recommendation && (
              <div className="dynamic-display mt-4" aria-live="polite">
                <span className="badge-role">{recommendation.type}</span>
                <p className="mt-2 text-highlight">"{recommendation.text}"</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
