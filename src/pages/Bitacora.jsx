const ENTRADAS = [
  {
    entrada: "1",
    titulo: "Organización inicial y acuerdo de trabajo en equipo",
    responsables: "Judith Grau, Matías Jara, Lucas Luccaroni, Mauro Flores",
    tipo: "decisión",
    texto: "Decidimos continuar el proyecto del TP1 llevándolo a React, con un sitio navegable organizado desde una sidebar compartida. Judith creó el repositorio de TP2 y cada integrante lo clonó. Acordamos trabajar mediante ramas de Git, una por persona, subiendo solo los archivos propios, y mantener la convención de Conventional Commits (feat:, fix:, style:, docs:) para tener un historial limpio y transparente. Los roles quedaron así:",
    puntos: [
      "Judith: coordinación general, arquitectura (Vite, React Router, Layout y Sidebar), portada y estructura de los perfiles y de recursos.json.",
      "Matías: su perfil en MatiasProfile.jsx y los ajustes visuales de los componentes.",
      "Lucas: los 20 registros de recursos.json, la búsqueda y los filtros en Recursos.jsx, y su perfil en LucasProfile.jsx.",
      "Mauro: consumo de la API en ApiView.jsx, árbol de renderizado en RenderTree.jsx, bitácora en Bitacora.jsx y su perfil en MauroProfile.jsx."
    ]
  },
  {
    entrada: "2",
    titulo: "Base del proyecto publicada en main",
    responsables: "Judith Grau",
    tipo: "Logro",
    texto: "Judith dejó lista la estructura común en la rama main para que el resto pudiera trabajar sin pisarse:",
    puntos: [
      "Proyecto con Vite y React Router, con las rutas definidas en App.jsx.",
      "Layout con la Sidebar compartida, que indica la sección activa.",
      "Portada terminada, con selector aleatorio de integrantes y tarjetas modulares.",
      "Perfiles modularizados en src/pages/profiles/, para que cada uno trabaje su vista sin pisar a los demás.",
      "Estructura base de recursos.json."
    ]
  },
  {
    entrada: "3",
    titulo: "Repositorio y arquitectura de rutas, Layout y Sidebar",
    responsables: "Judith Grau",
    tipo: "Decisión",
    texto:
     "Judith decidió armar primero una base común antes de que el resto empezara a programar, de modo que nadie dependiera de las decisiones de otro ni pisara archivos compartidos. Para eso siguió estos pasos:",
    pasos: [
      "Creó el repositorio público e independiente de TP2 con Vite y React, e invitó a Matías, Lucas y Mauro como colaboradores para que cada uno pudiera trabajar en su rama.",
      "Instaló React Router y organizó el proyecto en carpetas con una responsabilidad cada una: components (Layout y Sidebar), pages (las secciones), pages/profiles (un archivo por integrante), data, assets y styles.",
      "En App.jsx definió BrowserRouter y Routes con una ruta padre “/” que usa el Layout y rutas hijas: la portada como index, perfil/:id, recursos, api, arbol y bitacora.",
      "Armó el Layout con la Sidebar y un Outlet dentro de main, de modo que el menú permanece fijo como referencia mientras cambia el contenido de cada sección.",
      "Construyó la Sidebar con un NavLink por sección, agrupadas en Principal, Integrantes y Datos & técnica, que resalta la sección activa. Sumó un botón de menú con un estado (useState) y un fondo que cierra el menú al tocar afuera, para pantallas chicas.",
      "Creó Profile.jsx, que lee el id de la ruta y con un switch devuelve el perfil de cada integrante. Así cada uno edita solo su archivo y nadie toca el sistema de rutas.",
    ]
  },
{
  entrada: "4",
  titulo: "Judith: portada, perfiles modulares y estructura de datos",
  responsables: "Judith Grau",
   tipo: "Logro",
    texto:
      "Con la arquitectura lista, Judith terminó las piezas compartidas restantes y publicó la base en main, avisando al equipo con el reparto de tareas:",
    pasos: [
      "Diseñó la portada con presentación propia del equipo y un selector aleatorio de integrantes, que muestra tarjetas modulares con acceso a cada perfil.",
      "Dejó un archivo por integrante en src/pages/profiles/ (JudithProfile, MatiasProfile, LucasProfile y MauroProfile) con la misma estructura, para que todos los perfiles compartan diseño y comportamiento.",
      "Creó la estructura base de recursos.json, con los campos que Lucas debía completar, y la conectó a la ruta de recursos.",
      "Publicó todo en main y pidió al equipo traer los cambios con git pull y crear su rama antes de empezar, indicando a cada uno sus archivos.",
    ]
  },
  {
    entrada: "5",
    titulo: "Matías: sistema visual compartido en una hoja de estilos",
    responsables: "Matías Jara.",
    tipo: "Decisión",
    texto:
      "Matías decidió concentrar el diseño en una única hoja de estilos (src/styles/style.css), cargada desde main.jsx y basada en variables globales, para que la portada, los perfiles, la sidebar y las secciones técnicas compartan la misma identidad visual sin duplicar estilos. Para eso siguió estos pasos:",
    pasos: [
      "Definió en :root los tokens del equipo: la paleta (fondo azul petróleo, superficies más claras, acento azul y acento coral), las tipografías Sora para títulos e Inter para el texto, una escala tipográfica fluida con clamp, una escala de espaciado, radios de borde, transiciones y niveles de z-index.",
      "Armó el reset y los estilos base (body, títulos, párrafos, enlaces y selección de texto) usando únicamente esas variables, de modo que un cambio de color o de tipografía se propague a toda la aplicación.",
      "Creó los componentes reutilizables del sistema: botones en cuatro variantes (primario con degradado, secundario, de acento y ghost), badges de colores, la etiqueta eyebrow y los contenedores de doble borde (double-bezel) y de tarjeta con imagen (card-bezel).",
      "Sumó clases utilitarias de texto y de espaciado (text-blue, text-accent, mb-3, mt-4, h-100) y una clase para lectores de pantalla (sr-only), para que cada integrante arme sus vistas con las mismas piezas y sin escribir CSS propio."
    ]
  },
  {
    entrada: "6",
    titulo: "Matías: perfil con galerías interactivas de películas y discos",
    responsables: "Matías Jara.",
    tipo: "Decisión",
    texto:
      "Para su perfil, Matías decidió ir más allá de una lista y presentar sus películas y discos favoritos como galerías interactivas, aprovechando el sistema visual compartido. Su trabajo, paso a paso:",
    pasos: [
      'Reutilizó la estructura de perfil del equipo (presentación, tarjetas y botones) para que su vista fuera coherente con las de los demás integrantes.',
      'Armó dos galerías de desplazamiento horizontal (scroll-gallery), una de películas y otra de discos, con scroll-snap para que cada tarjeta se alinee al deslizar y con la barra de scroll oculta para un aspecto limpio.',
      'Diseñó la tarjeta multimedia (media-card) con proporción de póster 2:3 para las películas y cuadrada para los discos, la imagen ocupando toda la tarjeta y un efecto de elevación con borde coral al pasar el mouse.',
      'Agregó una capa informativa (media-overlay) que aparece con desvanecido y desenfoque al pasar el mouse o al marcar la tarjeta como activa (clase is-active, pensada para tocar en celulares), con la etiqueta, el título, el artista, los datos y una reseña breve.',
      'Incorporó botones de flecha (carousel-btn) en la cabecera de cada galería para desplazarla, con los mismos colores y efectos del resto del sistema.',
      'Ajustó los tamaños de las tarjetas, de los textos de la capa y de los botones en los breakpoints de 900px y 400px, para que las galerías se vean bien en tablet y en celular.'
    ]
  },

{
  entrada: "7",
  titulo: "Lucas: recursos.json, búsqueda y filtros",
  responsables: "Lucas Luccaroni",
  tipo: "Decisión",
  texto:
    "Lucas decidió que la sección de recursos funcionara con datos locales, de forma que la búsqueda y el filtro actualizaran la pantalla sin depender de ningún servicio externo. Su plan de trabajo:",
    pasos: [
      "Completó recursos.json con al menos 20 registros relacionados con la propuesta del equipo, cada uno con id, nombre, categoría, descripción y enlace, para que la categoría pudiera usarse como filtro.",
      "En Recursos.jsx importó el JSON y creó dos estados con useState: el texto de búsqueda y la categoría seleccionada.",
      "Calculó la lista visible con filter: un recurso se muestra si su nombre o descripción incluye el texto buscado (sin distinguir mayúsculas) y si coincide con la categoría elegida o está seleccionada la opción (todas).",
      "Mostró los resultados con map en tarjetas del sistema de diseño, y agregó un mensaje de “sin resultados” cuando ningún recurso coincide.",
      "Agregó un campo de texto y un selector de categoría que actualizan los estados en cada cambio, de modo que la lista se actualiza al instante.",
    ]
  },
  {
    entrada: "8",
    titulo: "Mauro: API pública con estados de carga y error",
    responsables: "Mauro Flores",
    tipo: "Decisión",
    texto:
      "Mauro eligió la API pública de GitHub (api.github.com/users) porque no requiere clave privada, se consulta directo desde el navegador y encaja con el proyecto: muestra datos reales de los propios integrantes. Los pasos fueron:",    
    pasos: [   
      "Definió un arreglo con el nombre y el usuario de GitHub de cada integrante como fuente de las consultas.",
      "En ApiView.jsx usó useEffect para consultar al montar el componente, con fetch y Promise.all para pedir los cuatro perfiles a la vez, y un AbortController para cancelar la consulta si se sale de la página.",
      "Creó tres estados (perfiles, cargando y error) para mostrar un mensaje mientras se espera la respuesta y otro con el detalle si la API falla o un usuario no existe.",
      "Mostró en tarjetas del equipo el avatar, los repositorios públicos, los seguidores, la fecha de alta y un enlace al perfil, y explicó en pantalla qué información aporta la API.",
      "Probó el caso normal y el de error, cambiando un usuario por uno inexistente para ver el mensaje, y eliminó los estilos propios para usar solo las clases del equipo y mantener el diseño unificado.",
    ]
  }, 
  {
    entrada: "9",
    titulo: "Mauro: árbol de renderizado verificado contra el código",
    responsables: "Mauro Flores",
    tipo: "Logro",
    texto:
     "Para que el árbol correspondiera al código entregado y no fuera solo una lista de carpetas, Mauro lo armó leyendo los archivos reales:",
    pasos: [
      "Revisó App.jsx, el Layout y la Sidebar para identificar quién renderiza a quién.",
      "Registró la jerarquía: App define BrowserRouter y Routes; el Layout renderiza la Sidebar y un Outlet; en el Outlet cambian Home, Profile, Recursos, ApiView, RenderTree y Bitacora.",
      "Comprobó cómo Profile elige, con un switch según el id, entre JudithProfile, MatiasProfile, LucasProfile y MauroProfile, y lo incluyó como hijos de Profile.",
      "Escribió el árbol como un objeto de datos y lo mostró con un componente recursivo, de modo que actualizarlo implica editar un solo arreglo.",
    ]
  },
  {
   entrada: "10",
    titulo: "Mauro: bitácora integrada a la navegación",
    responsables: "Mauro Flores",
    tipo: "Decisión",
    texto:
      "Mauro decidió continuar la bitácora del TP1 dentro de la aplicación, con el mismo formato de entradas, y que cada rol quede documentado con sus decisiones y los pasos de trabajo:",
    pasos: [
      "Mantuvo el formato de la bitácora anterior: entrada, responsables y decisión.",
      "Documentó la decisión de cada rol (Judith, Matías, Lucas y Mauro) con los pasos para llevarla a cabo.",
      "Agregó al final un cuadro con los 15 criterios de la consigna, su responsable y su estado, para controlar el cumplimiento antes de entregar.",
      "La dejó accesible desde la Sidebar, en la ruta /bitacora.",
    ]
},
{
  entrada: "11",
  titulo: "Uso de IA como asistente",
  responsables: "Todos",
  tipo: "Decisión",
  texto:
   "El equipo usó asistentes de IA para programar, revisar errores y explorar diseños, adaptando siempre el resultado a la propuesta y comprobando que funcione. La aplicación y el modelo utilizados, con el detalle por integrante, se declaran en el README.",
},
];
const CONSIGNA = [
  {
    n: 1,
    criterio: 'Repositorio y publicación',
    responsable: 'Judith',
    estado: 'listo',
    detalle:
      'El equipo cuenta con un repositorio público e independiente para el TP2, creado por Judith, y la aplicación está publicada en Vercel. Ambos enlaces se comprobaron sin iniciar sesión.'
  },
  {
    n: 2,
    criterio: 'README obligatorio',
    responsable: 'Equipo',
    estado: 'listo',
    detalle:
      'El README.md de la raíz incluye la descripción del proyecto, el enlace al deploy en Vercel, el nombre de los cuatro integrantes con sus perfiles de GitHub, las responsabilidades del equipo y la declaración de uso de IA.'
  },
  {
    n: 3,
    criterio: 'Integrantes con acceso al repositorio',
    responsable: 'Judith',
    estado: 'listo',
    detalle:
      'Matías, Lucas y Mauro fueron incorporados como colaboradores del repositorio y aceptaron la invitación. Judith, que lo creó, ya contaba con acceso.'
  },
  {
    n: 4,
    criterio: 'Proyecto desarrollado en React',
    responsable: 'Equipo',
    estado: 'listo',
    detalle:
      'La aplicación se desarrolló con Vite y React, con todas las pantallas construidas mediante componentes y la navegación resuelta con React Router (BrowserRouter, Routes y Outlet). Continúa el proyecto iniciado en el TP1.'
  },
  {
    n: 5,
    criterio: 'Sidebar compartida',
    responsable: 'Judith',
    estado: 'listo',
    detalle:
      'El componente Sidebar vive dentro del Layout y permanece visible en todas las secciones. Muestra la identidad del equipo (TP2 · DevTeam), agrupa los accesos en Principal, Integrantes y Datos & técnica, e indica la sección activa con NavLink. En pantallas chicas se abre con un botón de menú.'
  },
  {
    n: 6,
    criterio: 'Navegación completa',
    responsable: 'Judith',
    estado: 'listo',
    detalle:
      'Todas las pantallas se recorren desde la Sidebar, y los perfiles incluyen un enlace para volver a la portada. Ninguna sección obliga a usar el botón Atrás del navegador.'
  },
  {
    n: 7,
    criterio: 'Portada del equipo',
    responsable: 'Judith',
    estado: 'listo',
    detalle:
      'La portada presenta al equipo con su nombre y descripción, un selector aleatorio de integrantes y tarjetas modulares con acceso directo a cada perfil, con una presentación propia más allá de los enlaces.'
  },
  {
    n: 8,
    criterio: 'Perfiles dentro de React',
    responsable: 'Todos',
    estado: 'listo',
    detalle:
      'Cada integrante tiene su perfil como componente en src/pages/profiles/ (JudithProfile, MatiasProfile, LucasProfile y MauroProfile), que Profile.jsx elige con un switch según el id de la ruta. Ninguno enlaza a páginas del TP1 y todos incluyen una interacción funcional sobre su contenido.'
  },
  {
    n: 9,
    criterio: 'Apropiación y propuesta estética',
    responsable: 'Matías',
    estado: 'listo',
    detalle:
      'El equipo mantuvo la identidad visual del TP1 y la adaptó a React: paleta de colores propia, tipografías Sora e Inter, tarjetas de doble borde y avatares personalizados. Los mismos estilos se usan en la portada, los perfiles y las secciones técnicas, por lo que todo se ve como un único sistema.'
  },
  {
    n: 10,
    criterio: 'Datos locales JSON',
    responsable: 'Lucas',
    estado: 'listo',
    detalle:
      'El archivo recursos.json contiene 20 registros relacionados con la propuesta del equipo, con id, nombre, categoría, descripción y enlace. Recursos.jsx los muestra de forma dinámica en tarjetas.'
  },
  {
    n: 11,
    criterio: 'Búsqueda y filtro',
    responsable: 'Lucas',
    estado: 'listo',
    detalle:
      'Sobre el listado de recursos hay una búsqueda por texto, que revisa nombre y descripción, y un filtro por categoría. Ambos actualizan los resultados al instante y, si nada coincide, se muestra un mensaje de sin resultados.'
  },
  {
    n: 12,
    criterio: 'API pública y estados',
    responsable: 'Mauro',
    estado: 'listo',
    detalle:
      'La sección consulta la API pública de GitHub, sin clave privada, y explica en pantalla qué información aporta: avatar, repositorios públicos, seguidores y fecha de alta de cada integrante. Muestra un mensaje mientras carga y otro si la consulta falla.'
  },
  {
    n: 13,
    criterio: 'Árbol de renderizado',
    responsable: 'Mauro',
    estado: 'listo',
    detalle:
      'La sección Árbol de Renderizado muestra la jerarquía real de componentes: App, Layout, Sidebar, las páginas que cambian en el Outlet y los perfiles que elige Profile. Se verificó contra App.jsx, el Layout y la Sidebar, por lo que corresponde al código entregado.'
  },
  {
    n: 14,
    criterio: 'Bitácora',
    responsable: 'Mauro',
    estado: 'listo',
    detalle:
      'Esta sección continúa la bitácora del TP1 dentro de la aplicación. Registra, entrada por entrada, la decisión de cada rol y los pasos para llevarla a cabo, y cierra con el estado de cumplimiento de la consigna.'
  },
  {
    n: 15,
    criterio: 'Declaración de uso de IA',
    responsable: 'Todos',
    estado: 'listo',
    detalle:
      'El README declara las aplicaciones y los modelos de IA utilizados, diferenciando la aplicación de trabajo del modelo empleado, e indica qué usó cada integrante y en qué tarea.'
  }
];

