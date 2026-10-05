import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgJudith from '../../assets/judith.png';

const judithData = {
  name: 'Judith Grau',
  role: 'Full Stack Developer & Diseño UX',
  teamRole: 'Coordinación & Portada',
  city: 'Buenos Aires, Argentina',
  birthday: '29 de noviembre',
  bio: 'Desarrollo soluciones web funcionales e intuitivas combinando desarrollo Frontend, Backend y experiencia de usuario. En este TP2 asumí la coordinación de la arquitectura modular, el sistema de rutas compartidas y la integración de componentes.',
  github: 'https://github.com/JudithGrau',
  linkedin: 'https://www.linkedin.com/in/judithgrau',
  skills: [
    { title: 'React & JavaScript Moderno', desc: 'Desarrollo de interfaces escalables, componentes funcionales y manejo de estado.' },
    { title: 'HTML5 Semántico & CSS Modular', desc: 'Maquetación accesible, diseño responsive y arquitectura de tokens.' },
    { title: 'Java & Spring Boot', desc: 'Creación y consumo de servicios y APIs REST seguras.' },
    { title: 'UX/UI & Prototipado', desc: 'Diseño en Figma centrado en flujos y usabilidad.' }
  ],
  movies: [
    { title: 'Interstellar', desc: 'Una obra maestra visual sobre ciencia, tiempo y perseverancia.' },
    { title: 'The Social Network', desc: 'El retrato fundacional del desarrollo de producto y código.' },
    { title: 'Inception', desc: 'Arquitectura mental llevada a una narrativa estructurada e impecable.' }
  ],
  albums: [
    { title: 'Random Access Memories', artist: 'Daft Punk' },
    { title: 'Currents', artist: 'Tame Impala' },
    { title: 'Abbey Road', artist: 'The Beatles' }
  ],
  recommendations: [
    { type: 'Música', text: 'Random Access Memories (Daft Punk) en loop para entrar en estado de flow con código CSS limpio.' },
    { type: 'Cine', text: 'The Social Network para recargar motivación antes de planificar la arquitectura de un nuevo proyecto.' },
    { type: 'Música', text: 'Currents (Tame Impala) para sesiones intensas de debugging de componentes y rutas.' },
    { type: 'Cine', text: 'Interstellar cuando necesites recordar el valor de la perseverancia resolviendo problemas complejos.' }
  ]
};

export default function JudithProfile() {
  const [recommendation, setRecommendation] = useState(null);

  const handleGenerateRecommendation = () => {
    const list = judithData.recommendations;
    const filtered = list.filter(item => !recommendation || item.text !== recommendation.text);
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
              <img 
                src={imgJudith} 
                alt={`Foto de ${judithData.name}`} 
                className="member-avatar-img" 
              />
            </div>

            <div className="profile-details">
              <span className="eyebrow">{judithData.teamRole}</span>
              <h1 className="profile-name">{judithData.name}</h1>
              <p className="profile-role">{judithData.role}</p>

              <div className="profile-meta-info">
                <p><strong>📍 Ciudad:</strong> {judithData.city}</p>
                <p><strong>🎂 Cumpleaños:</strong> {judithData.birthday}</p>
              </div>

              <p className="profile-bio-text">{judithData.bio}</p>

              <div className="profile-socials">
                <a 
                  href={judithData.github} 
                  className="btn btn-secondary" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a 
                  href={judithData.linkedin} 
                  className="btn btn-secondary" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  LinkedIn ↗
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
                {judithData.skills.map((skill, index) => (
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
                {judithData.movies.map((movie, index) => (
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
                {judithData.albums.map((album, index) => (
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
            <h3>¿Querés una recomendación de Judith para programar?</h3>
            <p className="profile-bio-text">
              Hacé clic para generar al azar una sugerencia de audio o cine ideal para entrar en foco.
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