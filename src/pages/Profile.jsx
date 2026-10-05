import { useParams, Link } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();

  return (
    <section className="page-container">
      <Link to="/" className="btn-back">← Volver a la portada</Link>
      <h1>Perfil de {id ? id.toUpperCase() : 'Integrante'}</h1>
      <p>Aquí se cargará la información y la interacción dinámica de cada integrante.</p>
    </section>
  );
}