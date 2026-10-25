const ARBOL = {
  nombre: 'main.jsx',
  nota: 'monta <App /> en el DOM',
  hijos: [
    {
      nombre: 'App',
      nota: 'BrowserRouter + Routes: define las rutas',
      hijos: [
        {
          nombre: 'Layout',
          nota: 'src/components/ · estructura compartida que renderiza <Outlet />',
          hijos: [
            { nombre: 'Sidebar', nota: 'menú lateral con la sección activa', hijos: [] },
            {
              nombre: 'Páginas (Outlet)',
              nota: 'cambian según la ruta',
              hijos: [
                { nombre: 'Home', nota: 'ruta "/" · portada con tarjetas de integrantes', hijos: [] },
                {
                  nombre: 'Profile',
                  nota: 'ruta "perfil/:id" · muestra el perfil según el integrante',
                  hijos: [
                    { nombre: 'JudithProfile', hijos: [] },
                    { nombre: 'MatiasProfile', hijos: [] },
                    { nombre: 'LucasProfile', hijos: [] },
                    { nombre: 'MauroProfile', hijos: [] },
                  ],
                },
                { nombre: 'Recursos', nota: 'ruta "recursos" · recursos.json con búsqueda y filtro', hijos: [] },
                { nombre: 'ApiView', nota: 'ruta "api" · consume la API de GitHub', hijos: [] },
                { nombre: 'RenderTree', nota: 'ruta "arbol" · esta página', hijos: [] },
                { nombre: 'Bitacora', nota: 'ruta "bitacora" · registros del proceso', hijos: [] },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function Nodo({ nodo }) {
  return (
    <li>
      <strong className="text-blue">{nodo.nombre}</strong>
      {nodo.nota && <span> — {nodo.nota}</span>}
      {nodo.hijos.length > 0 && (
        <ul className="profile-list" style={{ paddingLeft: '1.25rem' }}>
          {nodo.hijos.map((hijo) => (
            <Nodo key={hijo.nombre} nodo={hijo} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function RenderTree() {
  return (
    <div className="page-container">
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner">
            <span className="eyebrow">Arquitectura</span>
            <h1 className="profile-name">Árbol de renderizado</h1>
            <p className="profile-bio-text">
              Componente principal y sus hijos, tal como se renderizan en la aplicación.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="double-bezel">
          <div className="double-bezel-inner">
            <ul className="profile-list">
              <Nodo nodo={ARBOL} />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
