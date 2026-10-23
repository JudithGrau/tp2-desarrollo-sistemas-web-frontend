import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Avatar principal
import matiasImg from '../../assets/matias.png';

// Películas
import pelicula1 from '../../assets/other/perfil-mati/pelicula-1.png';
import pelicula2 from '../../assets/other/perfil-mati/pelicula-2.png';
import pelicula3 from '../../assets/other/perfil-mati/pelicula-3.png';
import pelicula4 from '../../assets/other/perfil-mati/pelicula-4.png';
import pelicula5 from '../../assets/other/perfil-mati/pelicula-5.png';

// Discos
import disco1 from '../../assets/other/perfil-mati/disco-1.png';
import disco2 from '../../assets/other/perfil-mati/disco-2.png';
import disco3 from '../../assets/other/perfil-mati/disco-3.png';
import disco4 from '../../assets/other/perfil-mati/disco-4.png';
import disco5 from '../../assets/other/perfil-mati/disco-5.png';
import disco6 from '../../assets/other/perfil-mati/disco-6.png';
import disco7 from '../../assets/other/perfil-mati/disco-7.png';

const matiasData = {
  name: 'Matías Jara',
  role: 'Front End Developer',
  teamRole: 'Sistema Visual & Perfil',
  city: 'San Salvador de Jujuy, Argentina',
  age: '29 años',
  bio: 'Apasionado por la música y los videojuegos. Estudié composición musical, diseño de sonido y desarrollo de audio para videojuegos, lo cual me llevó al mundo de la programación. En este proyecto me encargué del sistema visual en CSS con tokens, componentes y de mi perfil personal interactivo.',
  github: 'https://github.com/matijara11',
  linkedin: 'https://www.linkedin.com/in/11-matias-jara/',
  skills: [
    { title: 'Composición musical', desc: 'Desarrollo de música para videojuegos y proyectos audiovisuales.' },
    { title: 'Diseño de sonido', desc: 'Creación de experiencias auditivas envolventes.' },
    { title: 'Creatividad & UI/UX', desc: 'Generación de ideas innovadoras, arquitectura visual y soluciones creativas.' },
    { title: 'Programación Front End', desc: 'Desarrollo de aplicaciones web interactivas con React, JavaScript y CSS moderno.' }
  ],
  movies: [
    {
      id: 'p1',
      title: 'El Señor de los Anillos: El Retorno del Rey',
      image: pelicula1,
      tag: 'Fantasía / Épico',
      year: 'Año 2003',
      review: 'Una obra maestra de la escala cinematográfica y la composición musical.'
    },
    {
      id: 'p2',
      title: '28 días después',
      image: pelicula2,
      tag: 'Terror / Sci-Fi',
      year: 'Año 2002',
      review: 'Innovadora dirección de fotografía y una atmósfera sonora impresionante.'
    },
    {
      id: 'p3',
      title: 'Había una vez en Hollywood',
      image: pelicula3,
      tag: 'Drama / Comedia',
      year: 'Año 2019',
      review: 'Brillante reconstrucción de época y ritmo narrativo impecable.'
    },
    {
      id: 'p4',
      title: 'Blade Runner',
      image: pelicula4,
      tag: 'Sci-Fi / Neo-Noir',
      year: 'Año 1982',
      review: 'Referente absoluto en diseño conceptual, luz y música sintetizada.'
    },
    {
      id: 'p5',
      title: 'Star Wars: Episodio V — El Imperio Contraataca',
      image: pelicula5,
      tag: 'Sci-Fi / Aventura',
      year: 'Año 1980',
      review: 'El desarrollo de personajes y la banda sonora más icónica de la saga.'
    }
  ],
  albums: [
    {
      id: 'd1',
      title: 'Fragile',
      artist: 'Yes',
      image: disco1,
      tag: 'Rock Progresivo',
      year: 'Año 1971',
      review: 'Complejidad instrumental y armonías únicas que definieron una época.'
    },
    {
      id: 'd2',
      title: 'Un Baión para el Ojo Idiota',
      artist: 'Patricio Rey y sus Redonditos de Ricota',
      image: disco2,
      tag: 'Rock Nacional',
      year: 'Año 1988',
      review: 'Un hito del rock argentino con lirismo, fuerza y sonido crudo.'
    },
    {
      id: 'd3',
      title: 'Facelift',
      artist: 'Alice in Chains',
      image: disco3,
      tag: 'Grunge / Alt Metal',
      year: 'Año 1990',
      review: 'Guitarras pesadas y armonías vocales melancólicas inolvidables.'
    },
    {
      id: 'd4',
      title: 'Revolver',
      artist: 'The Beatles',
      image: disco4,
      tag: 'Rock Psicodélico',
      year: 'Año 1966',
      review: 'La gran revolución de la experimentación en estudio de grabación.'
    },
    {
      id: 'd5',
      title: 'Eye in the Sky',
      artist: 'The Alan Parsons Project',
      image: disco5,
      tag: 'Art Rock / Pop Rock',
      year: 'Año 1982',
      review: 'Producción impecable y paisajes sonoros futuristas sensacionales.'
    },
    {
      id: 'd6',
      title: 'Películas',
      artist: 'La Máquina de Hacer Pájaros',
      image: disco6,
      tag: 'Rock Progresivo / Fusión',
      year: 'Año 1977',
      review: 'Una joya del rock progresivo lleno de metáforas hechas crítica social.'
    },
    {
      id: 'd7',
      title: 'El Jardín de los Presentes',
      artist: 'Invisible',
      image: disco7,
      tag: 'Rock Progresivo / Fusión',
      year: 'Año 1976',
      review: 'Obra maestra que fusiona la poesía del rock con la melancolía del tango.'
    }
  ]
};

