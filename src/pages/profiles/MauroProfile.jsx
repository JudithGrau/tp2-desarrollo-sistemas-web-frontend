import { Link } from 'react-router-dom';

export default function MauroProfile() {
  return (
    <div className="profile-container">
      <Link to="/" className="btn-back">← Volver a la portada</Link>
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner text-center">
            <span className="eyebrow">Perfil de Integrante</span>
            <h1>Mauro Flores</h1>
            <p className="mt-4">Espacio para cargar datos, skills, discos/películas y componente dinámico interactivo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}