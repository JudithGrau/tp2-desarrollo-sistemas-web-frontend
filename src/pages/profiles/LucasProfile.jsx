import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Avatar principal de Lucas
import lucasImg from '../../assets/lucas.png';

// Imágenes de películas favoritas (importadas desde assets)
import peliculaMatrix from '../../assets/other/perfil-lucas/pelicula-matrix.png';
import peliculaOdisea from '../../assets/other/perfil-lucas/pelicula-odisea.png';
import peliculaTropicThunder from '../../assets/other/perfil-lucas/pelicula-tropic-thunder.png';
import peliculaTheGame from '../../assets/other/perfil-lucas/pelicula-the-game.png';
import peliculaHombreLlamas from '../../assets/other/perfil-lucas/pelicula-hombre-llamas.png';
import peliculaFrankenstein from '../../assets/other/perfil-lucas/pelicula-frankenstein.png';

// Imágenes de discos favoritos (importadas desde assets)
import discoWeezer from '../../assets/other/perfil-lucas/disco-weezer-blue-album.png';
import discoChameleon from '../../assets/other/perfil-lucas/disco-chamaleon-sunday.jpg';
import discoDivididos from '../../assets/other/perfil-lucas/disco-divididos.jpg';
import discoAranjuez from '../../assets/other/perfil-lucas/disco-aranjuez.png';
import discoAron from '../../assets/other/perfil-lucas/disco-aron.png';

const lucasData = {
  name: 'Lucas Luccaroni',
  role: 'Full Stack & AI-Driven Developer',
  teamRole: 'Responsive & Datos Locales',
  city: 'Buenos Aires, Argentina',
  age: '27 años',
  bio: 'Desarrollador Full Stack y AI-Driven Developer enfocado en arquitecturas web escalables, desarrollo agéntico e inteligencia artificial aplicada. En este TP2 asumí la responsabilidad de la estructuración de datos locales en JSON, la sección interactiva de Recursos con filtros en tiempo real y la optimización responsive del equipo.',
  github: 'https://github.com/lucasluccaroni',
  portfolio: 'https://lucasluccaroni-portfolio.vercel.app/',
  skills: [
    {
      title: 'Frontend & Maquetación Adaptativa',
      desc: 'HTML5 semántico, CSS3 modular (Flexbox y Grid), JavaScript moderno y TypeScript, con especialización en diseño responsive y accesibilidad web.'
    },
    {
      title: 'Backend & Arquitectura de Servicios',
      desc: 'Desarrollo con Node.js, Express, C# y .NET, estructuración bajo patrón MVC y diseño de APIs REST robustas y seguras.'
    },
    {
      title: 'Bases de Datos & Persistencia',
      desc: 'Modelado, optimización y administración de bases de datos relacionales y NoSQL utilizando MySQL, Supabase, Firebase y MongoDB.'
    },
    {
      title: 'IA Aplicada & Desarrollo Agéntico',
      desc: 'Integración de modelos LLM (Ollama, Groq, OpenRouter), construcción de pipelines RAG con bases vectoriales y flujos de trabajo colaborativos Humano-IA.'
    }
  ],
  movies: [
    {
      id: 'm1',
      title: 'The Matrix',
      image: peliculaMatrix,
      tag: 'Sci-Fi / Cyberpunk',
      year: 'Año 1999',
      review: 'Obra cumbre de la ciencia ficción cyberpunk que revolucionó los efectos visuales y la narrativa sobre realidades simuladas.'
    },
    {
      id: 'm2',
      title: 'The Odyssey',
      image: peliculaOdisea,
      tag: 'Épico / Mitología',
      year: 'Año 2026',
      review: 'La ambiciosa adaptación del poema homérico dirigida por Christopher Nolan, filmada íntegramente en formato IMAX para retratar el épico viaje de Odiseo a Ítaca.'
    },
    {
      id: 'm3',
      title: 'Tropic Thunder',
      image: peliculaTropicThunder,
      tag: 'Comedia / Acción',
      year: 'Año 2008',
      review: 'Una brillante sátira sobre la industria de Hollywood y los actores de método, con un ritmo cómico impecable e interpretaciones icónicas.'
    },
    {
      id: 'm4',
      title: 'The Game',
      image: peliculaTheGame,
      tag: 'Thriller / Suspenso',
      year: 'Año 1997',
      review: 'Magistral thriller psicológico de David Fincher que sumerge al espectador en una intriga fascinante de paranoia, manipulación y control.'
    },
    {
      id: 'm5',
      title: 'Hombre en Llamas',
      image: peliculaHombreLlamas,
      tag: 'Acción / Drama',
      year: 'Año 2004',
      review: 'Intensa dirección de Tony Scott y una conmovedora actuación de Denzel Washington sobre redención, lealtad y protección incondicional.'
    },
    {
      id: 'm6',
      title: 'Frankenstein',
      image: peliculaFrankenstein,
      tag: 'Fantasía / Terror Gótico',
      year: 'Año 2025',
      review: 'La esperada reinterpretación visual de Guillermo del Toro que profundiza en la soledad de la criatura y los dilemas éticos de la creación humana.'
    }
  ],
  albums: [
    {
      id: 'a1',
      title: 'Weezer (The Blue Album)',
      artist: 'Weezer',
      image: discoWeezer,
      tag: 'Power Pop / Alt Rock',
      year: 'Año 1994',
      review: 'Clásico del rock alternativo de los noventa, repleto de estribillos memorables, distorsión cruda y temática geek inolvidable.'
    },
    {
      id: 'a2',
      title: 'Chameleon Sunday',
      artist: 'Arc De Soleil',
      image: discoChameleon,
      tag: 'Indie Surf / Funk',
      year: 'Año 2023',
      review: 'Guitarras surf retro, calidez sonora y ritmos envolventes perfectos para mantener la concentración programando.'
    },
    {
      id: 'a3',
      title: 'La Era de la Boludez',
      artist: 'Divididos',
      image: discoDivididos,
      tag: 'Rock Nacional / Funk Rock',
      year: 'Año 1993',
      review: 'Obra fundamental del rock argentino con potencia demoledora, fusión folclórica en "El Arriero" y virtuosismo puro.'
    },
    {
      id: 'a4',
      title: 'Concierto de Aranjuez',
      artist: 'Paco de Lucía & Orq. Cadaqués',
      image: discoAranjuez,
      tag: 'Flamenco / Clásico',
      year: 'Año 1991',
      review: 'Interpretación histórica donde el genio de Paco de Lucía une la solemnidad clásica de Joaquín Rodrigo con el duende flamenco.'
    },
    {
      id: 'a5',
      title: 'A Drama on Richard Street',
      artist: 'Tremendous Aron',
      image: discoAron,
      tag: 'Indie / Lo-Fi / Instrumental',
      year: 'Año 2021',
      review: 'Texturas cálidas, minimalismo y un diseño sonoro suave y envolvente para sesiones de desarrollo y concentración prolongada.'
    }
  ]
};

