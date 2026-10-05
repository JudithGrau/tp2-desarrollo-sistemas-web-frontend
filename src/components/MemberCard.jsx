import { Link } from 'react-router-dom';

export default function MemberCard({ id, name, role, avatar, icon = '👤' }) {
  return (
    <article className="double-bezel">
      <div className="double-bezel-inner member-card-content">
        <div className="member-avatar-slot">
          {avatar ? (
            <img 
              src={avatar} 
              alt={`Avatar de ${name}`} 
              className="member-avatar-img"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = 'flex';
                }
              }} 
            />
          ) : null}
          <div className="member-avatar-icon" style={{ display: avatar ? 'none' : 'flex' }}>
            {icon}
          </div>
        </div>

        <div>
          <h3 className="member-name">{name}</h3>
          <p className="member-role">{role}</p>
        </div>

        <Link to={`/perfil/${id}`} className="btn btn-secondary btn-full">
          Ver perfil
        </Link>
      </div>
    </article>
  );
}