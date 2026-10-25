import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  // Bloqueo de scroll de fondo y soporte para tecla Escape en móviles (Criterio 05 - Nivel Propone)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Botón flotante para abrir/cerrar en pantallas chicas (móviles) */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleSidebar}
        aria-label="Alternar menú de navegación"
        aria-expanded={isOpen}
        aria-controls="main-sidebar"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay para cerrar el menú al hacer clic afuera en móviles */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <aside 
        id="main-sidebar"
        className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}
        aria-label="Navegación principal del sitio"
      >
        <div className="sidebar-brand">
          <span className="brand-badge">TP2</span>
          <h2>DevTeam</h2>
        </div>

        <nav className="sidebar-nav">
          <span className="sidebar-subtitle">PRINCIPAL</span>
          <NavLink to="/" end onClick={closeSidebar}>
            <span>✦</span> Portada
          </NavLink>
          
          <span className="sidebar-subtitle">INTEGRANTES</span>
          <NavLink to="/perfil/judith" onClick={closeSidebar}>
            <span>👤</span> Judith Grau
          </NavLink>
          <NavLink to="/perfil/matias" onClick={closeSidebar}>
            <span>🎵</span> Matías Jara
          </NavLink>
          <NavLink to="/perfil/lucas" onClick={closeSidebar}>
            <span>💻</span> Lucas Luccaroni
          </NavLink>
          <NavLink to="/perfil/mauro" onClick={closeSidebar}>
            <span>📝</span> Mauro Flores
          </NavLink>

          <span className="sidebar-subtitle">DATOS & TÉCNICA</span>
          <NavLink to="/recursos" onClick={closeSidebar}>
            <span>📦</span> Datos Locales (JSON)
          </NavLink>
          <NavLink to="/api" onClick={closeSidebar}>
            <span>🌐</span> API Pública
          </NavLink>
          <NavLink to="/arbol" onClick={closeSidebar}>
            <span>🌳</span> Árbol de Renderizado
          </NavLink>
          <NavLink to="/bitacora" onClick={closeSidebar}>
            <span>📖</span> Bitácora
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <p>Front End · 2026</p>
        </div>
      </aside>
    </>
  );
}