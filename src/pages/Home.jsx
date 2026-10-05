import { useState } from 'react';
import { Link } from 'react-router-dom';
import MemberCard from '../components/MemberCard';

// Importación directa de imágenes desde src/assets/
import imgJudith from '../assets/judith.png';
import imgMatias from '../assets/matias.png';
import imgLucas from '../assets/lucas.png';
import imgMauro from '../assets/mauro.png';

const teamMembers = [
  {
    id: 'judith',
    name: 'Judith',
    role: 'Coordinación & Portada',
    avatar: imgJudith,
    icon: '✦',
    description: 'Coordina la arquitectura del proyecto, la integración de rutas y el diseño modular de la portada.'
  },
  {
    id: 'matias',
    name: 'Matías',
    role: 'Sistema Visual & Perfil',
    avatar: imgMatias,
    icon: '🎨',
    description: 'Diseñó la arquitectura de tokens CSS, el sistema double-bezel y la estética visual compartida.'
  },
  {
    id: 'lucas',
    name: 'Lucas',
    role: 'Responsive & Testing',
    avatar: imgLucas,
    icon: '📱',
    description: 'Especialista en adaptabilidad multidispositivo, control de breakpoints móviles y datos locales.'
  },
  {
    id: 'mauro',
    name: 'Mauro',
    role: 'Bitácora & Documentación',
    avatar: imgMauro,
    icon: '📝',
    description: 'Documenta el proceso iterativo, la integración con APIs y el uso reflexivo de herramientas de IA.'
  }
];

export default function Home() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleRandomMember = () => {
    const availableMembers = teamMembers.filter(m => !selectedMember || m.id !== selectedMember.id);
    const randomIndex = Math.floor(Math.random() * availableMembers.length);
    setSelectedMember(availableMembers[randomIndex]);
  };

  return (
    <div className="home-container">
      {/* Hero de Portada */}
      <section className="hero-section">
        <span className="eyebrow">Trabajo Práctico Grupal Nº 2</span>
        <h1 className="hero-title">
          Desarrollo de Sistemas Web <span className="text-accent">Frontend</span>
        </h1>
        <p className="hero-description">
          Construimos aplicaciones web modulares, accesibles y adaptables. En esta segunda etapa migramos
          nuestra arquitectura hacia React, organizando la experiencia con un layout compartido mediante una Sidebar
          persistente y componentes reutilizables.
        </p>
        <div className="hero-actions">
          <a href="#equipo" className="btn btn-primary">Conocé al equipo ↓</a>
          <Link to="/bitacora" className="btn btn-secondary">Ver Bitácora</Link>
        </div>
      </section>

      {/* Interacción React: ¿A quién descubrimos hoy? */}
      <section className="spotlight-interactive-section">
        <div className="double-bezel">
          <div className="double-bezel-inner text-center">
            <span className="eyebrow">Dinámica Grupal</span>
            <h3>¿A quién descubrimos hoy?</h3>
            <p className="mb-4">
              Activá la selección aleatoria para conocer al instante el rol y enfoque de cada integrante.
            </p>
            
            <button 
              className="btn btn-primary" 
              type="button"
              onClick={handleRandomMember}
            >
              Seleccionar integrante al azar 🪄
            </button>

            {selectedMember && (
              <div className="random-member-card mt-4" aria-live="polite">
                <div className="random-card-inner">
                  <span className="badge-role">{selectedMember.role}</span>
                  <h4>{selectedMember.name}</h4>
                  <p>{selectedMember.description}</p>
                  <Link to={`/perfil/${selectedMember.id}`} className="btn btn-secondary">
                    Ir al perfil de {selectedMember.name} →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Grilla del Equipo */}
      <section id="equipo">
        <div className="section-header section-header-center">
          <span className="eyebrow">Integrantes</span>
          <h2>Nuestro <span className="text-accent">Equipo</span></h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
              icon={member.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}