// Componente interactivo de Carrusel Horizontal con soporte para swipe, flechas y límites
const MediaCarousel = ({ title, subtitle, items, isAlbum = false }) => {
  const galleryRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScrollLimits = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    const tolerance = 6;
    const isAtStart = el.scrollLeft <= tolerance;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance;

    setCanScrollPrev(!isAtStart);
    setCanScrollNext(!isAtEnd);
  }, []);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    checkScrollLimits();
    el.addEventListener('scroll', checkScrollLimits);
    window.addEventListener('resize', checkScrollLimits);

    return () => {
      el.removeEventListener('scroll', checkScrollLimits);
      window.removeEventListener('resize', checkScrollLimits);
    };
  }, [checkScrollLimits]);

  const getScrollStep = () => {
    const el = galleryRef.current;
    if (!el) return 300;
    const card = el.querySelector('.media-card');
    if (!card) return el.clientWidth * 0.8;

    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap) || 24;
    const cardWidth = card.getBoundingClientRect().width;
    const singleCardStep = cardWidth + gap;

    const visibleCards = Math.floor((el.clientWidth + gap) / singleCardStep);
    const cardsToMove = visibleCards >= 3 ? 2 : 1;
    return singleCardStep * cardsToMove;
  };

  const handleScrollNext = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    }
  };

  const handleScrollPrev = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    }
  };

  return (
    <section className="profile-section">
      <div className="section-header section-header-with-controls">
        <div>
          <span className="eyebrow">{subtitle}</span>
          <h2>{title} <span className="text-accent">favoritos</span></h2>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn prev-btn"
            aria-label="Elemento anterior"
            type="button"
            onClick={handleScrollPrev}
            disabled={!canScrollPrev}
          >
            ⟨
          </button>
          <button
            className="carousel-btn next-btn"
            aria-label="Siguiente elemento"
            type="button"
            onClick={handleScrollNext}
            disabled={!canScrollNext}
          >
            ⟩
          </button>
        </div>
      </div>

      <div className="scroll-gallery-wrapper">
        <div className="scroll-gallery" ref={galleryRef}>
          {items.map((item) => (
            <article
              key={item.id}
              className={`media-card ${isAlbum ? 'album-card' : 'movie-card'}`}
              tabIndex={0}
            >
              <img
                src={item.image}
                alt={`Portada de ${item.title}`}
                className="media-poster"
                loading="lazy"
              />
              <div className="media-overlay">
                <span className="media-tag">{item.tag}</span>
                <h3 className="media-overlay-title">{item.title}</h3>
                {item.artist && <div className="media-overlay-artist">{item.artist}</div>}
                <div className="media-overlay-meta">{item.year}</div>
                <p className="media-overlay-review">{item.review}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function LucasProfile() {
  const [avatarError, setAvatarError] = useState(false);
  const [recomendacion, setRecomendacion] = useState(null);

  // Componente interactivo dinámico (Criterio 08 - Nivel Propone)
  const generarRecomendacionAleatoria = () => {
    const catalogo = [
      ...lucasData.movies.map((m) => ({
        tipo: 'Película',
        titulo: m.title,
        detalle: m.review,
        tag: m.tag,
        year: m.year
      })),
      ...lucasData.albums.map((a) => ({
        tipo: 'Disco',
        titulo: `${a.title} — ${a.artist}`,
        detalle: a.review,
        tag: a.tag,
        year: a.year
      }))
    ];

    const opcionesFiltradas = catalogo.filter(
      (item) => !recomendacion || item.titulo !== recomendacion.titulo
    );
    const elegida = opcionesFiltradas[Math.floor(Math.random() * opcionesFiltradas.length)];
    setRecomendacion(elegida);
  };

  return (
    <div className="profile-container">
      <Link to="/" className="btn-back">← Volver a la portada</Link>

      {/* 1. Tarjeta Principal de Presentación (Double-Bezel) */}
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner profile-hero-layout">
            <div className="member-avatar-slot profile-avatar-wrapper">
              {!avatarError ? (
                <img
                  src={lucasImg}
                  alt={`Avatar de ${lucasData.name}`}
                  className="member-avatar-img"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="member-avatar-icon">💻</div>
              )}
            </div>

            <div className="profile-details">
              <span className="eyebrow">{lucasData.teamRole}</span>
              <h1 className="profile-name">{lucasData.name}</h1>
              <p className="profile-role">{lucasData.role}</p>

              <div className="profile-meta-info">
                <p><strong>📍 Ciudad:</strong> {lucasData.city}</p>
                <p><strong>🎂 Edad:</strong> {lucasData.age}</p>
              </div>

              <p className="profile-bio-text">{lucasData.bio}</p>

              <div className="profile-socials">
                <a
                  href={lucasData.github}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  href={lucasData.portfolio}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portafolio ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sección: 4 Habilidades Obligatorias */}
      <section id="habilidades" className="profile-section">
        <div className="double-bezel">
          <div className="double-bezel-inner profile-hero-layout">
            <div className="profile-details" style={{ width: '100%' }}>
              <span className="eyebrow">Skills & Especialidades</span>
              <h3 className="mb-3">Habilidades Técnicas</h3>
              <ul className="profile-list">
                {lucasData.skills.map((skill, index) => (
                  <li key={index}>
                    <strong className="text-blue">{index + 1}. {skill.title}:</strong> {skill.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Componente Dinámico Interactivo Propio (Criterio 08 - Nivel Propone) */}
      <section className="profile-section">
        <div className="double-bezel">
          <div className="double-bezel-inner text-center">
            <span className="eyebrow">Interactividad del Perfil</span>
            <h3 className="mb-2">¿Qué te recomienda Lucas hoy?</h3>
            <p className="profile-bio-text mb-4" style={{ maxWidth: '640px', margin: '0 auto 20px auto' }}>
              Presiona el botón para obtener de forma aleatoria una recomendación curada entre su catálogo favorito de cine y música.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={generarRecomendacionAleatoria}
            >
              Descubrir recomendación aleatoria
            </button>

            {recomendacion && (
              <div
                style={{
                  marginTop: '24px',
                  padding: '20px',
                  backgroundColor: 'rgba(7, 26, 31, 0.75)',
                  border: '1px solid var(--color-blue)',
                  borderRadius: 'var(--radius-medium)',
                  textAlign: 'left',
                  maxWidth: '560px',
                  margin: '24px auto 0 auto',
                  animation: 'fadeInRecurso 300ms ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="badge badge-coral">{recomendacion.tipo}</span>
                  <small style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-title)' }}>{recomendacion.year}</small>
                </div>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.2rem', marginBottom: '6px' }}>{recomendacion.titulo}</h4>
                <p style={{ color: 'var(--color-blue)', fontSize: '0.85rem', marginBottom: '10px' }}>{recomendacion.tag}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>{recomendacion.detalle}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Carrusel Horizontal de Películas Favoritas */}
      <MediaCarousel
        title="Películas"
        subtitle="Cinematografía"
        items={lucasData.movies}
        isAlbum={false}
      />

      {/* 5. Carrusel Horizontal de Discos Favoritos */}
      <MediaCarousel
        title="Discos"
        subtitle="Colección Sonora"
        items={lucasData.albums}
        isAlbum={true}
      />
    </div>
  );
}