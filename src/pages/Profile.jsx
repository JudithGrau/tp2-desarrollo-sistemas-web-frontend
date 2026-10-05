import { useParams, Link } from 'react-router-dom';
import JudithProfile from './profiles/JudithProfile';
import MatiasProfile from './profiles/MatiasProfile';
import LucasProfile from './profiles/LucasProfile';
import MauroProfile from './profiles/MauroProfile';

export default function Profile() {
  const { id } = useParams();

  switch (id?.toLowerCase()) {
    case 'judith':
      return <JudithProfile />;
    case 'matias':
      return <MatiasProfile />;
    case 'lucas':
      return <LucasProfile />;
    case 'mauro':
      return <MauroProfile />;
    default:
      return (
        <div className="profile-container">
          <Link to="/" className="btn-back">← Volver a la portada</Link>
          <div className="double-bezel text-center">
            <div className="double-bezel-inner">
              <h2>Perfil no encontrado</h2>
              <p>El integrante solicitado no forma parte del equipo.</p>
            </div>
          </div>
        </div>
      );
  }
}