// Componente auxiliar de Carrusel Interactivo con useRef y useState
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
    <section>
      <div className="section-header section-header-with-controls">
        <div>
          <span className="eyebrow">{subtitle}</span>
          <h2>{title} <span className="text-accent">favoritos</span></h2>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn prev-btn"
            aria-label="Anterior"
            type="button"
            onClick={handleScrollPrev}
            disabled={!canScrollPrev}
          >
            ⟨
          </button>
          <button
            className="carousel-btn next-btn"
            aria-label="Siguiente"
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

export default function MatiasProfile() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="profile-container">
      <Link to="/" className="btn-back">← Volver a la portada</Link>

      {/* Tarjeta Principal de Presentación */}
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner profile-hero-layout">
            <div className="member-avatar-slot profile-avatar-wrapper">
              {!avatarError ? (
                <img
                  src={matiasImg}
                  alt={`Avatar de ${matiasData.name}`}
                  className="member-avatar-img"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="member-avatar-icon">🎵</div>
              )}
            </div>

            <div className="profile-details">
              <span className="eyebrow">{matiasData.teamRole}</span>
              <h1 className="profile-name">{matiasData.name}</h1>
              <p className="profile-role">{matiasData.role}</p>

              <div className="profile-meta-info">
                <p><strong>📍 Ciudad:</strong> {matiasData.city}</p>
                <p><strong>🎂 Edad:</strong> {matiasData.age}</p>
              </div>

              <p className="profile-bio-text">{matiasData.bio}</p>

              <div className="profile-socials">
                <a
                  href={matiasData.github}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  href={matiasData.linkedin}
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

      {/* Sección: Habilidades */}
      <section id="habilidades" className="profile-section">
        <div className="double-bezel">
          <div className="double-bezel-inner profile-hero-layout">
            <div className="profile-details">
              <span className="eyebrow">Skills</span>
              <h3 className="mb-3">Habilidades</h3>
              <ul className="profile-list">
                {matiasData.skills.map((skill, index) => (
                  <li key={index}>
                    <strong className="text-blue">{index + 1}. {skill.title}:</strong> {skill.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Películas Favoritas */}
      <MediaCarousel
        title="Películas"
        subtitle="Cinematografía"
        items={matiasData.movies}
        isAlbum={false}
      />

      {/* Carrusel de Discos Favoritos */}
      <MediaCarousel
        title="Discos"
        subtitle="Colección Sonora"
        items={matiasData.albums}
        isAlbum={true}
      />
    </div>
  );
}
