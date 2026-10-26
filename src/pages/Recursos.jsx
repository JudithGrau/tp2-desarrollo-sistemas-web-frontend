import { useState, useMemo } from 'react';
import recursosData from '../data/recursos.json';

export default function Recursos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [expandidoId, setExpandidoId] = useState(null);

  // Obtener lista única de categorías para los botones de filtrado
  const categorias = useMemo(() => {
    const cats = new Set(recursosData.map((r) => r.categoria));
    return ['Todas', ...Array.from(cats)];
  }, []);

  // Lógica de filtrado combinada y memorizada (búsqueda textual + categoría)
  const recursosFiltrados = useMemo(() => {
    const query = busqueda.toLowerCase().trim();

    return recursosData.filter((item) => {
      // 1. Filtro por categoría seleccionada
      const coincideCategoria =
        categoriaSeleccionada === 'Todas' || item.categoria === categoriaSeleccionada;

      if (!coincideCategoria) return false;

      // 2. Filtro por texto si existe término de búsqueda
      if (!query) return true;

      const coincideTitulo = item.titulo.toLowerCase().includes(query);
      const coincideDescripcion = item.descripcion.toLowerCase().includes(query);
      const coincideTags = item.tags.some((tag) => tag.toLowerCase().includes(query));

      return coincideTitulo || coincideDescripcion || coincideTags;
    });
  }, [busqueda, categoriaSeleccionada]);

  // Alternar el estado de expansión de una tarjeta (Criterio 10 - Nivel Propone)
  const toggleExpandir = (id) => {
    setExpandidoId((prev) => (prev === id ? null : id));
  };

  // Restablecer todos los filtros al estado original (Criterio 11 - Nivel Propone)
  const restablecerFiltros = () => {
    setBusqueda('');
    setCategoriaSeleccionada('Todas');
  };

  const hayFiltrosActivos = busqueda !== '' || categoriaSeleccionada !== 'Todas';

  return (
    <div className="page-container">
      {/* Encabezado / Hero de la sección */}
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner">
            <span className="eyebrow">Datos Locales JSON · Criterios 10 y 11</span>
            <h1 className="profile-name">Recursos y Herramientas</h1>
            <p className="profile-bio-text">
              Directorio técnico de 20 recursos fundamentales para el ecosistema frontend moderno.
              Permite filtrado reactivo en tiempo real por texto y categoría, con despliegue
              detallado de metadatos y etiquetas.
            </p>
          </div>
        </div>
      </section>

      {/* Controles de Búsqueda, Filtros y Estado */}
      <section className="recursos-controls-section" aria-label="Controles de búsqueda y filtros">
        <div className="double-bezel">
          <div className="double-bezel-inner recursos-controls-inner">
            
            {/* Campo de búsqueda en tiempo real */}
            <div className="recursos-search-box">
              <label htmlFor="recursos-search-input" className="recursos-label">
                Búsqueda en tiempo real:
              </label>
              <div className="recursos-input-wrapper">
                <input
                  id="recursos-search-input"
                  type="text"
                  className="recursos-search-input"
                  placeholder="Buscar por título, descripción o palabra clave (ej: react, ui, css, api)..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  autoComplete="off"
                />
                {busqueda && (
                  <button
                    type="button"
                    className="recursos-clear-btn"
                    onClick={() => setBusqueda('')}
                    aria-label="Limpiar término de búsqueda"
                    title="Limpiar búsqueda"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filtros por Categoría */}
            <div className="recursos-categories-box">
              <span className="recursos-label">Filtrar por categoría:</span>
              <div className="recursos-pills-container">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`recursos-pill ${categoriaSeleccionada === cat ? 'active' : ''}`}
                    onClick={() => setCategoriaSeleccionada(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Barra de estado, contador y botón de reseteo */}
            <div className="recursos-status-row">
              <span className="recursos-counter">
                Mostrando <strong>{recursosFiltrados.length}</strong> de {recursosData.length} recursos
                {categoriaSeleccionada !== 'Todas' && ` en "${categoriaSeleccionada}"`}
              </span>

              {hayFiltrosActivos && (
                <button
                  type="button"
                  className="btn btn-secondary recursos-reset-action"
                  onClick={restablecerFiltros}
                >
                  Restablecer filtros
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Grilla de Recursos o Estado Sin Coincidencias */}
      <section className="profile-section">
        {recursosFiltrados.length === 0 ? (
          <div className="double-bezel recursos-empty-state">
            <div className="double-bezel-inner text-center">
              <span className="eyebrow" style={{ color: 'var(--color-coral)' }}>Sin resultados</span>
              <h3 className="mb-2">No se encontraron recursos coincidentes</h3>
              <p className="profile-bio-text mb-4">
                No hay registros que coincidan con la búsqueda &quot;{busqueda}&quot;{' '}
                {categoriaSeleccionada !== 'Todas' && `en la categoría "${categoriaSeleccionada}"`}.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={restablecerFiltros}
              >
                Restablecer y ver los 20 recursos
              </button>
            </div>
          </div>
        ) : (
          <div className="recursos-grid">
            {recursosFiltrados.map((item) => {
              const expandido = expandidoId === item.id;

              return (
                <article key={item.id} className="double-bezel recursos-card">
                  <div className="double-bezel-inner h-100 d-flex flex-column justify-between">
                    <div>
                      <div className="recursos-card-header">
                        <span className="recursos-category-badge">{item.categoria}</span>
                        <span className="recursos-id">#{item.id}</span>
                      </div>
                      <h3 className="recursos-title">{item.titulo}</h3>
                      <p className="recursos-description">{item.descripcion}</p>
                    </div>

                    <div className="recursos-card-footer">
                      <div className="recursos-button-group">
                        <button
                          type="button"
                          className="btn btn-secondary recursos-btn-details"
                          onClick={() => toggleExpandir(item.id)}
                          aria-expanded={expandido}
                        >
                          {expandido ? 'Ocultar detalles' : 'Ver más detalles'}
                        </button>
                        <a
                          href={item.enlace}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary recursos-btn-link"
                        >
                          Visitar ↗
                        </a>
                      </div>

                      {/* Panel de detalles expandible (Criterio 10 Propone) */}
                      {expandido && (
                        <div className="recursos-expanded-box">
                          <p className="recursos-tags-heading">Etiquetas / Tags:</p>
                          <div className="recursos-tags-wrapper">
                            {item.tags.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                className="recursos-tag-badge"
                                onClick={() => setBusqueda(tag)}
                                title={`Filtrar por ${tag}`}
                              >
                                #{tag}
                              </button>
                            ))}
                          </div>
                          <div className="recursos-url-row">
                            <span className="text-secondary-label">Enlace: </span>
                            <a
                              href={item.enlace}
                              target="_blank"
                              rel="noreferrer"
                              className="recursos-url-text"
                            >
                              {item.enlace}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}