export default function Bitacora() {
  const listos = CONSIGNA.filter((c) => c.estado === 'listo').length;

  return (
    <div className="page-container">
      <section className="profile-section-hero">
        <div className="double-bezel">
          <div className="double-bezel-inner">
            <span className="eyebrow">Proceso de trabajo</span>
            <h1 className="profile-name">Bitácora del equipo</h1>
            <p className="profile-bio-text">
              Registro del TP2: la decisión de cada rol y los pasos para llevarla a cabo.
              Continúa la bitácora del TP1 dentro de la aplicación React.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section" style={{ display: 'grid', gap: '1.5rem' }}>
        {ENTRADAS.map((e, index) => (
          <article key={e.titulo} className="double-bezel">
            <div className="double-bezel-inner">
              <span className="eyebrow">Entrada {index + 1}</span>
              <h3 className="mb-3">{e.titulo}</h3>
              <p className="profile-bio-text">
                <strong className="text-blue">Responsables:</strong> {e.responsables}
              </p>
              <p className="profile-bio-text">
                <strong className="text-blue">{e.tipo}:</strong> {e.texto}
              </p>
              {e.puntos && (
                <ul className="profile-list">
                  {e.puntos.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {e.pasos && (
                <ul className="profile-list">
                  {e.pasos.map((p, i) => (
                    <li key={p}>
                      <strong className="text-blue">Paso {i + 1}:</strong> {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="profile-section">
        <div className="double-bezel">
          <div className="double-bezel-inner">
            <span className="eyebrow">Cumplimiento de la consigna</span>
            <h3 className="mb-3">
              {listos} de {CONSIGNA.length} criterios completos
            </h3>
            <ul className="profile-list">
              {CONSIGNA.map((c) => (
                <li key={c.n}>
                  <strong className="text-blue">
                    {c.n}. {c.criterio}
                  </strong>{' '}
                  <span className="badge-role">{c.estado}</span>
                  <br />
                  <small>Responsable: {c.responsable}</small>
                  <p>{c.detalle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

