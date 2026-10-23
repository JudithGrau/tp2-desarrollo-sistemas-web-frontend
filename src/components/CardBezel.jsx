import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CardBezel({
  title,
  subtitle,
  description,
  image,
  imageAlt = '',
  badge,
  badgeVariant = 'blue',
  link,
  linkText = 'Ver más →',
  isExternal = false,
  className = '',
  children
}) {
  const [imageError, setImageError] = useState(false);

  const renderBadge = () => {
    if (!badge) return null;
    const badgeClass = `badge badge-${badgeVariant}`;
    return <span className={badgeClass}>{badge}</span>;
  };

  const renderLink = () => {
    if (!link) return null;
    const isExternalLink = isExternal || link.startsWith('http');

    if (isExternalLink) {
      return (
        <a
          href={link}
          className="btn btn-secondary btn-full"
          target="_blank"
          rel="noreferrer"
        >
          {linkText}
        </a>
      );
    }

    return (
      <Link to={link} className="btn btn-secondary btn-full">
        {linkText}
      </Link>
    );
  };

  return (
    <article className={`double-bezel card-bezel-wrapper ${className}`.trim()}>
      <div className="double-bezel-inner card-bezel-inner">
        {badge && (
          <div className="card-bezel-header">
            {renderBadge()}
          </div>
        )}

        {image && !imageError && (
          <div className="card-bezel-media">
            <img
              src={image}
              alt={imageAlt || title || 'Imagen de tarjeta'}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          </div>
        )}

        <div className="card-bezel-body">
          {subtitle && <span className="eyebrow">{subtitle}</span>}
          {title && <h3 className="card-bezel-title">{title}</h3>}
          {description && <p className="text-secondary">{description}</p>}
          {children}
        </div>

        {link && (
          <div className="card-bezel-footer">
            {renderLink()}
          </div>
        )}
      </div>
    </article>
  );
}
